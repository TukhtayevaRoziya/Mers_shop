import React from "react";

import { BlockOptions } from "../../../utils/helpers";

import style from './Options.module.css'

export const Options = () => {
  return (
    <div className={style.body}>
      <h1 className={style.title}>When you're ready to buy, we give you options</h1>
      <div className={style.mainBlock}>
          <BlockOptions num={23} title={'Total categories we are reached'} desc={'Search for the products you love from the best stores on the web and see them side by side. Decide which price, shipping method.'}/>
          <BlockOptions num={1223} title={'Total reached products'} desc={'Search for the products you love from the best stores on the web and see them side by side. Decide which price, shipping method.'}/>
      </div>
    </div>
  );
};
