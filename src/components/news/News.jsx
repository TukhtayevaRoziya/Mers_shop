import React from "react";

import style from "./News.module.css";
import { Imgs } from "./imgs/Imgs";
import { SimpleBlog } from "./simpleBlog/SimpleBlog";
import { Popular } from "./popular/Popular";
import { Block } from "./block/Block";
import { EndBlock } from "./endBlock/EndBlock";
import useFetch from "../../hooks/useFetch";
const NEWS_HEADER_ENDPOINT = "newsHeaders";

export const News = () => {
  const { data } = useFetch(NEWS_HEADER_ENDPOINT, null);
  return (
    <>
      <div className={style.body}>
        <div className={style.textBlock}>
          <div className={style.main}>
            <h1>{data[0]?.title_en}</h1>
            <hr color="#152a59" />
          </div>
        </div>
      </div>
      <div className={style.info}>
        <div className={style.infoMain}>
          <h2>{data[0]?.updated?.split("T")[0].replace(/-/g, ".")}</h2>
          <p>
          {data[0]?.description_en}
          </p>
        </div>
      </div>
      <Imgs />
      <SimpleBlog />
      <Popular />
      <Block />
      <EndBlock />
    </>
  );
};

