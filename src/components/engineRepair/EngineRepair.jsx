import React from "react";
import { NavLink } from "react-router-dom";

import main from "../../assets/home/main.webp";
import img from "../../assets/engineRepair/img.png";
import { Heading } from "./../UI/Heading";
import { Title } from "./../UI/engineRepair/Title";

import style from "./EngineRepair.module.css";
import useFetch from "../../hooks/useFetch";
const CATEGORY_ID_ENDPOINT = "aboutMains"

export const EngineRepair = (props) => {
  const CATEGORY_ID  = props?.match?.params.id;
  const { data } = useFetch(`${CATEGORY_ID_ENDPOINT}/${+CATEGORY_ID}`);
  console.log(data);
  return (
    <div className={style.body}>
      <Heading
        img={main}
        title={"Engine Repair"}
        routePathName={"Engine Repair"}
      />
      <Title
        title={"Engine repair"}
        desc={
          "Hercules has a team of dedicated professionals who are in the know about everything that relates to engine repairs. Without a properly functioning engine, your car will not be able to get from Point A to Point B, making engine replacement necessary. With the right maintenance and repairs, your engine can last for miles and miles. Because of this, we encourage individuals to visit our Hercules experts, so they can learn how to care for their engine and choose the best service for their pocketbook and automobile."
        }
      />
      <img src={img} alt="" />

      <Title
        title={"We keep your engine road ready"}
        desc={
          "At Milex Complete Auto Care, we always like to say “We don’t fix something that doesn’t need to be fixed.” We are dedicated to providing the most economical and effective engine services — whether that includes engine repairs, maintenance, or replacement. Many of today’s automobiles are built to last their owners at least 200,000 miles. That is, if the vehicle is properly maintained. Proper maintenance goes beyond just regular oil changes, but includes maintaining all of your fluids, replacing worn-out parts and engine maintenance. The best way to preserve your engine is to get the vehicle fully inspected for items, such as worn out spark plugs, needed adjustments in your timing belt or a low battery. Our recommendation for engine preventive maintenance is to bring your vehicle to Mr. Transmission Milex for our expert tune-up service."
        }
      />

      <Title
        title={"Schedule an appointment now"}
        desc={
          "Being attentive to your engine maintenance is one of the most important ways to protect your vehicle, keeping it in road-ready condition. No matter what type of vehicle you have, our honest and experienced engine technicians are ready to help — all you need to do is make the call. To schedule an appointment for engine maintenance and tune-up services, find your nearest Mr. Transmission Milex today."
        }
      />
      <div className={style.btn}>
        <NavLink to={"/contact"}>Contact Us</NavLink>
      </div>
    </div>
  );
};
