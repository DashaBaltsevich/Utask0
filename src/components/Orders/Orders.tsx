import React, { useState } from 'react';
import './Orders.scss';
import { Field, Formik, Form, ErrorMessage } from 'formik';
import { useTypedSelector } from '../../hooks/useTypedSelector';

export const Orders = () => {
  const orders = useTypedSelector(
    (state) => state.userInformationReducer.orders,
  );

  const [isCreateFormOpen, setIsCreateFormOpen] = useState(false);
  const handleFormSubmit = ({ values }: any) => {
    console.log(values);
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
                <label htmlFor="title" className="f-order__field-label">
                  Название заказа{' '}
                  <span className="f-order__field-label-span">*</span>:
                </label>
                <br />
                <Field
                  component="input"
                  id="title"
                  name="title"
                  className="f-order__field"
                  value={values.title}
                />
                <ErrorMessage
                  name="firstName"
                  component={({ children }: { children?: string }) => (
                    <p className="f-order__field-error">{children}</p>
                  )}
                />
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
                      onClick={() => console.log(1)}
                    >
                      <h3 className="l-orders__item_title">{item.title}</h3>
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
