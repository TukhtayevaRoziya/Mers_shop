import React from 'react';
import classes from './AccountSending.module.css';
import KarzinkaProcess from '../../../components/UI/karzinka-process/KarzinkaProcess';
import AccountProduct from '../account-product/AccountProduct';
import { useSelector } from 'react-redux';
import useAuthFetch from '../../../hooks/useAuthFetch';
const ALL_BASKET_PRODUCTS_ENDPOINT = "clientMainsAPI";


const AccountSending = () => {
    const procCss = {
        width: "100%",
        justifyContent: "space-between",
        marginBottom: "37px"
    }
    
      const {user} = useSelector(state => state.authReducer);
      const { data } = useAuthFetch(`${ALL_BASKET_PRODUCTS_ENDPOINT}/${user?.userID}`, null);
      const sending = data?.basketMain?.filter(product => product.status === 3); //STATUS === 3 => SENDING
    return (
        <div className={classes.account__sending}>
            <div className={classes.sending__header}>
                <h1>Высылаем</h1>
            </div>
            <KarzinkaProcess procCss={procCss} activeColor="#000" lineColor="#000"/>
            <AccountProduct data={sending} tableHeaders={["Продукты", "Количество", "Статус заказа", "Опции"]}/>
        </div>
    )
}

export default AccountSending
