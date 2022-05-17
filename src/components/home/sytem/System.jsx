import React from "react";

import { SystemBigBox } from "../../../utils/helpers";
import engine from "../../../assets/home/engine1.png";
import system from "../../../assets/home/system1.png";

import style from "./System.module.css";
import { SystemSmallBox } from "./../../../utils/helpers";

export const System = () => {
  return (
    <div className={style.body}>
      <SystemBigBox img={engine} title={"Mator qismlari"} link={"engine"} />
      <SystemSmallBox
        img={system}
        desc={
          "Customized Front Carbon Brakdisc Lorem ipsum dolor sit loe etxt..."
        }
        price={"$44.28"}
      />
      <SystemSmallBox
        img={system}
        desc={"Customized Front Carbon Brakdisc..."}
        price={"$44.28"}
      />
      <SystemSmallBox
        img={system}
        desc={"Customized Front Carbon Brakdisc..."}
        price={"$44.28"}
      />
      <SystemSmallBox
        img={system}
        desc={"Customized Front Carbon Brakdisc..."}
        price={"$44.28"}
      />
      <SystemBigBox img={engine} title={"Engine System"} link={"engine"} />
    </div>
  );
};
