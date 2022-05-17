import React from 'react';
import Button from '../../../components/UI/button/Button';
import classes from './AccountBook.module.css';
import { FiCheckSquare, FiEdit3, FiTrash2 } from 'react-icons/fi';

const AccountBook = () => {
    return (
        <div className={classes.account__book}>
            <div className={classes.book__header}>
                <h1>Адресная книга</h1>
            </div>
            <div className={classes.book__container}>
                <div className={classes.user__fullname}><h3>Ali Safarov</h3> <p>997486422</p></div>
                <p>Uvaysiy, Yunusobod 19, Tashkent, Toshkent City, Uzbekistan, 100014</p>
                <div className={classes.user__options}>
                    <button> <FiCheckSquare/> По умолчанию </button>
                    <button> <FiEdit3/> Редактировать </button>
                    <button> <FiTrash2/> Удалить </button>
                </div>
            </div>
            <Button maxwidth="141px" title="Add location"/>
        </div>
    )
}

export default AccountBook
