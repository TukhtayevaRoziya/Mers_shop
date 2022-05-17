import React from "react";
import style from "./SimpleBlog.module.css";
import useFetchService from '../../../hooks/useFetchService';
import { SimpleBlogBlock } from "./../../UI/newsSimpleBlog/SimpleBlog";
const NEWS_MAIN_ENDPOINT = "newsMains";

export const SimpleBlog = () => {
  const { data } = useFetchService(NEWS_MAIN_ENDPOINT, null);
  var perChunk = Math.floor(data.length / 3); 
  let result = data.reduce((resultArray, item, index) => { 
  const chunkIndex = Math.floor(index/perChunk)
  if(!resultArray[chunkIndex]) {
    resultArray[chunkIndex] = [];
  }
  resultArray[chunkIndex].push(item)
  return resultArray
  }, [])
  const dataMap = result.map((newsItem, index) => (
    <SimpleBlogBlock key={index}
        arr={newsItem}
    />
  ));
  return <div className={style.body}>{dataMap}</div>;
};
