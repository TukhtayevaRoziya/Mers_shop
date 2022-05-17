import React from 'react';
import AccountProduct from '../account-product/AccountProduct';
import classes from './AccountNotpaid.module.css';
import useAuthFetch from '../../../hooks/useAuthFetch';
import { useSelector } from 'react-redux';
const ALL_BASKET_PRODUCTS_ENDPOINT = "clientMainsAPI";


const AccountNotpaid = () => {
  const {user} = useSelector(state => state.authReducer);
  const { data } = useAuthFetch(`${ALL_BASKET_PRODUCTS_ENDPOINT}/${user?.userID}`, null);
  const notPaidData = data?.basketMain?.filter(product => product.status === 1); //STATUS === 1 => NOT PAID
    return (
        <div className={classes.account__notpaid}>
            <div className={classes.notpaid__header}>
                <h1>Неоплаченный</h1>
            </div>
            <AccountProduct data={notPaidData} tableHeaders={["Продукты", "Количество", "Статус заказа", "Опции"]} />
        </div>
    )
}

export default AccountNotpaid
