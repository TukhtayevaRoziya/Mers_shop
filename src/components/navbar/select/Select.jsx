import React, { useState } from "react";
import style from "./Select.module.css";
import i18n from "../../../i18n";

export const Select = () => {
  const defaultLang = localStorage.getItem("lang") || "uz";
  const [lang, setLang] = useState(defaultLang);

  const handleChange = (event) => {
    setLang(event.target.value);
    localStorage.setItem("lang", event.target.value);
    i18n.changeLanguage(event.target.value);
  };

  return (
    <select
      className={style.select_css}
      name="lang"
      value={lang}
      onChange={handleChange}
    >
      <option value="uz">UZ</option>
      <option value="ru">RU</option>
      <option value="en">EN</option>
    </select>
  );
};
