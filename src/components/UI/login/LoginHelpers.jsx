import React from "react";
import { NavLink } from "react-router-dom";

import img from "../../../assets/login/frame.png";

import LoginWithGoogle from "./../../login/LoginWithGoogle";
import LoginWithFacebook from "./../../login/LoginWithFacebook";

import style from "./LoginHelpers.module.css";

export const LoginHelpers = ({ inUp, display='' }) => {
  return (
    <div className={style.body}>
      <h1> or Sign {inUp} via</h1>
      <LoginWithFacebook />
      <LoginWithGoogle />
      <p style={{display: display}} className={style.desc}>
        by clicking submit you agree to the
        <NavLink to={"/conditions"}>Terms and Conditions</NavLink>
      </p>
      <img src={img} alt="" />
    </div>
  );
};
