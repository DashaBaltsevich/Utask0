import './AppBar.scss';
import { NavLink } from 'react-router-dom';
import { IoIosNotificationsOutline } from 'react-icons/io';
import React from 'react';

export const AppBar = () => {
  return (
    <header className="header">
      <NavLink to="/orders">
        <h1 className="header__logo">Utask</h1>
      </NavLink>
      <IoIosNotificationsOutline className="header__icon" />
    </header>
  );
};
