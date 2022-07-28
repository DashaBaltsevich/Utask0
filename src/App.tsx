import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  FirstScreen,
  LoginForm,
  PrivateRoute,
  Template,
  Orders,
  UserInformationForm,
} from './components';
import { useTypedSelector } from './hooks/useTypedSelector';
import { getUserInformation, getOrders } from './api/facades';
import {
  setUserInformation,
  setIsAuthorised,
  setOrders,
} from './store/actions';
import './App.css';

function App() {
  const isAuthorised: boolean = useTypedSelector(
    (state) => state.userInformationReducer.isAuthorised,
  );
  const orders: object = useTypedSelector(
    (state) => state.userInformationReducer.orders,
  );
  const dispatch = useDispatch();
  const [isStudent, setIsStudent] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('accessToken')) {
      return;
    }
    (async () => {
      try {
        const data = await getUserInformation();
        dispatch(setUserInformation(data?.content));
        dispatch(setIsAuthorised(true));
        console.log(data);
      } catch (err) {
        console.dir(err);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const data = await getOrders();
        dispatch(setOrders(data?.content));
        console.log(data);
      } catch (err) {
        console.dir(err);
      }
    })();
  }, [orders]);

  return (
    <Routes>
      <Route path="/" element={<FirstScreen setIsStudent={setIsStudent} />} />
      <Route path="login" element={<LoginForm isStudent={isStudent} />} />
      <Route
        path="/userInformation"
        element={
          <PrivateRoute isAllowed={isAuthorised}>
            <Template>
              <UserInformationForm isStudent={isStudent} />
            </Template>
          </PrivateRoute>
        }
      />
      <Route
        path="/orders"
        element={
          <PrivateRoute isAllowed={isAuthorised}>
            <Template>
              <Orders />
            </Template>
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
