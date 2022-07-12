import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { FirstScreen, LoginForm, PrivateRoute } from './components';
import { useTypedSelector } from './hooks/useTypedSelector';
import './App.css';

function App() {
  const isAuthorised: boolean = useTypedSelector(
    (state) => state.userInformationReducer.isAuthorised,
  );
  return (
    <Routes>
      <Route path="/" element={<FirstScreen />} />
      <Route path="login" element={<LoginForm />} />
      <Route
        path="login"
        element={
          <PrivateRoute isAllowed={isAuthorised} redirectPath="main">
            <FirstScreen />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
