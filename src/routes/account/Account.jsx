import React from "react";
import classes from "./Account.module.css";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import FilterNavbar from "../../components/UI/filter-navbar/FilterNavbar";
import AccountSidebar from "./account-sidebar/AccountSidebar";
import { Information } from "../../components/home/information/Information";
import AccountSending from "./account-sending/AccountSending";
import AccountMyaccount from "./account-myaccount/AccountMyaccount";
import AccountAll from "./account-all/AccountAll";
import AccountNotpaid from "./account-notpaid/AccountNotpaid";
import AccounClosed from "./account-closed/AccounClosed";
import AccountProcessing from "./account-processing/AccountProcessing";
import AccountPersonal from "./account-personal/AccountPersonal";
import AccountBook from "./account-book/AccountBook";
import AccountFavourites from "./account-favourites/AccountFavourites";
import AccountResetPwd from "./account-resetpwd/AccountResetPwd";
import ProductDetails from "./product-details/ProductDetails";

const Account = () => {
  const filter_items = [
    ["All products", "products", "Lorem 1"],
    ["All products", "products", "Lorem 1"],
    ["All products", "products", "Lorem 1"],
    ["All products", "products", "Lorem 1"],
  ];
  const { path } = useRouteMatch();
  return (
    <div>
      <div className={classes.account__main}>
        <FilterNavbar filterNavData={filter_items} />
        <div className={classes.account__container}>
          <AccountSidebar />
          <Switch>
            <Route path={`${path}/sending`}>
              <AccountSending />
            </Route>
            <Route exact path={`${path}/myaccount`}>
              <AccountMyaccount />
            </Route>
            <Route path={`${path}/all`}>
              <AccountAll />
            </Route>
            <Route path={`${path}/notpaid`}>
              <AccountNotpaid />
            </Route>
            <Route path={`${path}/closed`}>
              <AccounClosed />
            </Route>
            <Route path={`${path}/processing`}>
              <AccountProcessing />
            </Route>
            <Route path={`${path}/personalinfo`}>
              <AccountPersonal />
            </Route>
            <Route path={`${path}/address`}>
              <AccountBook />
            </Route>
            <Route path={`${path}/favourites`}>
              <AccountFavourites />
            </Route>
            <Route path={`${path}/resetpassword`}>
              <AccountResetPwd />
            </Route>
            <Route path={`${path}/myaccount/details/:productId`}>
              <ProductDetails />
            </Route>
          </Switch>
        </div>
      </div>
      <Information />
    </div>
  );
};

export default Account;
