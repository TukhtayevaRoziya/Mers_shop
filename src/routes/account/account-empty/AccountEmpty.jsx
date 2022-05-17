import React from 'react';
import { Link } from 'react-router-dom';
import classes from './AccountEmpty.module.css';
import nothingfound from '../../../assets/account/nothingfound.svg'

const AccountEmpty = () => {
    return (
        <div className={classes.account__empty}>
            <img src={nothingfound} alt="" />
            <h1>У вас еще нет любых заказов</h1>
            <Link to="/karzinka" className={classes.empty__buy}>КУПИТЬ СЕЙЧАС</Link>
        </div>
    )
}

export default AccountEmpty
