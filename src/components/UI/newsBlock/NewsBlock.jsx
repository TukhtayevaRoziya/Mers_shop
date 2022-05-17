import React from "react";
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom'

import style from "./NewsBlock.module.css";


export const NewsBlock = ({img, title, date}) => {
  return (
    <div className={style.parent}>
      <NavLink className={style.link} to={"/new/1"}>
        <div className={style.img}>
          <img src={img} alt="Slide" />
        </div>
        <div className={style.texts}>
          <p className={style.title}>
            <b>
              {title}
            </b>
          </p>
          <p className={style.date}>{date}</p>
        </div>
      </NavLink>
    </div>
  );
};



export function JumbotronPosts({ title, img, date, desc }) {
  return (
    <>
      <div className={style.jumbotronPostsImage}>
        <NavLink to="/new/1" className={style.link}>
          <img src={img} alt="Jumbotron post 1" />
        </NavLink>
      </div>
      <div className={style.jumbotronPostsAbout}>
        <Link to="/new/1" className={style.link}>
          <p>
            <b>
              {title}
            </b>
          </p>
          <p className={style.jumbotronPostsDate}>{date}</p>
          <p>
            {desc}
          </p>
        </Link>
      </div>
    </>
  )
}

