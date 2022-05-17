import React, { useState } from "react";

import { Products, sideScroll } from "../../../utils/helpers";

import vectorR from "../../../assets/home/vectorR.png";
import vectorL from "../../../assets/home/vectorL.png";
import carousel from "../../../assets/home/featuredProducts.png";
import picture from "../../../assets/home/featuredProducts1.png";
import picture2 from "../../../assets/home/featuredProducts2.png";

import style from "./FeaturedProducts.module.css";


export const FeaturedProducts = () => {
  const [button, setButton] = useState(style.disable);
  const [buttonR, setButtonR] = useState(style.featuredProducts__button);
  const contentWrapper = React.useRef(null);
  return (
    <div className={style.body}>
      <div className={style.featuredProducts__mainBlock}>
        <Products
          title={"Featured products"}
          desc={
            "Sooner or later your car’s engine accessory drive belts, timing belts, and coolant hoses will dry out and crack."
          }
        />
        <div className={style.featuredProducts__buttonWrapper}>
          <button
            className={button}
            onClick={() => {
              if (contentWrapper.current.scrollLeft === 0) {
                setButton(style.disable);
                setButtonR(style.featuredProducts__button);
              } else {
                setButton(style.featuredProducts__button);
                sideScroll(contentWrapper.current, 25, 100, -10);
                setButtonR(style.featuredProducts__button);

              }
            }}
          >
            <img src={vectorL} alt="" />
          </button>
          <button
            className={buttonR}
            onClick={() => {
              const current =
                contentWrapper.current.scrollLeft +
                contentWrapper.current.clientWidth;
              if (contentWrapper.current.scrollWidth <= current) {
                setButton(style.featuredProducts__button);
                setButtonR(style.disable);
              } else {
                sideScroll(contentWrapper.current, 25, 100, 10);
                setButton(style.featuredProducts__button);
                setButtonR(style.featuredProducts__button);
              }
            }}
          >
            <img src={vectorR} alt="" />
          </button>
        </div>
      </div>
      <div
        className={style.carousel}
        style={{ backgroundImage: `url(${carousel})` }}
      >
        <div className={style.darkBox}>
          <h3>Customized Front Carbon Brake Disc</h3>
          <strong>$122.56</strong>
        </div>
      </div>

      <div className={style.picture_group} ref={contentWrapper}>
        <img src={picture} alt="" />
        <img src={picture2} alt="" />
        <img src={picture} alt="" />
        <img src={picture2} alt="" />
        <img src={picture} alt="" />
        <img src={picture2} alt="" />
        <img src={picture} alt="" />
        <img src={picture2} alt="" />
        <img src={picture} alt="" />
        <img src={picture2} alt="" />
        <img src={picture} alt="" />
        <img src={picture2} alt="" />
        <img src={picture} alt="" />
      </div>
    </div>
  );
};
