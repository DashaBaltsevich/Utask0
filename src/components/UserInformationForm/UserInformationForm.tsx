import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
// import { NavLink } from 'react-router-dom';
import './UserInformationForm.scss';
import React from 'react';

// const validationSchema = yup.object({
//     email: yup
//       .string()
//       .email('Invalid email address')
//       .required('Email is required')
//       .max(30, 'Are you really sure that your email is that big?'),
//     password: yup
//       .string()
//       .required('Password is required')
//       .min(6, 'Must be more than 6 characters')
//       .max(30, 'Are you sure that your password is that big?'),
//     passwordConfirmation: yup
//       .string()
//       .oneOf([yup.ref('password'), null], 'Passwords must match')
//   });
interface userDataArrayType {
  textAbout: string;
  textEducation: string;
  textExpirience: string;
  textAddress: string;
}

export const UserInformationForm = () => {
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const handleFormSubmit = (values: userDataArrayType) => {
    setIsEditFormOpen(false);
    const userDataArray = {
      textAbout: values.textAbout,
      textEducation: values.textEducation,
      textExpirience: values.textExpirience,
      textAddress: values.textAddress,
    };
    //создать этот массив в локалсторадже по дефолту ( т.к. если очистить - ошибка )
    localStorage.setItem('userDataArray', JSON.stringify(userDataArray));
  };

  return (
    <section className="s-user-info">
      <h2 className="s-user-info__title">Анкета</h2>
      {isEditFormOpen ? (
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            gender: '',
            birthday: '',
            phone: '',
            textAbout: '',
            textEducation: '',
            startEducation: '',
            endEducation: '',
            endEducationForNow: false,
            textExpirience: '',
            startExpirience: '',
            endExpirience: '',
            endExpirienceForNow: false,
            cityAddress: '',
            areaAddress: '',
            streetAddress: '',
            korpusAddress: '',
            houseAddress: '',
            flatAddress: '',
            services: '',
          }}
          validateOnBlur={false}
          // validationSchema={validationSchema}
          onSubmit={(values: any) => handleFormSubmit(values)}
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
                  // component={({ children }) => (
                  //   <p className="f-user-info__field-error">{children}</p>
                  // )}
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
                  // component={({ children }) => (
                  //   <p className="f-user-info__field-error">{children}</p>
                  // )}
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
                  as="select"
                  id="gender"
                  name="gender"
                  className="f-user-info__field"
                  value={values.gender}
                >
                  <option value="women">ж</option>
                  <option value="men">м</option>
                  <option value="other">др.</option>
                </Field>
                <ErrorMessage
                  name="gender"
                  // component={({ children }) => (
                  //   <p className="f-user-info__field-error">{children}</p>
                  // )}
                />
              </div>
              <div className="f-user-info__row">
                <label
                  htmlFor="birthday"
                  className="f-user-info__field-label-bold"
                >
                  Дата Рождения{' '}
                  <span className="l-user-info__title_span">*</span>:
                </label>
                <br />
                <Field
                  component="input"
                  id="birthday"
                  name="birthday"
                  className="f-user-info__field"
                  value={values.birthday}
                />
                <ErrorMessage
                  name="birthday"
                  // component={({ children }) => (
                  //   <p className="f-user-info__field-error">{children}</p>
                  // )}
                />
              </div>
              <div className="f-user-info__row">
                <label
                  htmlFor="phone"
                  className="f-user-info__field-label-bold"
                >
                  Номер телефона{' '}
                  <span className="l-user-info__title_span">*</span>:
                </label>
                <br />
                <Field
                  component="input"
                  id="phone"
                  name="phone"
                  className="f-user-info__field"
                  value={values.phone}
                />
                {/* <ErrorMessage
                  name="phone"
                  component={({ children }) => (
                    <p className="f-user-info__field-error">{children}</p>
                  )}
                /> */}
              </div>
              <div className="f-user-info__row">
                <label
                  htmlFor="textAbout"
                  className="f-user-info__field-label-bold"
                >
                  О себе:
                </label>
                <br />
                <Field
                  component="textarea"
                  id="textAbout"
                  name="textAbout"
                  className="f-user-info__field"
                  value={values.textAbout}
                />
                {/* <ErrorMessage
                  name="textAbout"
                  component={({ children }) => (
                    <p className="f-user-info__field-error">{children}</p>
                  )}
                /> */}
              </div>

              <div className="f-user-info__row">
                <h3 className="f-user-info__field-title">Образование:</h3>
                <label
                  htmlFor="textEducation"
                  className="f-user-info__field-label-light"
                >
                  Учебное заведение, факультет и специализация
                </label>
                <Field
                  component="textarea"
                  id="textEducation"
                  name="textEducation"
                  className="f-user-info__field"
                  value={values.textEducation}
                />
                {/* <ErrorMessage
                  name="textEducation"
                  component={({ children }) => (
                    <p className="f-user-info__field-error">{children}</p>
                  )}
                /> */}
                <div className="f-user-info__field-wrapp">
                  <div className="f-user-info__field-wrapp-inner">
                    <label
                      htmlFor="startEducation"
                      className="f-user-info__field-label-light"
                    >
                      Год начала:
                    </label>
                    <br />
                    <Field
                      component="input"
                      id="startEducation"
                      name="startEducation"
                      className="f-user-info__field number"
                      value={values.startEducation}
                    />
                    {/* <ErrorMessage
                      name="startEducation"
                      component={({ children }) => (
                        <p className="f-user-info__field-error">{children}</p>
                      )}
                    /> */}
                  </div>
                  <div className="f-user-info__field-wrapp-inner">
                    <label
                      htmlFor="endEducation"
                      className="f-user-info__field-label-light"
                    >
                      Год окончания:
                    </label>
                    <br />
                    <Field
                      component="input"
                      id="endEducation"
                      name="endEducation"
                      className="f-user-info__field number"
                      value={values.endEducation}
                    />
                    {/* <ErrorMessage
                      name="endEducation"
                      component={({ children }) => (
                        <p className="f-user-info__field-error">{children}</p>
                      )}
                    /> */}
                  </div>
                </div>
                <label
                  htmlFor="endEducationForNow"
                  className="f-user-info__field-label-light"
                >
                  <Field
                    type="checkbox"
                    id="endEducationForNow"
                    name="endEducationForNow"
                    className="f-user-info__field"
                    value={values.endEducationForNow}
                  />
                  По настоящее время
                </label>
              </div>

              <div className="f-user-info__row">
                <h3 className="f-user-info__field-title">Опыт работы</h3>
                <label
                  htmlFor="textExpirience"
                  className="f-user-info__field-label-light"
                >
                  Организация и должность
                </label>
                <br />
                <Field
                  component="textarea"
                  id="textExpirience"
                  name="textExpirience"
                  className="f-user-info__field"
                  value={values.textExpirience}
                />
                {/* <ErrorMessage
                  name="textExpirience"
                  component={({ children }) => (
                    <p className="f-user-info__field-error">{children}</p>
                  )}
                /> */}
                <div className="f-user-info__field-wrapp">
                  <div className="f-user-info__field-wrapp-inner">
                    <label
                      htmlFor="startExpirience"
                      className="f-user-info__field-label-light"
                    >
                      Год начала:
                    </label>
                    <br />
                    <Field
                      component="input"
                      id="startExpirience"
                      name="startExpirience"
                      className="f-user-info__field number"
                      value={values.startExpirience}
                    />
                    {/* <ErrorMessage
                      name="startExpirience"
                      component={({ children }) => (
                        <p className="f-user-info__field-error">{children}</p>
                      )}
                    /> */}
                  </div>
                  <div className="f-user-info__field-wrapp-inner">
                    <label
                      htmlFor="endExpirience"
                      className="f-user-info__field-label-light"
                    >
                      Год окончания:
                    </label>
                    <br />
                    <Field
                      component="input"
                      id="endExpirience"
                      name="endExpirience"
                      className="f-user-info__field number"
                      value={values.endExpirience}
                    />
                    {/* <ErrorMessage
                      name="endExpirience"
                      component={({ children }) => (
                        <p className="f-user-info__field-error">{children}</p>
                      )}
                    /> */}
                  </div>
                </div>
                <label
                  htmlFor="endExpirienceForNow"
                  className="f-user-info__field-label-light"
                >
                  <Field
                    type="checkbox"
                    id="endExpirienceForNow"
                    name="endExpirienceForNow"
                    className="f-user-info__field"
                    value="true"
                  />
                  По настоящее время
                </label>
              </div>

              <div className="f-user-info__row">
                <h3 className="f-user-info__field-title">Адрес</h3>
                <label
                  htmlFor="cityAddress"
                  className="f-user-info__field-label-light"
                >
                  Город:
                </label>
                <br />
                <Field
                  component="input"
                  id="cityAddress"
                  name="cityAddress"
                  className="f-user-info__field"
                  value={values.cityAddress}
                />
                {/* <ErrorMessage
                  name="cityAddress"
                  component={({ children }) => (
                    <p className="f-user-info__field-error">{children}</p>
                  )}
                /> */}
                <br />
                <label
                  htmlFor="areaAddress"
                  className="f-user-info__field-label-light"
                >
                  Район:
                </label>
                <br />
                <Field
                  component="input"
                  id="areaAddress"
                  name="areaAddress"
                  className="f-user-info__field"
                  value={values.areaAddress}
                />
                {/* <ErrorMessage
                  name="areaAddress"
                  component={({ children }) => (
                    <p className="f-user-info__field-error">{children}</p>
                  )}
                /> */}
                <br />
                <label
                  htmlFor="streetAddress"
                  className="f-user-info__field-label-light"
                >
                  Улица:
                </label>
                <br />
                <Field
                  component="input"
                  id="streetAddress"
                  name="streetAddress"
                  className="f-user-info__field"
                  value={values.streetAddress}
                />
                {/* <ErrorMessage
                  name="streetAddress"
                  component={({ children }) => (
                    <p className="f-user-info__field-error">{children}</p>
                  )}
                /> */}
                <div className="f-user-info__field-wrapp">
                  <div className="f-user-info__field-wrapp-inner">
                    <label
                      htmlFor="korpusAddress"
                      className="f-user-info__field-label-light"
                    >
                      Корпус:
                    </label>
                    <br />
                    <Field
                      component="input"
                      id="korpusAddress"
                      name="korpusAddress"
                      className="f-user-info__field number"
                      value={values.korpusAddress}
                    />
                    {/* <ErrorMessage
                      name="korpusAddress"
                      component={({ children }) => (
                        <p className="f-user-info__field-error">{children}</p>
                      )}
                    /> */}
                  </div>
                  <div className="f-user-info__field-wrapp-inner">
                    <label
                      htmlFor="houseAddress"
                      className="f-user-info__field-label-light"
                    >
                      Дом:
                    </label>
                    <br />
                    <Field
                      component="input"
                      id="houseAddress"
                      name="houseAddress"
                      className="f-user-info__field number"
                      value={values.houseAddress}
                    />
                    {/* <ErrorMessage
                      name="houseAddress"
                      component={({ children }) => (
                        <p className="f-user-info__field-error">{children}</p>
                      )}
                    /> */}
                  </div>
                  <div className="f-user-info__field-wrapp-inner">
                    <label
                      htmlFor="flatAddress"
                      className="f-user-info__field-label-light"
                    >
                      Квартира:
                    </label>
                    <br />
                    <Field
                      component="input"
                      id="flatAddress"
                      name="flatAddress"
                      className="f-user-info__field number"
                      value={values.flatAddress}
                    />
                    {/* <ErrorMessage
                      name="flatAddress"
                      component={({ children }) => (
                        <p className="f-user-info__field-error">{children}</p>
                      )}
                    /> */}
                  </div>
                </div>
              </div>
              <div className="f-user-info__row">
                <h3 className="f-user-info__field-title">Услуги</h3>
                <label htmlFor="services" className="f-user-info__field-label">
                  <Field
                    type="checkbox"
                    id="services"
                    name="services"
                    className="f-user-info__field"
                    value={values.services}
                  />
                  Английский язык
                </label>
                <br />
                <label htmlFor="services" className="f-user-info__field-label">
                  <Field
                    type="checkbox"
                    id="services"
                    name="services"
                    className="f-user-info__field"
                    value={values.services}
                  />
                  Белорусский язык
                </label>
                <br />
                <label htmlFor="services" className="f-user-info__field-label">
                  <Field
                    type="checkbox"
                    id="services"
                    name="services"
                    className="f-user-info__field"
                    value={values.services}
                  />
                  Русский язык
                </label>
                <br />
                <label htmlFor="services" className="f-user-info__field-label">
                  <Field
                    type="checkbox"
                    id="services"
                    name="services"
                    className="f-user-info__field"
                    value={values.services}
                  />
                  Математика
                </label>
                <br />
                <label htmlFor="services" className="f-user-info__field-label">
                  <Field
                    type="checkbox"
                    id="services"
                    name="services"
                    className="f-user-info__field"
                    value={values.services}
                  />
                  Высшая математика
                </label>
                <br />
                <label htmlFor="services" className="f-user-info__field-label">
                  <Field
                    type="checkbox"
                    id="services"
                    name="services"
                    className="f-user-info__field"
                    value={values.services}
                  />
                  Химия
                </label>
                <br />
                <label htmlFor="services" className="f-user-info__field-label">
                  <Field
                    type="checkbox"
                    id="services"
                    name="services"
                    className="f-user-info__field"
                    value={values.services}
                  />
                  Биология
                </label>
                <br />
                <label htmlFor="services" className="f-user-info__field-label">
                  <Field
                    type="checkbox"
                    id="services"
                    name="services"
                    className="f-user-info__field"
                    value={values.services}
                  />
                  Информатика
                </label>
                <br />
                <label htmlFor="services" className="f-user-info__field-label">
                  <Field
                    type="checkbox"
                    id="services"
                    name="services"
                    className="f-user-info__field"
                    value={values.services}
                  />
                  История
                </label>
                <br />
                <label htmlFor="services" className="f-user-info__field-label">
                  <Field
                    type="checkbox"
                    id="services"
                    name="services"
                    className="f-user-info__field"
                    value={values.services}
                  />
                  Литература
                </label>
              </div>

              <button type="submit" className="f-user-info__btn-submit">
                Сохранить
              </button>
            </Form>
          )}
        </Formik>
      ) : (
        <>
          <ul className="l-user-info">
            <li className="l-user-info__item">
              <h3 className="l-user-info__title">
                Имя Фамилия <span className="l-user-info__title_span">*</span>
              </h3>
              <p className="l-user-info__text">Бальцевич Дарья</p>
            </li>
            <li className="l-user-info__item">
              <h3 className="l-user-info__title">
                Пол <span className="l-user-info__title_span">*</span>
              </h3>
              <p className="l-user-info__text">женский</p>
            </li>
            <li className="l-user-info__item">
              <h3 className="l-user-info__title">
                Дата Рождения <span className="l-user-info__title_span">*</span>
              </h3>
              <p className="l-user-info__text">26.02.1999</p>
            </li>
            <li className="l-user-info__item">
              <h3 className="l-user-info__title">
                Номер телефона{' '}
                <span className="l-user-info__title_span">*</span>
              </h3>
              <p className="l-user-info__text">+375336212284</p>
            </li>
            <li className="l-user-info__item">
              <h3 className="l-user-info__title">О себе</h3>
              <p className="l-user-info__text">
                Загрузите фото документов об образовании и опыте работы. Клиенты
                их не увидят. После проверки мы добавим отметку «Данные
                проверены» на вашу персональную страницу. К проверенным
                специалистам доверие клиентов выше.
              </p>
            </li>
            <li className="l-user-info__item">
              <h3 className="l-user-info__title">Образование</h3>
              <p className="l-user-info__text">
                БГУ, химический факультет, специальность – фундаментальная
                химия, кафедра органической химии (с 2016 г.).
              </p>
            </li>
            <li className="l-user-info__item">
              <h3 className="l-user-info__title">Опыт работы</h3>
              <p className="l-user-info__text">
                ООО «БелХард Девелопмент», должность – химик-инженер, датабейзер
                — 2 года.
              </p>
            </li>
            <li className="l-user-info__item">
              <h3 className="l-user-info__title">Адрес</h3>
              <p className="l-user-info__text">Фрунзенский район</p>
            </li>
            <li className="l-user-info__item">
              <h3 className="l-user-info__title">Услуги</h3>
              <p className="l-user-info__text">Математика, химия</p>
            </li>
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
