import React from "react";

import img1 from "../../../assets/about/img1.png";
import img2 from "../../../assets/about/img2.png";
import img3 from "../../../assets/about/img3.png";
import img4 from "../../../assets/about/img4.png";
import img5 from "../../../assets/about/img5.png";
import img6 from "../../../assets/about/img6.png";

import style from "./Picture.module.css";

export const Pictures = () => {
  return (
    <div className={style.body}>
      <img src={img1} alt="" />
      <div className={style.pictures}>
        <img src={img2} alt="" />
        <img src={img3} alt="" />
      </div>
      <div className={style.pictures}>
        <img src={img4} alt="" />
        <img src={img5} alt="" />
      </div>
      <img className={style.end} src={img6} alt="" />
    </div>
  );
};
