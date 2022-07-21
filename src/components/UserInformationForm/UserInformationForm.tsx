import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './UserInformationForm.scss';
import React from 'react';
import { useDispatch } from 'react-redux';
import DatePicker from 'react-datepicker';
import { setUserInformation } from '../../store/actions';
import { updateUserInformation } from '../../api/facades';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import {
  ValidationSpecInformationSchema,
  ValidationStudentInformationSchema,
} from '../ValidationSchema';
import 'react-datepicker/dist/react-datepicker.css';

// interface EducationType {
//   title: string;
//   faculty: string;
//   spec: string;
//   yearStart: string;
//   yearEnd: string;
// }
// interface workExperience {
//   organization: string;
//   position: string;
//   yearStart: string;
//   yearEnd: string;
//   tillNow: boolean;
// }
// interface AddressType {
//   city: string;
//   street: string;
//   line2: string;
// }

// interface ValuesStudentType {
//   firstName: string;
//   lastName: string;
//   gender: string;
//   birthDate: string;
//   phoneNumber: string;
// }

// interface ValuesSpecType {
//   firstName: string;
//   lastName: string;
//   gender: string;
//   birthDate: string;
//   phoneNumber: string;
//   education: EducationType;
//   workExperience: workExperience;
//   address: AddressType;
//   about: string;
//   skills: Array<string>;
//   сlassesFormat: Array<string>;
// }

