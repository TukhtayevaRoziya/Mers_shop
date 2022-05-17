import React from "react";
import { SkillsAbout } from "./../../../utils/helpers";
import style from "./Skills.module.css";
import skills1 from "../../../assets/about/skills1.png";
import skills2 from "../../../assets/about/skills2.png";
import skills3 from "../../../assets/about/skills3.png";
import useFetch from "../../../hooks/useFetch";
const ABOUT_MAINS_ENDPOINT = "aboutMains";

const Skills = () => {
  const skills = [skills1, skills2, skills3];
  const { data } = useFetch(ABOUT_MAINS_ENDPOINT, null);
  return (
    <div className={style.body}>
      {data &&
        data.map((skill, index) => (
          <React.Fragment key={index}>
            <SkillsAbout
              title={skill.title_uz}
              num={`${skill.categoryID}`.padStart(2, "0")}
              img={skills[index] || skill.imageUrl}
              desc={skill.description_uz}
              readMore_link={`engine/${skill.id}`}
            />
            <hr width="2" size="700" color="gray" />
          </React.Fragment>
        ))}
    </div>
  );
};

export default Skills;
