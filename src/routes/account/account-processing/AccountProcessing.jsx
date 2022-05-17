import React from 'react';
import KarzinkaProcess from '../../../components/UI/karzinka-process/KarzinkaProcess';
import AccountProduct from '../account-product/AccountProduct';
import AccountEmpty from '../account-empty/AccountEmpty';
import classes from './AccountProcessing.module.css';
import useAuthFetch from '../../../hooks/useAuthFetch';
import { useSelector } from 'react-redux';
const ALL_BASKET_PRODUCTS_ENDPOINT = "clientMainsAPI";

const AccountProcessing = () => {
    const procCss = {
        width: "100%",
        justifyContent: "space-between",
        marginBottom: "37px"
    }
    const {user} = useSelector(state => state.authReducer);
    const { data } = useAuthFetch(`${ALL_BASKET_PRODUCTS_ENDPOINT}/${user?.userID}`, null);
    const processing = data?.basketMain?.filter(product => product.status === 2); //STATUS === 2 => PROCESSING
    return (
        <div className={classes.account__processing}>
            <div className={classes.processing__header}>
                <h1>Обработка</h1>
            </div>
            <KarzinkaProcess procCss={procCss} activeColor="#000" lineColor="#000"/>
            { /*@uncomment data to see actual results! */
                processing?.length > 0 ? <AccountProduct data={processing} tableHeaders={["Продукты", "Количество", "Статус заказа", "Опции"]}/>  : <AccountEmpty/>
            }
            
        </div>
    )
}

export default AccountProcessing
