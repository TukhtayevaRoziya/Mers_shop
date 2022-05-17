import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import classes from './AccountSidebar.module.css';

const AccountSidebar = () => {
    const { url } = useRouteMatch();
    return (
        <div className={classes.account__sidebar}>
            <NavLink to={`${url}/myaccount`} activeClassName={classes.sidebar__link} className={classes.sidebar__linkinactive}>
                <p> Мой аккаунт</p>
                <div className={classes.line}></div>
            </NavLink>
            <h2 className={classes.sidebar__subtitle}>Mои заказы</h2>
            <ul className={classes.sidebar__links}>
                <li><NavLink exact activeClassName={classes.active__sidebarlink} className={classes.link} to={`${url}/all`}>ВСЕ </NavLink></li>
                <li><NavLink exact activeClassName={classes.active__sidebarlink} className={classes.link} to={`${url}/notpaid`}>неоплаченный </NavLink></li>
                <li><NavLink exact activeClassName={classes.active__sidebarlink} className={classes.link} to={`${url}/processing`}>обработка </NavLink></li>
                <li><NavLink exact activeClassName={classes.active__sidebarlink} className={classes.link} to={`${url}/sending`}>Высылаем </NavLink></li>
                <li><NavLink exact activeClassName={classes.active__sidebarlink} className={classes.link} to={`${url}/closed`}>Закрыто </NavLink></li>
            </ul>
            <h2 className={classes.sidebar__subtitle}>Информация об учетной записи</h2>
            <ul className={classes.sidebar__links}>
                <li><NavLink exact activeClassName={classes.active__sidebarlink} className={classes.link} to={`${url}/personalinfo`}>Личная информация </NavLink></li>
                <li><NavLink exact activeClassName={classes.active__sidebarlink} className={classes.link} to={`${url}/address`}>Адресная книга</NavLink></li>
                <li><NavLink exact activeClassName={classes.active__sidebarlink} className={classes.link} to={`${url}/favourites`}>Мое избранное </NavLink></li>
                <li><NavLink exact activeClassName={classes.active__sidebarlink} className={classes.link} to={`${url}/resetpassword`}>Изменить пароль </NavLink></li>
            </ul>
        </div>
    )
}

export default AccountSidebar
