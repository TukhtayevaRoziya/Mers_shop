import React from "react";

import img1 from "../../../assets/news/img1.png";
import img2 from "../../../assets/news/img2.png";
import img3 from "../../../assets/news/img3.png";
import { NewsBlock } from "../../UI/newsBlock/NewsBlock";
import style from "./Imgs.module.css";

export const Imgs = () => {
  const data = [
    {
      id: 1,
      img: img1,
      title: "More than 440,000 new cases were recorded in the US on Monday.",
      date: "12.12.2021",
    },
    {
      id: 2,
      img: img2,
      title: "France, Portugal and England have also reported record numbers",
      date: "12.12.2021",
    },
    {
      id: 3,
      img: img3,
      title: "Travellers are asked to avoid these countries.",
      date: "12.12.2021",
    },
  ];

  const dataMap = data.map((d) => (
    <NewsBlock key={d.id} img={d.img} title={d.title} date={d.date} />
  ));

  return (
    <div className={style.row}>
      <div className={style.col_1}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-bookmark"
          viewBox="0 0 16 16"
        >
          <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"></path>
        </svg>
      </div>

      <div className={style.pictures}>{dataMap}</div>
    </div>
  );
};
