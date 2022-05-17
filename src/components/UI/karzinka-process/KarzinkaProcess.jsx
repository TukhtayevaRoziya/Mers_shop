import React from 'react';
import { Link } from 'react-router-dom';
import classes from './KarzinkaProcess.module.css';
import { FiShoppingBag, FiFileText, FiCreditCard, FiArchive } from 'react-icons/fi';

const KarzinkaProcess = ({procCss, activeColor, lineColor, active}) => {
    return (
        <div className={classes.karzinka__process} style={procCss}>
            <ul className={classes.karzinka__collection}>
                <li style={active > 0 ? {color: activeColor} : {color: "gray"}}  className={classes.collection__item}>
                    <FiShoppingBag/>
                    <Link style={active > 0 ? {color: activeColor} : {color: "gray"}} to="/karzinka">Корзина</Link>
                </li>
                <div style={lineColor ? {background: lineColor} : {background: "#000"}} className={classes.line}></div>
                <li style={active > 1 ? {color: activeColor} : {color: "gray"}} className={classes.collection__item}>
                    <FiFileText/>
                    <Link style={active > 1 ? {color: activeColor} : {color: "gray"}} to="/karzinka/submission">Разместить заказ</Link>
                </li>
                <div style={lineColor ? {background: lineColor} : {background: "#000"}} className={classes.line}></div>

                <li style={active > 2 ? {color: activeColor} : {color: "gray"}} className={classes.collection__item}>
                    <FiCreditCard/>
                    <Link style={active > 2 ? {color: activeColor} : {color: "gray"}} to="/karzinka/payment">Платить</Link>
                </li>
                <div style={lineColor ? {background: lineColor} : {background: "#000"}} className={classes.line}></div>
                <li  style={active > 3 ? {color: activeColor} : {color: "gray"}} className={classes.collection__item}>
                    <FiArchive/>
                    <Link style={active > 3 ? {color: activeColor} : {color: "gray"}} to="/">Заказ выполнен</Link>
                </li>
            </ul>
        </div>
    )
}

export default KarzinkaProcess
