import React from "react";
import { NavLink } from "react-router-dom";
import "./FirstScreen.scss";

export const FirstScreen: React.FC = () => {
  return (
    <nav className="first-screen__nav">
      <ul className="l-first-screen">
        <li className="l-first-screen__item">
          <NavLink to="/login">Найти специалиста</NavLink>
        </li>
        <li className="l-first-screen__item">
          <NavLink to="/login">Вход для специалистов</NavLink>
        </li>
      </ul>
    </nav>
  );
};
