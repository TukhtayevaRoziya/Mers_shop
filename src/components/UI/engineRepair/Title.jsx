import React from "react";
import style from "./Title.module.css";

export const Title = ({ title, desc }) => {
  return (
    <div className={style.body}>
      <div className={style.block}>
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
    </div>
  );
};
