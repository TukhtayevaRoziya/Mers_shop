import React from 'react';
import classes from './AccountClosed.module.css';
import KarzinkaProcess from '../../../components/UI/karzinka-process/KarzinkaProcess';
import AccountProduct from '../account-product/AccountProduct';
import AccountEmpty from '../account-empty/AccountEmpty';
import { useSelector } from 'react-redux';
import useAuthFetch from '../../../hooks/useAuthFetch';
const ALL_BASKET_PRODUCTS_ENDPOINT = "clientMainsAPI";


const AccounClosed = () => {
    const procCss = {
        width: "100%",
        justifyContent: "space-between",
        marginBottom: "37px"
    }
      const {user} = useSelector(state => state.authReducer);
  const { data } = useAuthFetch(`${ALL_BASKET_PRODUCTS_ENDPOINT}/${user?.userID}`, null);
  const closed = data?.basketMain?.filter(product => product.status === 4); //STATUS === 4 => CLOSED
    return (
        <div className={classes.account__closed}>
              <div className={classes.closed__header}>
                <h1>Закрыто</h1>
            </div>
            <KarzinkaProcess procCss={procCss} activeColor="#000" lineColor="#000"/>
            { /*@uncomment data to see actual results! */
                closed?.length > 0 ? <AccountProduct data={closed} tableHeaders={["Продукты", "Количество", "Статус заказа", "Опции"]}/>  : <AccountEmpty/>
            }
        </div>
    )
}

export default AccounClosed