export const UserInformationForm = ({ isStudent }: { isStudent?: boolean }) => {
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const { userInformation } = useTypedSelector(
    (state) => state.userInformationReducer,
  );
  const dispatch = useDispatch();

  const [startDate, setStartDate] = useState(new Date());
  const gender =
    userInformation?.gender === 0
      ? 'женский'
      : userInformation?.gender === 1
      ? 'мужской'
      : userInformation?.gender === 1
      ? 'другое'
      : '';

  const skills =
    !isStudent &&
    userInformation?.skills.map((item: string) => {
      item =
        item === 'english'
          ? 'Английский'
          : item === 'belarus'
          ? 'Белорусский'
          : item === 'russian'
          ? 'Русский'
          : item === 'math'
          ? 'Математика'
          : item === 'higher_math'
          ? 'Высшая математика'
          : item === 'chemistry'
          ? 'Химия'
          : item === 'biology'
          ? 'Биология'
          : item === 'computer_science'
          ? 'Информатика'
          : item === 'history'
          ? 'История'
          : item === 'literature'
          ? 'Литература'
          : item === 'social_science'
          ? 'Обществоведение'
          : item === 'philosophy'
          ? 'Философия'
          : item === 'philology'
          ? 'Филология'
          : item === 'drawing'
          ? 'Черчение'
          : item === 'economy'
          ? 'Экономика'
          : item === 'geography'
          ? 'География'
          : 'Другое';
      return item;
    });

  const сlassesFormat: Array<string> =
    !isStudent &&
    userInformation?.сlassesFormat.map((item: string) => {
      item =
        item === 'remotely'
          ? 'Удаленно'
          : item === 'at_the_tutor'
          ? 'У ученика'
          : item === 'at_home'
          ? 'У репетитора'
          : 'Не важно';
      return item;
    });
  const birthDate = `${startDate.getDate()}.${
    startDate.getMonth() + 1
  }.${startDate.getFullYear()}`;
  const currentYear = userInformation?.workExperience.tillNow
    ? new Date().getFullYear()
    : 0;

  const handleFormSubmit = async (values: any) => {
    setIsEditFormOpen(false);

    const userDataArray = isStudent
      ? {
          ...values,
          birthDate: `${startDate}`,
        }
      : {
          ...values,
          birthDate: `${startDate}`,
          workExperience: {
            ...values.workExperience,
            yearEnd: `${currentYear}`,
          },
        };

    try {
      const data = await updateUserInformation(userDataArray);
      dispatch(setUserInformation(data?.content));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="s-user-info">
      <h2 className="s-user-info__title">Анкета</h2>
      {isEditFormOpen ? (
        isStudent ? (
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              gender: '',
              birthDate: '',
              phoneNumber: '',
            }}
            validateOnBlur={false}
            validationSchema={ValidationStudentInformationSchema}
            onSubmit={(values) => handleFormSubmit(values)}
          >
            {({ values }) => (
              <Form className="f-user-info">
                <div className="f-user-info__row">
                  <label
                    htmlFor="firstName"
                    className="f-user-info__field-label-bold"
                  >
                    Имя <span className="l-user-info__title_span">*</span>:
                  </label>
                  <br />
                  <Field
                    component="input"
                    id="firstName"
                    name="firstName"
                    className="f-user-info__field"
                    value={values.firstName}
                  />
                  <ErrorMessage
                    name="firstName"
                    component={({ children }: { children?: string }) => (
                      <p className="f-user-info__field-error">{children}</p>
                    )}
                  />
                </div>
                <div className="f-user-info__row">
                  <label
                    htmlFor="lastName"
                    className="f-user-info__field-label-bold"
                  >
                    Фамилия <span className="l-user-info__title_span">*</span>:
                  </label>
                  <br />
                  <Field
                    component="input"
                    id="lastName"
                    name="lastName"
                    className="f-user-info__field"
                    value={values.lastName}
                  />
                  <ErrorMessage
                    name="lastName"
                    component={({ children }: { children?: string }) => (
                      <p className="f-user-info__field-error">{children}</p>
                    )}
                  />
                </div>
                <div className="f-user-info__row">
                  <label
                    htmlFor="gender"
                    className="f-user-info__field-label-bold"
                  >
                    Пол <span className="l-user-info__title_span">*</span>:
                  </label>
                  <br />
                  <Field
                    component="select"
                    id="gender"
                    name="gender"
                    className="f-user-info__field"
                    value={values.gender}
                  >
                    <option value="" label="Выберите"></option>
                    <option value="0">ж</option>
                    <option value="1">м</option>
                    <option value="2">др.</option>
                  </Field>
                  <ErrorMessage
                    name="gender"
                    component={({ children }: { children?: string }) => (
                      <p className="f-user-info__field-error">{children}</p>
                    )}
                  />
                </div>
                <div className="f-user-info__row">
                  <label
                    htmlFor="birthDate"
                    className="f-user-info__field-label-bold"
                  >
                    Дата Рождения{' '}
                    <span className="l-user-info__title_span">*</span>:
                  </label>
                  <br />
                  <DatePicker
                    selected={startDate}
                    onChange={(date: Date) => setStartDate(date)}
                    showYearDropdown
                    dateFormatCalendar="MMMM"
                    yearDropdownItemNumber={70}
                    scrollableYearDropdown
                    className="f-user-info__field"
                  />
                </div>
                <div className="f-user-info__row">
                  <label
                    htmlFor="phoneNumber"
                    className="f-user-info__field-label-bold"
                  >
                    Номер телефона{' '}
                    <span className="l-user-info__title_span">*</span>:
                  </label>
                  <br />
                  <Field
                    component="input"
                    id="phoneNumber"
                    name="phoneNumber"
                    className="f-user-info__field"
                    value={values.phoneNumber}
                  />
                  <ErrorMessage
                    name="phoneNumber"
                    component={({ children }: { children?: string }) => (
                      <p className="f-user-info__field-error">{children}</p>
                    )}
                  />
                </div>

                <div className="f-user-info__btn-wrapper">
                  <button type="submit" className="f-user-info__btn">
                    Сохранить
                  </button>
                  <button
                    className="f-user-info__btn"
                    onClick={() => setIsEditFormOpen(false)}
                  >
                    Назад
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        ) : (
          <Formik
            initialValues={{
              education: {
                title: '',
                faculty: '',
                spec: '',
                yearStart: '',
                yearEnd: '',
              },
              workExperience: {
                organization: '',
                position: '',
                yearStart: '',
                yearEnd: '',
                tillNow: false,
              },
              address: {
                city: '',
                street: '',
                line2: '',
              },
              firstName: '',
              lastName: '',
              about: '',
              gender: '',
              birthDate: '',
              phoneNumber: '',
              skills: [],
              сlassesFormat: [],
            }}
            validateOnBlur={false}
            validationSchema={ValidationSpecInformationSchema}
            onSubmit={(values) => handleFormSubmit(values)}
          >
            {({ values }) => (
              <Form className="f-user-info">
                <div className="f-user-info__row">
                  <label
                    htmlFor="firstName"
                    className="f-user-info__field-label-bold"
                  >
                    Имя <span className="l-user-info__title_span">*</span>:
                  </label>
                  <br />
                  <Field
                    component="input"
                    id="firstName"
                    name="firstName"
                    className="f-user-info__field"
                    value={values.firstName}
                  />
                  <ErrorMessage
                    name="firstName"
                    component={({ children }: { children?: string }) => (
                      <p className="f-user-info__field-error">{children}</p>
                    )}
                  />
                </div>
                <div className="f-user-info__row">
                  <label
                    htmlFor="lastName"
                    className="f-user-info__field-label-bold"
                  >
                    Фамилия <span className="l-user-info__title_span">*</span>:
                  </label>
                  <br />
                  <Field
                    component="input"
                    id="lastName"
                    name="lastName"
                    className="f-user-info__field"
                    value={values.lastName}
                  />
                  <ErrorMessage
                    name="lastName"
                    component={({ children }: { children?: string }) => (
                      <p className="f-user-info__field-error">{children}</p>
                    )}
                  />
                </div>
                <div className="f-user-info__row">
                  <label
                    htmlFor="gender"
                    className="f-user-info__field-label-bold"
                  >
                    Пол <span className="l-user-info__title_span">*</span>:
                  </label>
                  <br />
                  <Field
                    component="select"
                    id="gender"
                    name="gender"
                    className="f-user-info__field"
                    value={values.gender}
                  >
                    <option value="" label="Выберите"></option>
                    <option value="0">ж</option>
                    <option value="1">м</option>
                    <option value="2">др.</option>
                  </Field>
                  <ErrorMessage
                    name="gender"
                    component={({ children }: { children?: string }) => (
                      <p className="f-user-info__field-error">{children}</p>
                    )}
                  />
                </div>
                <div className="f-user-info__row">
                  <label
                    htmlFor="birthDate"
                    className="f-user-info__field-label-bold"
                  >
                    Дата Рождения{' '}
                    <span className="l-user-info__title_span">*</span>:
                  </label>
                  <br />
                  <DatePicker
                    selected={startDate}
                    onChange={(date: Date) => setStartDate(date)}
                    showYearDropdown
                    dateFormatCalendar="MMMM"
                    yearDropdownItemNumber={70}
                    scrollableYearDropdown
                    className="f-user-info__field"
                  />
                </div>
                <div className="f-user-info__row">
                  <label
                    htmlFor="phoneNumber"
                    className="f-user-info__field-label-bold"
                  >
                    Номер телефона{' '}
                    <span className="l-user-info__title_span">*</span>:
                  </label>
                  <br />
                  <Field
                    component="input"
                    id="phoneNumber"
                    name="phoneNumber"
                    className="f-user-info__field"
                    value={values.phoneNumber}
                  />
                  <ErrorMessage
                    name="phoneNumber"
                    component={({ children }: { children?: string }) => (
                      <p className="f-user-info__field-error">{children}</p>
                    )}
                  />
                </div>
                <div className="f-user-info__row">
                  <label
                    htmlFor="about"
                    className="f-user-info__field-label-bold"
                  >
                    О себе <span className="l-user-info__title_span">*</span>:
                  </label>
                  <br />
                  <Field
                    component="textarea"
                    id="about"
                    name="about"
                    className="f-user-info__field"
                    value={values.about}
                  />
                  <ErrorMessage
                    name="about"
                    component={({ children }: { children?: string }) => (
                      <p className="f-user-info__field-error">{children}</p>
                    )}
                  />
                </div>

                <div className="f-user-info__row">
                  <h3 className="f-user-info__field-title">Образование:</h3>
                  <label
                    htmlFor="textEducationTitle"
                    className="f-user-info__field-label-light"
                  >
                    Учебное заведение{' '}
                    <span className="l-user-info__title_span">*</span>
                  </label>
                  <Field
                    component="textarea"
                    id="textEducationTitle"
                    name="education.title"
                    className="f-user-info__field"
                    value={values.education.title}
                  />
                  <ErrorMessage
                    name="education.title"
                    component={({ children }: { children?: string }) => (
                      <p className="f-user-info__field-error">{children}</p>
                    )}
                  />
                  <label
                    htmlFor="textEducationFaculty"
                    className="f-user-info__field-label-light"
                  >
                    Факультет <span className="l-user-info__title_span">*</span>
                  </label>
                  <Field
                    component="textarea"
                    id="textEducationFaculty"
                    name="education.faculty"
                    className="f-user-info__field"
                    value={values.education.faculty}
                  />
                  <ErrorMessage
                    name="education.faculty"
                    component={({ children }: { children?: string }) => (
                      <p className="f-user-info__field-error">{children}</p>
                    )}
                  />
                  <label
                    htmlFor="textEducationSpec"
                    className="f-user-info__field-label-light"
                  >
                    Специальность{' '}
                    <span className="l-user-info__title_span">*</span>
                  </label>
                  <Field
                    component="textarea"
                    id="textEducationSpec"
                    name="education.spec"
                    className="f-user-info__field"
                    value={values.education.spec}
                  />
                  <ErrorMessage
                    name="education.spec"
                    component={({ children }: { children?: string }) => (
                      <p className="f-user-info__field-error">{children}</p>
                    )}
                  />
                  <div className="f-user-info__field-wrapp">
                    <div className="f-user-info__field-wrapp-inner">
                      <label
                        htmlFor="startEducation"
                        className="f-user-info__field-label-light"
                      >
                        Год начала{' '}
                        <span className="l-user-info__title_span">*</span>:
                      </label>
                      <br />
                      <Field
                        component="input"
                        id="startEducation"
                        name="education.yearStart"
                        className="f-user-info__field number"
                        value={values.education.yearStart}
                      />
                      <ErrorMessage
                        name="education.yearStart"
                        component={({ children }: { children?: string }) => (
                          <p className="f-user-info__field-error number">
                            {children}
                          </p>
                        )}
                      />
                    </div>
                    <div className="f-user-info__field-wrapp-inner">
                      <label
                        htmlFor="endEducation"
                        className="f-user-info__field-label-light"
                      >
                        Год окончания{' '}
                        <span className="l-user-info__title_span">*</span>:
                      </label>
                      <br />
                      <Field
                        component="input"
                        id="endEducation"
                        name="education.yearEnd"
                        className="f-user-info__field number"
                        value={values.education.yearEnd}
                      />
                      <ErrorMessage
                        name="education.yearEnd"
                        component={({ children }: { children?: string }) => (
                          <p className="f-user-info__field-error number">
                            {children}
                          </p>
                        )}
                      />
                    </div>
                  </div>
                </div>

                <div className="f-user-info__row">
                  <h3 className="f-user-info__field-title">Опыт работы:</h3>
                  <label
                    htmlFor="workExpirienceOrganization"
                    className="f-user-info__field-label-light"
                  >
                    Организация{' '}
                    <span className="l-user-info__title_span">*</span>
                  </label>
                  <br />
                  <Field
                    component="textarea"
                    id="workExpirienceOrganization"
                    name="workExperience.organization"
                    className="f-user-info__field"
                    value={values.workExperience.organization}
                  />
                  <ErrorMessage
                    name="workExperience.organization"
                    component={({ children }: { children?: string }) => (
                      <p className="f-user-info__field-error">{children}</p>
                    )}
                  />
                  <label
                    htmlFor="workExpiriencePosition"
                    className="f-user-info__field-label-light"
                  >
                    Должность <span className="l-user-info__title_span">*</span>
                  </label>
                  <br />
                  <Field
                    component="textarea"
                    id="workExpiriencePosition"
                    name="workExperience.position"
                    className="f-user-info__field"
                    value={values.workExperience.position}
                  />
                  <ErrorMessage
                    name="workExperience.position"
                    component={({ children }: { children?: string }) => (
                      <p className="f-user-info__field-error">{children}</p>
                    )}
                  />
                  <div className="f-user-info__field-wrapp">
                    <div className="f-user-info__field-wrapp-inner">
                      <label
                        htmlFor="workExpirienceStart"
                        className="f-user-info__field-label-light"
                      >
                        Год начала{' '}
                        <span className="l-user-info__title_span">*</span>:
                      </label>
                      <br />
                      <Field
                        component="input"
                        id="workExpirienceStart"
                        name="workExperience.yearStart"
                        className="f-user-info__field number"
                        value={values.workExperience.yearStart}
                      />
                      <ErrorMessage
                        name="workExperience.yearStart"
                        component={({ children }: { children?: string }) => (
                          <p className="f-user-info__field-error number">
                            {children}
                          </p>
                        )}
                      />
                    </div>
                    <div className="f-user-info__field-wrapp-inner">
                      <label
                        htmlFor="workExpirienceEnd"
                        className="f-user-info__field-label-light"
                      >
                        Год окончания{' '}
                        <span className="l-user-info__title_span">*</span>:
                      </label>
                      <br />
                      <Field
                        component="input"
                        id="workExpirienceEnd"
                        name="workExperience.yearEnd"
                        className="f-user-info__field number"
                        value={values.workExperience.yearEnd}
                      />
                      <ErrorMessage
                        name="workExperience.yearEnd"
                        component={({ children }: { children?: string }) => (
                          <p className="f-user-info__field-error number">
                            {children}
                          </p>
                        )}
                      />
                    </div>
                  </div>
                  <label
                    htmlFor="endExpirienceForNow"
                    className="f-user-info__field-label-light"
                  >
                    <Field
                      type="checkbox"
                      id="endExpirienceForNow"
                      name="workExperience.tillNow"
                      className="f-user-info__field"
                    />
                    По настоящее время
                  </label>
                </div>

                <div className="f-user-info__row">
                  <h3 className="f-user-info__field-title">Адрес:</h3>
                  <label
                    htmlFor="cityAddress"
                    className="f-user-info__field-label-light"
                  >
                    Город <span className="l-user-info__title_span">*</span>
                  </label>
                  <br />
                  <Field
                    component="input"
                    id="cityAddress"
                    name="address.city"
                    className="f-user-info__field"
                    value={values.address.city}
                  />
                  <ErrorMessage
                    name="address.city"
                    component={({ children }: { children?: string }) => (
                      <p className="f-user-info__field-error">{children}</p>
                    )}
                  />
                  <br />
                  <label
                    htmlFor="streetAddress"
                    className="f-user-info__field-label-light"
                  >
                    Улица <span className="l-user-info__title_span">*</span>
                  </label>
                  <br />
                  <Field
                    component="input"
                    id="streetAddress"
                    name="address.street"
                    className="f-user-info__field"
                    value={values.address.street}
                  />
                  <ErrorMessage
                    name="address.street"
                    component={({ children }: { children?: string }) => (
                      <p className="f-user-info__field-error">{children}</p>
                    )}
                  />
                  <div className="f-user-info__field-wrapp">
                    <div className="f-user-info__field-wrapp-inner">
                      <label
                        htmlFor="AddressLine"
                        className="f-user-info__field-label-light"
                      >
                        Корпус, Дом, Квартира{' '}
                        <span className="l-user-info__title_span">*</span>
                      </label>
                      <br />
                      <Field
                        component="input"
                        id="AddressLine"
                        name="address.line2"
                        className="f-user-info__field"
                        value={values.address.line2}
                      />
                      <ErrorMessage
                        name="address.line2"
                        component={({ children }: { children?: string }) => (
                          <p className="f-user-info__field-error">{children}</p>
                        )}
                      />
                    </div>
                  </div>
                </div>
                <div className="f-user-info__row">
                  <h3 className="f-user-info__field-title">
                    Услуги <span className="l-user-info__title_span">*</span>:
                  </h3>
                  <label
                    htmlFor="services"
                    className="f-user-info__field-label"
                  >
                    <Field
                      type="checkbox"
                      id="services"
                      name="skills"
                      className="f-user-info__field"
                      value="english"
                    />
                    Английский язык
                  </label>
                  <br />
                  <label
                    htmlFor="services"
                    className="f-user-info__field-label"
                  >
                    <Field
                      type="checkbox"
                      id="services"
                      name="skills"
                      className="f-user-info__field"
                      value="belarus"
                    />
                    Белорусский язык
                  </label>
                  <br />
                  <label
                    htmlFor="services"
                    className="f-user-info__field-label"
                  >
                    <Field
                      type="checkbox"
                      id="services"
                      name="skills"
                      className="f-user-info__field"
                      value="russian"
                    />
                    Русский язык
                  </label>
                  <br />
                  <label
                    htmlFor="services"
                    className="f-user-info__field-label"
                  >
                    <Field
                      type="checkbox"
                      id="services"
                      name="skills"
                      className="f-user-info__field"
                      value="math"
                    />
                    Математика
                  </label>
                  <br />
                  <label
                    htmlFor="services"
                    className="f-user-info__field-label"
                  >
                    <Field
                      type="checkbox"
                      id="services"
                      name="skills"
                      className="f-user-info__field"
                      value="higher_math"
                    />
                    Высшая математика
                  </label>
                  <br />
                  <label
                    htmlFor="services"
                    className="f-user-info__field-label"
                  >
                    <Field
                      type="checkbox"
                      id="services"
                      name="skills"
                      className="f-user-info__field"
                      value="chemistry"
                    />
                    Химия
                  </label>
                  <br />
                  <label
                    htmlFor="services"
                    className="f-user-info__field-label"
                  >
                    <Field
                      type="checkbox"
                      id="services"
                      name="skills"
                      className="f-user-info__field"
                      value="biology"
                    />
                    Биология
                  </label>
                  <br />
                  <label
                    htmlFor="services"
                    className="f-user-info__field-label"
                  >
                    <Field
                      type="checkbox"
                      id="services"
                      name="skills"
                      className="f-user-info__field"
                      value="computer_science"
                    />
                    Информатика
                  </label>
                  <br />
                  <label
                    htmlFor="services"
                    className="f-user-info__field-label"
                  >
                    <Field
                      type="checkbox"
                      id="services"
                      name="skills"
                      className="f-user-info__field"
                      value="history"
                    />
                    История
                  </label>
                  <br />
                  <label
                    htmlFor="services"
                    className="f-user-info__field-label"
                  >
                    <Field
                      type="checkbox"
                      id="services"
                      name="skills"
                      className="f-user-info__field"
                      value="literature"
                    />
                    Литература
                  </label>
                  <br />
                  <label
                    htmlFor="services"
                    className="f-user-info__field-label"
                  >
                    <Field
                      type="checkbox"
                      id="services"
                      name="skills"
                      className="f-user-info__field"
                      value="social_science"
                    />
                    Обществоведение
                  </label>
                  <br />
                  <label
                    htmlFor="services"
                    className="f-user-info__field-label"
                  >
                    <Field
                      type="checkbox"
                      id="services"
                      name="skills"
                      className="f-user-info__field"
                      value="philosophy"
                    />
                    Философия
                  </label>
                  <br />
                  <label
                    htmlFor="services"
                    className="f-user-info__field-label"
                  >
                    <Field
                      type="checkbox"
                      id="services"
                      name="skills"
                      className="f-user-info__field"
                      value="philology"
                    />
                    Филология
                  </label>
                  <br />
                  <label
                    htmlFor="services"
                    className="f-user-info__field-label"
                  >
                    <Field
                      type="checkbox"
                      id="services"
                      name="skills"
                      className="f-user-info__field"
                      value="drawing"
                    />
                    Черчение
                  </label>
                  <br />
                  <label
                    htmlFor="services"
                    className="f-user-info__field-label"
                  >
                    <Field
                      type="checkbox"
                      id="services"
                      name="skills"
                      className="f-user-info__field"
                      value="economy"
                    />
                    Экономика
                  </label>
                  <br />
                  <label
                    htmlFor="services"
                    className="f-user-info__field-label"
                  >
                    <Field
                      type="checkbox"
                      id="services"
                      name="skills"
                      className="f-user-info__field"
                      value="geography"
                    />
                    География
                  </label>
                </div>
                <div className="f-user-info__row">
                  <h3 className="f-user-info__field-title">
                    Где удобно проводить занятие{' '}
                    <span className="l-user-info__title_span">*</span>:
                  </h3>
                  <label
                    htmlFor="сlassesFormat"
                    className="f-user-info__field-label"
                  >
                    <Field
                      type="checkbox"
                      id="сlassesFormat"
                      name="сlassesFormat"
                      className="f-user-info__field"
                      value="at_the_tutor"
                    />
                    У ученика
                  </label>
                  <br />
                  <label
                    htmlFor="сlassesFormat"
                    className="f-user-info__field-label"
                  >
                    <Field
                      type="checkbox"
                      id="сlassesFormat"
                      name="сlassesFormat"
                      className="f-user-info__field"
                      value="at_home"
                    />
                    У репетитора
                  </label>
                  <br />
                  <label
                    htmlFor="сlassesFormat"
                    className="f-user-info__field-label"
                  >
                    <Field
                      type="checkbox"
                      id="сlassesFormat"
                      name="сlassesFormat"
                      className="f-user-info__field"
                      value="remotely"
                    />
                    Удаленно
                  </label>
                  <br />
                  <label
                    htmlFor="сlassesFormat"
                    className="f-user-info__field-label"
                  >
                    <Field
                      type="checkbox"
                      id="сlassesFormat"
                      name="сlassesFormat"
                      className="f-user-info__field"
                      value="no_matter"
                    />
                    Не важно
                  </label>
                  <br />
                </div>

                <div className="f-user-info__btn-wrapper">
                  <button type="submit" className="f-user-info__btn">
                    Сохранить
                  </button>
                  <button
                    className="f-user-info__btn"
                    onClick={() => setIsEditFormOpen(false)}
                  >
                    Назад
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        )
      ) : (
        <>
          <ul className="l-user-info">
            <li className="l-user-info__item">
              <h3 className="l-user-info__title">
                Имя Фамилия <span className="l-user-info__title_span">*</span>
              </h3>
              <p className="l-user-info__text">
                {userInformation?.firstName} {userInformation?.lastName}
              </p>
            </li>
            <li className="l-user-info__item">
              <h3 className="l-user-info__title">
                Пол <span className="l-user-info__title_span">*</span>
              </h3>
              <p className="l-user-info__text">{gender}</p>
            </li>
            <li className="l-user-info__item">
              <h3 className="l-user-info__title">
                Дата Рождения <span className="l-user-info__title_span">*</span>
              </h3>
              <p className="l-user-info__text">{birthDate}</p>
            </li>
            <li className="l-user-info__item">
              <h3 className="l-user-info__title">
                Номер телефона{' '}
                <span className="l-user-info__title_span">*</span>
              </h3>
              <p className="l-user-info__text">
                {userInformation?.phoneNumber}
              </p>
            </li>
            {!isStudent && (
              <>
                <li className="l-user-info__item">
                  <h3 className="l-user-info__title">О себе</h3>
                  <p className="l-user-info__text">{userInformation?.about}</p>
                </li>
                <li className="l-user-info__item">
                  <h3 className="l-user-info__title">Образование</h3>
                  <div className="l-user-info__text-wrapper">
                    <p className="l-user-info__text">
                      Учебное заведение: {userInformation?.education.title}
                    </p>
                    <p className="l-user-info__text">
                      Факультет: {userInformation?.education.faculty}
                    </p>
                    <p className="l-user-info__text">
                      {userInformation?.education.yearStart} -{' '}
                      {userInformation?.education.yearEnd}
                    </p>
                  </div>
                </li>
                <li className="l-user-info__item">
                  <h3 className="l-user-info__title">Опыт работы</h3>
                  <div className="l-user-info__text-wrapper">
                    <p className="l-user-info__text">
                      Организация:{' '}
                      {userInformation?.workExperience.organization}
                    </p>
                    <p className="l-user-info__text">
                      Должность: {userInformation?.workExperience.position}
                    </p>
                    <p className="l-user-info__text">
                      {userInformation?.workExperience.yearStart} -{' '}
                      {userInformation?.workExperience.yearEnd}
                    </p>
                  </div>
                </li>
                <li className="l-user-info__item">
                  <h3 className="l-user-info__title">Адрес</h3>
                  <div className="l-user-info__text-wrapper">
                    <p className="l-user-info__text">
                      Город: {userInformation?.address.city}
                    </p>
                    <p className="l-user-info__text">
                      Улица: {userInformation?.address.street},{' '}
                      {userInformation?.address.line2}
                    </p>
                  </div>
                </li>
                <li className="l-user-info__item">
                  <h3 className="l-user-info__title">Услуги</h3>
                  <ul className="l-user-info__sublist">
                    {skills &&
                      skills.map((item: string) => {
                        return (
                          <li className="l-user-info__sublist_item" key={item}>
                            {item}{' '}
                          </li>
                        );
                      })}
                  </ul>
                </li>
                <li className="l-user-info__item">
                  <h3 className="l-user-info__title">
                    Где удобно проводить занятия?
                  </h3>
                  <ul className="l-user-info__sublist">
                    {сlassesFormat &&
                      сlassesFormat.map((item: string) => {
                        return (
                          <li className="l-user-info__sublist_item" key={item}>
                            {item}{' '}
                          </li>
                        );
                      })}
                  </ul>
                </li>
              </>
            )}
          </ul>
          <button
            className="l-user-info__btn"
            onClick={() => setIsEditFormOpen(true)}
          >
            Редактировать
          </button>
        </>
      )}
    </section>
  );
};
