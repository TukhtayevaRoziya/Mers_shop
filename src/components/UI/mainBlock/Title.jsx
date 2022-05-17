import React from "react";
import style from './Title.module.css'

export const Title = ({ title, desc, img, info }) => {
  return (
    <div className={style.body}>
      <h1>{title}</h1>
      <p>{desc}</p>
      <div>
        <img src={img} alt="" /> 
        <h2>{info}</h2>
      </div>
    </div>
  );
};
