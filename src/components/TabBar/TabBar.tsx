import './TabBar.scss';
import { NavLink } from 'react-router-dom';
import { IoChatbubbleOutline, IoAddCircleSharp } from 'react-icons/io5';
import { BiFileBlank } from 'react-icons/bi';
import { FaWallet } from 'react-icons/fa';
import { MdContactSupport } from 'react-icons/md';
import React from 'react';

export const TabBar = () => {
  const setActive = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'l-tabbar__item-wrap-active' : 'l-tabbar__item-wrap';
  return (
    <nav className="l-tabbar__nav">
      <ul className="l-tabbar">
        <NavLink to="/orders" className={setActive}>
          <li className="l-tabbar__item">
            <IoAddCircleSharp className="l-tabbar__item_icon" />
            <span className="l-tabbar__item_span">Заказы</span>
          </li>
        </NavLink>
        <NavLink to="/chats" className={setActive}>
          <li className="l-tabbar__item">
            <IoChatbubbleOutline className="l-tabbar__item_icon" />
            <span className="l-tabbar__item_span">Чаты</span>
          </li>
        </NavLink>
        <NavLink to="/wallet" className={setActive}>
          <li className="l-tabbar__item">
            <FaWallet className="l-tabbar__item_icon" />
            <span key="1" className="l-tabbar__item_span">
              Кошелек
            </span>
          </li>
        </NavLink>
        <NavLink to="/userInformation" className={setActive}>
          <li className="l-tabbar__item">
            <BiFileBlank className="l-tabbar__item_icon" />
            <span className="l-tabbar__item_span">Анкета</span>
          </li>
        </NavLink>
        <NavLink to="/support" className={setActive}>
          <li className="l-tabbar__item">
            <MdContactSupport className="l-tabbar__item_icon" />
            <span className="l-tabbar__item_span">Поддержка</span>
          </li>
        </NavLink>
      </ul>
    </nav>
  );
};
