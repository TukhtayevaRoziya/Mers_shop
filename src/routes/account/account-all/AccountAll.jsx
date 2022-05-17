import React from 'react';
import classes from './AccountAll.module.css';
import AccountProduct from '../account-product/AccountProduct';
// import productImage from "../../../assets/karzinka/product.png";
import useAuthFetch from '../../../hooks/useAuthFetch';
import { useSelector } from 'react-redux';
const ALL_BASKET_PRODUCTS_ENDPOINT = "clientMainsAPI";

const AccountAll = () => {
  const {user} = useSelector(state => state.authReducer);
  const { data } = useAuthFetch(`${ALL_BASKET_PRODUCTS_ENDPOINT}/${user?.userID}`, null);  //STATUS === 0 => ALL
  console.log(user)
    return (
        <div className={classes.account__all}>
           <div className={classes.all__header}>
                <h1>ВСЕ</h1>
            </div>
            <AccountProduct data={data.basketMain} tableHeaders={["Продукты", "Количество", "Статус заказа", "Опции"]} />
        </div>
    )
}

export default AccountAll
