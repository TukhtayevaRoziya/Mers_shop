import React from "react";
import { Heading } from "../UI/Heading";
import MainBlock from "./mainBlock/MainBlock";
import useFetch from "../../hooks/useFetch";
const CONTACT_HEADERS_ENDPOINT = "contactHeaders";

export const Contact = () => {
  const { data } = useFetch(CONTACT_HEADERS_ENDPOINT, null);
  return (
    <div>
      <Heading
        img={data[0]?.imageUrl}
        routePathName="Contact"
        title={data[0]?.title_uz}
      />
      <MainBlock />
    </div>
  );
};
