import React from "react";
import { NavLink } from "react-router-dom";
// import { SelectNav } from '../../../utils/helpers'

import all from "../../../assets/home/category/all.svg";
import brakeDiscs from "../../../assets/home/category/breaks.svg";
import brakePads from "../../../assets/home/category/engine.svg";
import brakeDrums from "../../../assets/home/category/all.svg";
import hotProducts from "../../../assets/home/category/breaks.svg";
import popularProducts from "../../../assets/home/category/engine.svg";

import style from "./Selects.module.css";

export const Selects = ({
  to1 = "all",
  to2 = "brakeDiscs",
  to3 = "brakePads",
  to4 = "brakeDrums",
  to5 = "hotProducts",
  to6 = "popularProducts",
  to7 = "brakeDisc",
}) => {
  // const names = [
  //     {id: 1, name:'All Categories', link:'all', path:'/all'},
  //     {id: 2, name:'Brake Discs', link:'brakeDiscs', path:'/brakeDisc'},
  //     {id: 3, name:'Brake Pads', link:'brakePads', path:'brakePads'},
  //     {id: 4, name:'Brake Drums', link:'brakeDrums', path:'brakeDrums'},
  //     {id: 5, name:'Hot Products', link:'hotProducts', path:'hotProducts'},
  //   ]

  const data = [
    { id: 1, to: to1, txt: "All Categories", img: all },
    { id: 2, to: to2, txt: "Brake Discs", img: brakeDiscs },
    { id: 3, to: to3, txt: "Brake Pads", img: brakePads },
    { id: 4, to: to4, txt: "Brake Drums", img: brakeDrums },
    { id: 5, to: to5, txt: "Hot Products", img: hotProducts },
    { id: 6, to: to6, txt: "Popular products", img: popularProducts },
    { id: 7, to: to7, txt: "Brake Discs", img: brakeDiscs },
  ];

  var dataMap = data.map((d) => (
    <NavLink key={d.id} to={d.to}>
      {d.txt}
    </NavLink>
  ));
  var dataMapSm = data.map((d) => (
    <NavLink key={d.id} to={d.to}>
      <img src={d.img} alt="" />
      {d.txt}
    </NavLink>
  ));
  return (
    <div className={style.body}>
      {/* <SelectNav names={names}/>
      <SelectNav names={names}/>
      <SelectNav names={names}/>
      <SelectNav names={names}/>
      <SelectNav names={names}/>
      <SelectNav names={names}/>
      <SelectNav names={names}/> */}
      {window.innerWidth <= 769 ? dataMapSm : dataMap}
    </div>
  );
};
