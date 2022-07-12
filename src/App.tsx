import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  FirstScreen,
  LoginForm,
  PrivateRoute,
  Template,
  Orders,
  UserInformationForm,
} from './components';
import { useTypedSelector } from './hooks/useTypedSelector';
import './App.css';

function App() {
  const isAuthorised: boolean = useTypedSelector(
    (state) => state.userInformationReducer.isAuthorised,
  );
  useEffect(() => {
    console.log(isAuthorised);
  });
  return (
    <Routes>
      <Route path="/" element={<FirstScreen />} />
      <Route path="login" element={<LoginForm />} />
      <Route
        path="/userInformation"
        element={
          <PrivateRoute isAllowed={isAuthorised}>
            <Template>
              <UserInformationForm />
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
