import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { BrakeDiscMachineParts } from "./../home/machineParts/BrakeDiscMachineParts";
import { BrakeDiscProducts } from "./../home/popularProduct/BrakeDiscProducts";
import { PopularProducts } from "./../home/popularProduct/PopularProducts";
import img from "../../assets/home/main1.webp";
import { Heading } from "./../UI/Heading";
import { FeaturedProducts } from "./../home/featuredProducts/FeaturedProducts";
import { Information } from "./../home/information/Information";

import style from "./Products.module.css";
import { Card } from "./card/Card";
import DropdownMenu from "../../utils/DropdownMenu";

export const Products = () => {
  const { pathname } = useLocation();

  const categoryItems = [
    {title: "All Categories", id: 1, subcategories: ["Sub one", "Sub two"]},
    {title: "Brake Discs", id: 2, subcategories: ["Sub one", "Sub two"]},
    {title: "Brake Pads", id: 3, subcategories: ["Sub one", "Sub two"]},
    {title: "Brake Drums", id: 4, subcategories: ["Sub one", "Sub two"]},
    {title: "Hot Products", id: 5, subcategories: ["Sub one", "Sub two"]},
    {title: "Popular products", id: 6, subcategories: ["Sub one", "Sub two"]},
    {title: "Brake Discs", id: 7, subcategories: ["Sub one", "Sub two"]},
  ]

  return (
    <div className={style.body}>
      <DropdownMenu categoryItems={categoryItems}/>
      <Heading title={"CAR SIDE DOORS"} routePathName="product" img={img} />
      <div className={style.box}>
        <Switch>
          <Route
            path="/product/:id"
            component={() => (
              <Card
                sortBy={"Car side tools"}
              />
            )}
          />

          <Route
            path="/"
            render={() => {
              <>
                <PopularProducts color="#fff" />
                <FeaturedProducts />
              </>;
            }}
          />
          <Route
            path="all"
            render={() => {
              <>
                <PopularProducts color="#fff" />
                <FeaturedProducts />
              </>;
            }}
          />
          <Route
            path="all"
            render={() => {
              <>
                <PopularProducts color="#fff" />
                <FeaturedProducts />
              </>;
            }}
          />
          <Route
            path="brakeDisc"
            render={() => {
              <>
                <BrakeDiscProducts color="#fff" />
                <FeaturedProducts />
              </>;
            }}
          />
          <Route
            path="brakePads"
            render={() => {
              <>
                <BrakeDiscProducts color="#fff" />
                <BrakeDiscMachineParts />
              </>;
            }}
          />

          <Route
            path="brakeDrums"
            render={() => {
              <>
                <PopularProducts color="#fff" />
                <FeaturedProducts />
              </>;
            }}
          />
          <Route
            path="hotProducts"
            render={() => {
              <>
                <BrakeDiscProducts color="#fff" />
                <FeaturedProducts />
              </>;
            }}
          />

          <Route
            path="popularProducts"
            render={() => {
              <>
                <PopularProducts color="#fff" />
                <FeaturedProducts />
              </>;
            }}
          />
        </Switch>
      </div>
      {!pathname.includes("/product/") && (
        <PopularProducts color="#fff" />
      )}

      <FeaturedProducts />
      <Information />
    </div>
  );
};
