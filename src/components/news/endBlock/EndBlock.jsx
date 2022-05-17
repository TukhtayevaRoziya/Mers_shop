import React, { useState } from "react";

import { SimpleBlogBlock } from "./../../UI/newsSimpleBlog/SimpleBlog";
import end1 from "../../../assets/news/end1.png";
import end2 from "../../../assets/news/end3.png";
import end3 from "../../../assets/news/end3.png";

import style from "./EndBlock.module.css";

export const EndBlock = () => {
  const [emailInput, setEmailInput] = useState("");

  const emailFormSubmit = (e) => {
    e.preventDefault();
    alert("Success!");
  };

  return (
    <div>
      <div className={style.mainBody}>
        <SimpleBlogBlock
          title1={
            "More than 440,000 new cases were recorded in the US on Monday."
          }
          date1={"12.21.2021"}
          img1={end1}
          desc1={
            "Is the progress that was made at the COP26 Glasgow climate summit already in jeopardy because of challenges in the year ahead? There had been plans to build a hotel for the Canadian Pacific Railway"
          }
          dN="none"
        />
        <SimpleBlogBlock
          title1={
            "More than 440,000 new cases were recorded in the US on Monday."
          }
          date1={"12.21.2021"}
          img1={end2}
          desc1={
            "Is the progress that was made at the COP26 Glasgow climate summit already in jeopardy because of challenges in the year ahead? There had been plans to build a hotel for the Canadian Pacific Railway"
          }
          dN="none"
        />
        <SimpleBlogBlock
          title1={
            "More than 440,000 new cases were recorded in the US on Monday."
          }
          date1={"12.21.2021"}
          img1={end3}
          desc1={
            "Is the progress that was made at the COP26 Glasgow climate summit already in jeopardy because of challenges in the year ahead? There had been plans to build a hotel for the Canadian Pacific Railway"
          }
          dN="none"
        />
      </div>
      <div className={style.subscribeBackground}>
        <div className="row">
          <div className={style.subscribeParent}>
            <h5>Our fast and latest newsletters</h5>
            <p className={style.title}>
              <b>Sign for latest newsletters</b>
            </p>
            <form
              onSubmit={emailFormSubmit}
              action=""
              className={style.form}
            >
              <input
                className={style.subscribeInputEmail}
                type="email"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="Enter your email here"
                required
              />
              <button type="submit" className={style.subscribeSubmitButton}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
