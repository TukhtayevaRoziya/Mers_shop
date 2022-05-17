import React from "react";
import classes from "./AccountMyaccount.module.css";
import AccountProduct from '../account-product/AccountProduct';
import { Link } from "react-router-dom";
import productImage from "../../../assets/karzinka/product.png";

import { ReactComponent as Bag } from "../../../assets/account/bag.svg";
import { ReactComponent as File } from "../../../assets/account/file.svg";
import { ReactComponent as Box } from "../../../assets/account/box.svg";
import { ReactComponent as Card } from "../../../assets/account/card.svg";

const AccountMyaccount = () => {
  const data = [
    {
      id: 0,
      productImage: productImage,
      productTitle: `Black/Red/Blue 1" Extra Flow Breather 1" Push In Vent Filter for Valve Cover`,
      productRatings: 4,
      productCost: 12.99,
      productCount: 3
    },
    {
      id: 1,
      productImage: productImage,
      productTitle: `Black/Red/Blue 1" Extra Flow Breather 1" Push In Vent Filter for Valve Cover`,
      productRatings: 4,
      productCost: 12.99,
      productCount: 5
    }
  ]
  return (
    <div className={classes.account__myaccount}>
      <div className={classes.myaccount__header}>
        <h1>Mои заказы</h1>
      </div>
      <ul className={classes.myaccount__options}>
        <li className={classes.option__item}>
          <Link to="/"> <Bag/> <p>Корзина</p> </Link>
        </li>
        <li className={classes.option__item}>
            <Link to="/"> <File/> <p>Разместить заказ</p> </Link>
        </li>
        <li className={classes.option__item}>
            <Link to="/"> <Card/> <p>Платить</p> </Link>
        </li>
        <li className={classes.option__item}>
            <Link to="/"> <Box/> <p>Заказ выполнен</p> </Link>
        </li>
      </ul>
      <div className={classes.myaccount__header}>
        <h1>Мое избранное</h1>
      </div>
      {/*@tableHeaders => requires array for th if no tableHeaders only delete and basket appear  */}
      {/*@AccountProduct fully reusable */}
      <AccountProduct data={data}/>
    </div>
  );
};

export default AccountMyaccount;