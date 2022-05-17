import React from "react";
import { useHistory } from "react-router-dom";

import style from "./Password.module.css";

export const Password = ({ pathname, title, desc, btnText }) => {
  const history = useHistory();

  const onClick = () => {
    history.push({ pathname });
  };

  return (
    <div className={style.body}>
      <h1>{title}</h1>
      <h2>{desc}</h2>
      <br />
      <p>Email/Phone number</p>
      <input autoFocus type={"email" || "password"} />
      <button onClick={onClick}>{btnText}</button>
    </div>
  );
};
