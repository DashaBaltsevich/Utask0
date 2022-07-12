import { Formik, Form, Field, ErrorMessage } from 'formik';
import { NavLink, useNavigate } from 'react-router-dom';
import './LoginForm.scss';
import * as yup from 'yup';
import React from 'react';
import { useDispatch } from 'react-redux';
import { setUserInformation, setIsAuthorised } from '../../store/actions';
import { login } from '../../api/facades';
import { useTypedSelector } from '../../hooks/useTypedSelector';

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email is required')
    .max(40, 'Are you really sure that your email is that big?'),
  password: yup
    .string()
    .required('Password is required')
    .min(4, 'Must be more than 4 characters'),
});

export const LoginForm: React.FC = () => {
  const { permission } = useTypedSelector(
    (state) => state.userInformationReducer,
  );
  const isStudent: boolean = permission === 2 ? true : false;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFormSubmit = async (values: object) => {
    try {
      const data = await login(values);
      dispatch(setUserInformation(data?.content.user));
      dispatch(setIsAuthorised(true));
      navigate('../main', { replace: true });
      localStorage.setItem('accessToken', data?.content.token.accessToken);
      localStorage.setItem('refreshToken', data?.content.token.refreshToken);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="b-login">
      <Formik
        initialValues={{
          email: '',
          password: '',
          isStudent: isStudent,
        }}
        validateOnBlur={false}
        validationSchema={validationSchema}
        onSubmit={(values) => handleFormSubmit(values)}
      >
        {({ values }) => (
          <Form className="f-login">
            <h1 className="f-login__title">Utask</h1>
            <div className="f-login__row">
              <label htmlFor="email" className="f-login__field-label">
                Почта:
              </label>
              <br />
              <Field
                type="email"
                id="email"
                name="email"
                className="f-login__field"
                value={values.email}
                placeholder="Почта"
              />
              <ErrorMessage
                name="email"
                component={() => <p className="f-login__field-error"></p>}
              />
            </div>

            <div className="f-login__row">
              <label htmlFor="password" className="f-login__field-label">
                Пароль:
              </label>
              <br />
              <Field
                type="password"
                id="password"
                name="password"
                className="f-login__field"
                placeholder="Пароль"
              />
              <ErrorMessage
                name="password"
                component={() => <p className="f-login__field-error"></p>}
              />
            </div>
            <button type="submit" className="f-login__btn-submit">
              Войти
            </button>

            <div className="f-login__row-links">
              <NavLink
                to="/registration"
                className="f-login__link-registration"
              >
                Зарегестрироваться
              </NavLink>
              <NavLink to="/password" className="f-login__link-forgot-password">
                Забыли пароль?
              </NavLink>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
