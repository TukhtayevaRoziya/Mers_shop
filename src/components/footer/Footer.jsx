import React from "react";
import logo from "../../assets/home/logo.png";
import facebook from "../../assets/footer/facebook.png";
import twitter from "../../assets/footer/twitter.png";
import instagram from "../../assets/footer/instagram.png";
import { LinksFooter } from "../../utils/helpers";

import style from "./Footer.module.css";
import useFetch from "../../hooks/useFetch";
const SITE_HEADER_FOOTER = "siteHeaderFooterInfoes";

export const Footer = () => {
  const { data } = useFetch(SITE_HEADER_FOOTER, null);
  //Language selection made easy 👇
  const services = data[0]?.[`textService_en`].split(",");
  const about = data[0]?.[`textAbout_en`].split(",");
  const contact = data[0]?.[`contactAddress_en`].split("*");
  const phone = data[0]?.[`contactphone`].split(",");
  return (
    <div className={style.body}>
      <div className={style.info}>
        <img src={logo} alt="" />
        <h3>{data[0]?.textLogo_en}</h3>
      </div>
      <LinksFooter links={services} title={"Services"} />
      <LinksFooter links={about} title={"About"} />
      <LinksFooter links={contact} phone={phone} title={"Contact"} />
      <div className={style.end}>
        <div>
          <h1>
            <a href="#whichpage">Terms & Conditions</a>
          </h1>
          <a href="#whichpage">Privacy Policy</a>
        </div>
        <div>
          <a href={data[0]?.facebookLink}>
            <img src={facebook} alt="" />
          </a>
          <a href={data[0]?.twitLink}>
            <img src={twitter} alt="" />
          </a>
          <a href={data[0]?.instagramLink}>
            <img src={instagram} alt="" />
          </a>
        </div>
      </div>
      <div className="copyright">
        <p className={style.copyright}>
          Barcha huqular himoyalangan.{" "}
          <a href="https://softcity.uz">SoftCity</a>
        </p>
      </div>
    </div>
  );
};
