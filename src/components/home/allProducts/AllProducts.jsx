import React, { useState } from "react";

import  CardProduct  from "../../../utils/CardProduct";
import picture1 from "../../../assets/home/card1.png";

import style from "./AllProducts.module.css";

export const AllProducts = () => {
  const [show, setShow] = useState(false);

  const showClick = () => {
    setShow(true);
  };

  const hideClick = () => {
    setShow(false);
  };

  return (
    <div className={style.body}>
      <h1 className={style.title}> All Products</h1>
      <div>
        <div className={style.card_group}>
          <CardProduct
            desc={"Customized Front Carbon Brake Disc"}
            img={picture1}
            price={"$124.56"}
          />
          <CardProduct
            desc={"Customized Front Carbon Brake Disc"}
            img={picture1}
            price={"$122.56"}
          />
          <CardProduct
            desc={"Customized Front Carbon Brake Disc"}
            img={picture1}
            price={"$122.56"}
          />
          <CardProduct
            desc={"Customized Front Carbon Brake Disc"}
            img={picture1}
            price={"$122.56"}
          />
          <CardProduct
            desc={"Customized Front Carbon Brake Disc"}
            img={picture1}
            price={"$122.56"}
          />
        </div>

        <div className={style.card_group}>
          <CardProduct
            desc={"Customized Front Carbon Brake Disc"}
            img={picture1}
            price={"$122.56"}
          />
          <CardProduct
            desc={"Customized Front Carbon Brake Disc"}
            img={picture1}
            price={"$122.56"}
          />
          <CardProduct
            desc={"Customized Front Carbon Brake Disc"}
            img={picture1}
            price={"$122.56"}
          />
          <CardProduct
            desc={"Customized Front Carbon Brake Disc"}
            img={picture1}
            price={"$122.56"}
          />
          <CardProduct
            desc={"Customized Front Carbon Brake Disc"}
            img={picture1}
            price={"$122.56"}
          />
        </div>
      </div>
      {!show ? (
        <button className={style.seeMore} onClick={showClick}>
          Load more
        </button>
      ) : (
        <>
          <div className={style.card_group}>
            <CardProduct
              desc={"Customized Front Carbon Brake Disc"}
              img={picture1}
              price={"$122.56"}
            />
            <CardProduct
              desc={"Customized Front Carbon Brake Disc"}
              img={picture1}
              price={"$122.56"}
            />
            <CardProduct
              desc={"Customized Front Carbon Brake Disc"}
              img={picture1}
              price={"$122.56"}
            />
            <CardProduct
              desc={"Customized Front Carbon Brake Disc"}
              img={picture1}
              price={"$122.56"}
            />
            <CardProduct
              desc={"Customized Front Carbon Brake Disc"}
              img={picture1}
              price={"$122.56"}
            />
          </div>
          <button className={style.seeMore} onClick={hideClick}>
            Load less
          </button>
        </>
      )}
    </div>
  );
};
