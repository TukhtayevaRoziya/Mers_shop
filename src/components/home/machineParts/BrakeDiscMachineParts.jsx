import React from "react";

import { MachineParts } from "../../../utils/helpers";

import car_1 from "../../../assets/discs/1.jpg";
import car_2 from "../../../assets/discs/2.jpg";
import car_3 from "../../../assets/discs/3.jpg";

import style from "./AllMachineParts.module.css";

export const BrakeDiscMachineParts = () => {
  return (
    <div className={style.body}>
      <div className={style.box}>
        <MachineParts
          img={car_1}
          desc="lamps & lights"
          title={"mega sale"}
          orderLink={"/lamps_light"}
          saleNum={"sale off"}
          discount=" -47%"
        />
        <MachineParts
          img={car_2}
          desc="side & back"
          title={"Body parts"}
          orderLink={"/bodyParts"}
          saleNum={"repair over $145"}
          discount="take a sell 17% off"
        />
        <MachineParts
          img={car_3}
          title={"Engine system"}
          orderLink={"/engineSystem"}
          saleNum={"sale off"}
          discount=" -29%"
        />
      </div>
    </div>
  );
};
