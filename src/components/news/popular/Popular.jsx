import React from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { NavLink, useRouteMatch } from "react-router-dom";

import style from "./Popular.module.css";
import "swiper/css";
import useFetch from "../../../hooks/useFetch";
const NEWS_SLIDER_ENDPOINT = "newsSliders";

export const Popular = () => {
  const { url } = useRouteMatch();
  const {data} = useFetch(NEWS_SLIDER_ENDPOINT, null);
  const dataMap = data.map((d) => (
    <SwiperSlide key={d.id}>
      <div className={style.featured}>
        <NavLink to={`${url}/${d.id}`} className={style.link}>
          <p className={style.featuredRed}>
            <b>Popular</b>
          </p>
          <p className={style.featuredTitle}>
            <b>{d.title_en}</b>
          </p>
          <p className={style.featuredText}>{d.description_en}</p>
        </NavLink>
      </div>
    </SwiperSlide>
  ));

  return (
    <>
      <div className={style.container}>
        <div className={style.mostPopular}>
          <div className={style.main}>
            <div className={style.block}>
              <div className={style.mostPopularLeft}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="23"
                  height="23"
                  fill="currentColor"
                  className="bi bi-heart"
                  viewBox="0 0 16 16"
                >
                  <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                </svg>
                <h4 className={style.title}>
                  <b>Most Popular</b>
                </h4>
              </div>
            </div>
            <div className={style.btn_group}>
              <div className={style.mostPopularRight}>
                <button className={`swiperprev ${style.prevStyle}`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-left"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                    />
                  </svg>
                </button>
                <button className={`swipernext ${style.nextStyle}`}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-right"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.featuredParent}>
        <Swiper
          slidesPerView={window.innerWidth <= 769 ?2 : 6}
          modules={[Navigation]}
          navigation={{
            prevEl: ".swiperprev",
            nextEl: ".swipernext",
          }}
          breakpoints={{
            423: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            700: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            1245: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
          }}
        >
          {/*      {window.innerWidth <= 769 ? null : <Search />} */}
         {dataMap}
         {dataMap}
         {dataMap}
        </Swiper>
      </div>
    </>
  );
};
