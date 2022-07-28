import React, { useState } from 'react';
import './Orders.scss';
import { Field, Formik, Form, ErrorMessage } from 'formik';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { createOrder, deleteOrder } from '../../api/facades';

export const Orders = () => {
  const orders = useTypedSelector(
    (state) => state.userInformationReducer.orders,
  );
  const [isCreateFormOpen, setIsCreateFormOpen] = useState(false);

  const handleFormSubmit = async (values: any) => {
    console.log(values);
    try {
      const data = await createOrder(values);
      setIsCreateFormOpen(false);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleOrder = (e: any, id: any) => {
    console.log(id);
    if (e.target.className === 'l-orders__btn-delete') {
      (async () => {
        try {
          const data = await deleteOrder(id);
          console.log(data);
        } catch (err) {
          console.dir(err);
        }
      })();
    }
  };

  return (
    <section className="s-orders">
      {isCreateFormOpen ? (
        <Formik
          initialValues={{
            title: '',
            description: '',
            сlassesFormat: '',
            objective: '',
            level: '',
          }}
          validateOnBlur={false}
          // validationSchema={ValidationStudentInformationSchema}
          onSubmit={(values) => handleFormSubmit(values)}
        >
          {({ values }) => (
            <Form className="f-order">
              <h3 className="f-order__title">Создать заказ</h3>
              <div className="f-order__row">
                <label htmlFor="title" className="f-order__field-label-bold">
                  Предмет <span className="l-order__title_span">*</span>:
                </label>
                <br />
                <Field
                  component="select"
                  id="title"
                  name="title"
                  className="f-order__field"
                  value={values.title}
                >
                  <option value="" label="Выберите"></option>
                  <option value="english">Английский язык</option>
                  <option value="belarus">Белорусский язык</option>
                  <option value="russian">Русский язык</option>
                  <option value="math">Математика</option>
                  <option value="higher_math">Высшая математика</option>
                  <option value="chemistry">Химия</option>
                  <option value="biology">Биология</option>
                  <option value="computer_science">Информатика</option>
                  <option value="history">История</option>
                  <option value="literature">Литература</option>
                  <option value="social_science">Обществоведение</option>
                  <option value="philosophy">Философия</option>
                  <option value="philology">Филология</option>
                  <option value="drawing">Черчение</option>
                  <option value="economy">Экономика</option>
                  <option value="geography">География</option>
                </Field>
                <ErrorMessage
                  name="title"
                  component={({ children }: { children?: string }) => (
                    <p className="f-order__field-error">{children}</p>
                  )}
                />
              </div>
              <div className="f-order__row">
                <label
                  htmlFor="objective"
                  className="f-order__field-label-bold"
                >
                  Цель <span className="l-order__title_span">*</span>:
                </label>
                <br />
                <Field
                  component="select"
                  id="objective"
                  name="objective"
                  className="f-order__field"
                  value={values.objective}
                >
                  <option value="" label="Выберите"></option>
                  <option value="ct_or_exam">Подготовка к ЦТ или ЕГЭ</option>
                  <option value="olymp_preparation">
                    Подготовка к олимпиаде
                  </option>
                  <option value="exam_preparation">
                    Подготовка к экзамену
                  </option>
                  <option value="admission_school">
                    Поступление в школу/лицей/гимназию
                  </option>
                  <option value="improve_performance">
                    Повышение успеваемости
                  </option>
                  <option value="for_myself">Для себя</option>
                  <option value="do_the_task">Выполнить задание</option>
                </Field>
                <ErrorMessage
                  name="objective"
                  component={({ children }: { children?: string }) => (
                    <p className="f-order__field-error">{children}</p>
                  )}
                />
              </div>
              <div className="f-order__row">
                <label htmlFor="description" className="f-order__field-label">
                  Описание <span className="f-order__field-label-span">*</span>:
                </label>
                <br />
                <Field
                  component="textarea"
                  id="description"
                  name="description"
                  className="f-order__field"
                  value={values.description}
                />
                <ErrorMessage
                  name="description"
                  component={({ children }: { children?: string }) => (
                    <p className="f-order__field-error">{children}</p>
                  )}
                />
              </div>
              <div className="f-order__row">
                <label
                  htmlFor="сlassesFormat"
                  className="f-order__field-label-bold"
                >
                  Где удобно заниматься{' '}
                  <span className="l-order__title_span">*</span>:
                </label>
                <br />
                <Field
                  component="select"
                  id="сlassesFormat"
                  name="сlassesFormat"
                  className="f-order__field"
                  value={values.сlassesFormat}
                >
                  <option value="" label="Выберите"></option>
                  <option value="at_home">У ученика</option>
                  <option value="at_the_tutor">У репетитора</option>
                  <option value="remotely">Удаленно</option>
                  <option value="no_matter">Не важно</option>
                </Field>
                <ErrorMessage
                  name="level"
                  component={({ children }: { children?: string }) => (
                    <p className="f-order__field-error">{children}</p>
                  )}
                />
              </div>
              <div className="f-order__row">
                <label htmlFor="level" className="f-order__field-label-bold">
                  Кто будет заниматься{' '}
                  <span className="l-order__title_span">*</span>:
                </label>
                <br />
                <Field
                  component="select"
                  id="level"
                  name="level"
                  className="f-order__field"
                  value={values.level}
                >
                  <option value="" label="Выберите"></option>
                  <option value="preschooler">Дошкольник</option>
                  <option value="schoolboy">Школьник</option>
                  <option value="student">Студент</option>
                  <option value="adult">Взрослый</option>
                </Field>
                <ErrorMessage
                  name="level"
                  component={({ children }: { children?: string }) => (
                    <p className="f-order__field-error">{children}</p>
                  )}
                />
              </div>

              <div className="f-order__btn-wrapper">
                <button type="submit" className="f-order__btn">
                  Сохранить
                </button>
                <button
                  className="f-order__btn"
                  onClick={() => setIsCreateFormOpen(false)}
                >
                  Назад
                </button>
              </div>
            </Form>
          )}
        </Formik>
      ) : (
        <>
          <h2 className="s-orders__title">Заказы</h2>
          {orders && (
            <ul className="l-orders">
              {orders &&
                orders.map((item: any) => {
                  return (
                    <li
                      className="l-orders__item"
                      key={item.date_created}
                      onClick={(e) => handleOrder(e, item._id)}
                    >
                      <div className="l-orders__item_title-wrapper">
                        <h3 className="l-orders__item_title">{item.title}</h3>
                        <span className="l-orders__btn-delete">X</span>
                      </div>

                      <span className="l-orders__item_text">
                        {item.objective === 'ct_or_exam' ? 'Экзамен.' : ''}
                      </span>
                      <p className="l-orders__item_text">{item.description}</p>
                      <span className="l-orders__item_text">
                        {new Date(item.date_created).getDate()}.
                        {new Date(item.date_created).getMonth() < 10
                          ? '0' + (new Date(item.date_created).getMonth() + 1)
                          : new Date(item.date_created).getMonth()}
                        .{new Date(item.date_created).getFullYear()}
                      </span>
                    </li>
                  );
                })}
            </ul>
          )}
          <button
            className="s-orders__btn-create"
            onClick={() => setIsCreateFormOpen(true)}
          >
            Создать заказ
          </button>
        </>
      )}
    </section>
  );
};
