import React from 'react';
import { Link } from 'react-router-dom';
import { FiDownload } from 'react-icons/fi';
import classes from './ProductDetails.module.css';
import productImage from "../../../assets/karzinka/product.png";
import KarzinkaProcess from '../../../components/UI/karzinka-process/KarzinkaProcess';
import AccountProduct from '../account-product/AccountProduct';

const ProductDetails = () => {
    const procCss = {
        width: "100%",
        paddingRight: "100px",
        justifyContent: "space-between",
        marginBottom: "37px"
    }

    const data = [
        {
          id: 0,
          productImage: productImage,
          productTitle: `Black/Red/Blue 1" Extra Flow Breather 1" Push In Vent Filter for Valve Cover`,
          productRatings: 4,
          productCost: 12.99,
          productCount: 3
        }
      ]
    
    return (
        <div className={classes.product__details}>
            <div className={classes.details__header}>
                <h1>Деталь заказа</h1>
            </div>
            <KarzinkaProcess activeColor="#000" lineColor="#000" procCss={procCss}/>
            <div className={classes.details__info}>
                <div className={classes.info__header}>  
                    <h2>запросить информацию</h2>
                    <Link> <FiDownload/>  Скачать счет-фактуру</Link>
                </div>
                <div className={classes.info__container}>
                    <ul className={classes.info__collection}>
                        <li className={classes.info__item}>
                            <p>№ заказа.:</p> <b>106398576</b>
                        </li>
                        <li className={classes.info__item}>
                            <p>Имя Клиента:</p> <b>Ali Safarov</b>
                        </li>
                        <li className={classes.info__item}>
                            <p>Адрес доставк:</p> <b>Uvaysiy Yunusobod 19 Tashkent, Toshkent City, Uzbekistan</b>
                        </li>
                        <li className={classes.info__item}>
                            <p>ZIP / Почтовый индекс:</p> <b>106398576</b>
                        </li>
                        <li className={classes.info__item}>
                            <p>Номер телефона:</p> <b>997486422</b>
                        </li>
                        <li className={classes.info__item}>
                            <p>Дата заказа:</p> <b>2021-12-28 04:18:17</b>
                        </li>
                        <li className={classes.info__item}>
                            <p>Способ оплаты:</p> <b>Credit Card</b>
                        </li>
                    </ul>
                </div>
                <AccountProduct details={true} tableHeaders={["Продукты", "ID", "Количество", "цена за единицу товара"]} data={data}/>
                <h2 className={classes.info__total}>Всего: $ 292.18</h2>
            </div>
        </div>
    )
}

export default ProductDetails
