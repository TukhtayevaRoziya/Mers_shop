import React from "react";
// import picture from "../../assets/about/picture.png";
// import { Information } from "./../home/information/Information";
import { CompanyInfo } from "./companyInfo/CompanyInfo";
import { Options } from "./options/Options";
import { Heading } from "./../UI/Heading";
import Skills from "./skills/Skills";
// import { SomeText } from "./someText/SomeText";
// import { Pictures } from "./pictures/Pictures";
import useFetch from "../../hooks/useFetch";

const ABOUT_HEADERS_ENDPOINT = "aboutHeaders";

export const About = () => {
  const { data } = useFetch(ABOUT_HEADERS_ENDPOINT, null);

  return (
    <div>
      <Heading
        title={data[0]?.title_uz}
        routePathName="About"
        img={data[0]?.imageUrl}
      />
      <CompanyInfo />
      <Skills />
      <Options />
      {/* <img
        style={{ width: "95%", margin: "80px 2.5% 0" }}
        src={picture}
        alt=""  
      /> */}
      {/* <SomeText />
      <Pictures />
      <Information /> */}
    </div>
  );
};
