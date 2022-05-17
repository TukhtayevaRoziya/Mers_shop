import React from "react";

import { MachineParts } from "../../../utils/helpers";

import car_1 from "../../../assets/home/machine_parts1.png";
import car_2 from "../../../assets/home/machine_parts2.png";
import car_3 from "../../../assets/home/machine_parts3.png";

import style from "./AllMachineParts.module.css";

export const AllMachineParts = () => {
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
