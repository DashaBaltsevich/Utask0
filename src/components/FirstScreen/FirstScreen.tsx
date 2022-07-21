import React from 'react';
import { NavLink } from 'react-router-dom';
import './FirstScreen.scss';

interface props {
  setIsStudent: (isStudent: boolean) => void;
}

export const FirstScreen = ({ setIsStudent }: props): JSX.Element => {
  return (
    <div className="b-first-screen">
      <NavLink to="/login" className="b-first-screen__link">
        <button
          className="b-first-screen__btn"
          onClick={() => {
            setIsStudent(false);
          }}
        >
          Вход для специалистов
        </button>
      </NavLink>
      <NavLink to="/login" className="b-first-screen__link">
        <button
          className="b-first-screen__btn"
          onClick={() => {
            setIsStudent(true);
          }}
        >
          Найти специалиста
        </button>
      </NavLink>
    </div>
  );
};
