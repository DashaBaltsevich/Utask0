import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { FirstScreen, LoginForm } from './components';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<FirstScreen />} />
      <Route path="login" element={<LoginForm />} />
    </Routes>
  );
}

export default App;
