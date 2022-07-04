import React from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUserPermission } from '../../store/actions';
import './FirstScreen.scss';

export const FirstScreen = () => {
  const dispatch = useDispatch();
  return (
    <div className="b-first-screen">
      <NavLink to="/login" className="b-first-screen__link">
        <button
          className="b-first-screen__btn"
          onClick={() => dispatch(setUserPermission('SPECIALIST'))}
        >
          Вход для специалистов
        </button>
      </NavLink>
      <NavLink to="/login" className="b-first-screen__link">
        <button
          className="b-first-screen__btn"
          onClick={() => dispatch(setUserPermission('STUDENT'))}
        >
          Найти специалиста
        </button>
      </NavLink>
    </div>
  );
};
