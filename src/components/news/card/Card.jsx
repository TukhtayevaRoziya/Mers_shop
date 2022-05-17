import React from "react";
import { useParams } from "react-router-dom";
import share from "../../../assets/news/card/fi_share.png";
import twitter from "../../../assets/news/card/fi_twitter.png";
import instagram from "../../../assets/news/card/fi_instagram.png";
import slack from "../../../assets/news/card/fi_slack.png";
import style from "./Card.module.css";
import useFetchService from "../../../hooks/useFetchService";
const NEWS_MAIN_ENDPOINT_WITHID = "newsMains";

const CardBlock = ({
  twitterLink,
  instagramLink,
  slackLink,
  netTxt
}) => {
  const params = useParams();
  const { data } = useFetchService(`${NEWS_MAIN_ENDPOINT_WITHID}/${+params.id}`, null)
  console.log(data)
  return (
    <div className={style.body}>
      <div className={style.headerBLock}>
        <img src={`${!data?.fileUrl?.includes("https") ? process.env.REACT_APP_API_SERVICE_FILEPATH + data?.fileUrl : data?.fileUrl}`} alt="" />
        <div className={style.headerText}>
          <h1>{data?.title_en}</h1>
          <h2>{data?.updated?.split("T")[0]}</h2>
          <h3>{data?.description_en}</h3>
        </div>
      </div>
      <div className={style.main}>
        <hr style={{ width: "100%" }} />
        <div className={style.network}>
          <div className={style.networkLink}>
            <p>Share on:</p>
            {/* <a href=""><img src={share} alt="" /></a> */}
            <img src={share} alt="" />
            <a href={twitterLink}>
              <img src={twitter} alt="" />
            </a>
            <a href={instagramLink}>
              <img src={instagram} alt="" />
            </a>
            <a href={slackLink}>
              <img src={slack} alt="" />
            </a>
          </div>
          <p className={style.networkLinkP}>{netTxt}</p>
        </div>
        <hr style={{ width: "100%" }} />
        <p className={style.txt}>{data.newsCategory?.description_en}</p>
        <div className={style.mdlTxt}>
          <h1>{data.newsCategory?.title_en}</h1>
          <p className={style.txt + " " + style.mdlTxtP}>{data?.short_description_uz}</p>
        </div>
        {/* <p className={style.txt}>{data.newsCategory?.description_en}</p>
        <img className={style.img2} src={data?.fileUrl} alt="" />
        <p className={style.txt + " " + style.img2Txt}>{data.newsCategory?.description_en}</p>
        <p className={style.txt}>{data.newsCategory?.description_en}</p>
        <img className={style.imgLeft} src={data.newsCategory?.imageUrl} alt="" />
        <p className={style.txt}>{data.newsCategory?.description_en}</p> */}
        <div className={style.end}>
          <hr style={{ width: "100%" }} />

          <div className={style.networkLink}>
            <p>Share on:</p>
            <img src={share} alt="" />
            <a href={twitterLink}>
              <img src={twitter} alt="" />
            </a>
            <a href={instagramLink}>
              <img src={instagram} alt="" />
            </a>
            <a href={slackLink}>
              <img src={slack} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};


export { CardBlock}