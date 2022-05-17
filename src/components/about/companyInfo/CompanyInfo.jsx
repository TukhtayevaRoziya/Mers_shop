import React from "react";

import { TitleAbout } from "../../../utils/helpers";

import style from "./CompanyInfo.module.css";

export const CompanyInfo = () => {
  return (
    <div className={style.body}>
      <h1 className={style.title}>
        Giving you the confidence to express your individuality
      </h1>
      <div className={style.mainBlock}>
        <TitleAbout
          title={"Memorable moments"}
          desc={
            "o longer a choice between conscience and self-expression, we believe fashion has the power to build futures."
          }
        />
        <TitleAbout
          title={"Memorable moments"}
          desc={
            "o longer a choice between conscience and self-expression, we believe fashion has the power to build futures."
          }
        />
        <TitleAbout
          title={"Memorable moments"}
          desc={
            "o longer a choice between conscience and self-expression, we believe fashion has the power to build futures."
          }
        />
        <TitleAbout
          title={"Memorable moments"}
          desc={
            "o longer a choice between conscience and self-expression, we believe fashion has the power to build futures."
          }
        />
      </div>
    </div>
  );
};
