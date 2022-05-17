import React from "react";

import { Products } from "../../../utils/helpers";
import CardProduct from "../../../utils/CardProduct";
import card1 from "../../../assets/home/card1.png";

import style from "./PopularProducts.module.css";

export const BrakeDiscProducts = ({ color = "#f8f8f8" }) => {
  return (
    <div style={{ backgroundColor: color }} className={style.body}>
      <Products
        title={"Popular products"}
        desc={
          "Sooner or later your car’s engine accessory drive belts, timing belts, and coolant hoses will dry out and crack."
        }
      />
      <div className={style.scroll}>
        <CardProduct
          desc={"Customized Front Carbon Brake Disc"}
          img={card1}
          price={"$122.56"}
        />
        <CardProduct
          desc={"Customized Front Carbon Brake Disc"}
          img={card1}
          price={"$122.56"}
        />
        <CardProduct
          desc={"Customized Front Carbon Brake Disc"}
          img={card1}
          price={"$122.56"}
        />
        <CardProduct
          desc={"Customized Front Carbon Brake Disc"}
          img={card1}
          price={"$122.56"}
        />
        <CardProduct
          desc={"Customized Front Carbon Brake Disc"}
          img={card1}
          price={"$122.56"}
        />
        <CardProduct
          desc={"Customized Front Carbon Brake Disc"}
          img={card1}
          price={"$122.56"}
        />
      </div>
    </div>
  );
};
