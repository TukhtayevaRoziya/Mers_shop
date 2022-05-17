import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { NavLink, useLocation } from "react-router-dom";

import logo from "../../assets/home/logo.png";
import person from "../../assets/home/person.png";

import { Search } from "./search/Search";
import { Select } from "./select/Select";
import { Switch } from "./switch/Switch";

import style from "./Navbar.module.css";
import { FiHeart, FiShoppingCart } from "react-icons/fi";
import useOutsideClick from "../../hooks/useOutsideClick";

export const Navbar = () => {
  const [outside, setOutSide] = useState(true);
  const ref = useOutsideClick(() => {
    setOutSide(true);
  });
  const [scroll, setScroll] = useState();
  const {liked} = useSelector(state => state.liked);
  const {cart} = useSelector(state => state.cart);
  const { pathname } = useLocation();
  const { t } = useTranslation();

  window.addEventListener("scroll", () => {
    if (window.scrollY < 40) {
      setScroll(style.tr);
    } else {
      setScroll(style.mt);
    }
  });

  const { isAuthenticated } = useSelector((state) => state.authReducer);

  return (
    <nav
      className={style.navbar + " " + scroll}
      style={pathname.includes("account") ? { background: "#333" } : null}
    >
      <div className={style.navbar_container + " " + style.container}>
        <input type="checkbox" name="" id="" />
        <div className={style.hamburger_lines}>
          <span className={style.line + " " + style.line1}></span>
          <span className={style.line + " " + style.line2}></span>
          <span className={style.line + " " + style.line3}></span>
        </div>
        <div className={style.navbar__select}>
          <Select />
          {isAuthenticated ? (
            <img src={person} alt="" />
          ) : (
            <NavLink to={"/login"}>Login</NavLink>
          )}
        </div>
        <ul className={style.menu_items}>
          <li>
            <NavLink
              exact
              className={style.item__inactive}
              activeClassName={style.item__active}
              to="/"
            >
              {t("navbar.home")}
            </NavLink>
          </li>
          <li>
            <NavLink
              className={style.item__inactive}
              activeClassName={style.item__active}
              to="/about"
            >
              {t("navbar.about")}
            </NavLink>
          </li>
          <li>
            <NavLink
              className={style.item__inactive}
              activeClassName={style.item__active}
              to="/product"
            >
              {t("navbar.product")}
            </NavLink>
          </li>
          <li>
            <NavLink
              className={style.item__inactive}
              activeClassName={style.item__active}
              to="/news"
            >
              {t("navbar.news")}
            </NavLink>
          </li>
          <li>
            <NavLink
              className={style.item__inactive}
              activeClassName={style.item__active}
              to="/contact"
            >
              {t("navbar.contact")}
            </NavLink>
          </li>
          {window.innerWidth <= 769 ? null : (
            <li ref={ref} onClick={() => setOutSide(false)} className={style.forSearch}>
              <Search outside={outside}/>
            </li>
          )}
          <li className={style.navbar__selectLG}>
            <Select />            
            {isAuthenticated ? (
              <NavLink exact to={"/login/sign-in"}>
                <img src={person} alt="" />
              </NavLink>
            ) : (
              <NavLink exact to={"/login/sign-in"}>
                {t("navbar.login")}
              </NavLink>
            )}
          </li>
          <li className={style.navbar__selectLG}>
            <NavLink className={style.navbar__links} style={{color: "#fff"}} to="/liked">
              <p className={style.counter}>{liked?.length}</p>
              <FiHeart className={style.navbar__icons}/>
            </NavLink>
          </li>
          <li className={style.navbar__selectLG}>
            <NavLink className={style.navbar__links}  style={{color: "#fff"}} to="/karzinka">
              <p className={style.counter}>{cart?.map((item) => item.quantity).reduce((acc, inc) => acc + inc, 0)}</p>
              <FiShoppingCart className={style.navbar__icons}/>
            </NavLink>
          </li>
          <li>
            <Switch />
          </li>
        </ul>
        <NavLink to={"/"} className={style.navbar__logo_block}>
          <img src={logo} alt="" className={style.logo} />
        </NavLink>
      </div>
    </nav>
  );
};
