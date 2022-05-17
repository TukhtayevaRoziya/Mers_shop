import React, { useState } from "react";
import { Title } from "../../UI/mainBlock/Title";
import messageicon from "../../../assets/contact/message.png";
import location from "../../../assets/contact/location.png";
import clock from "../../../assets/contact/clock.png";
import YandexMap from "./map/Map";
import style from "./MainBlock.module.css";
import { useEffect } from "react";
import authApiInstance from "../../../api/authApi";
const CONTACT_MAIN_ENDPOINT = "contactMainsAPI";

const TEST_NAME_REGX = /^[A-Z][-a-zA-Z]+$/;
const TEST_PHONENUMBER_REGX = /^\+?[1-9][0-9]{11,11}$/;
const TEST_EMAIL_REGX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const MainBlock = (props) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  console.log("For preloader", loading);
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isNameValid, setIsNameValid] = useState(false);
  const [isSurnameValid, setIsSurnameValid] = useState(false);
  const [isPhoneNumberValid, setIsPhonenumberValid] = useState(false);

  const data = [
    {
      id: 1,
      title: "Call Us",
      desc: "The potential failure of President Biden to get his Build Back Better act through Congress would significantly impact the ability of...",
      img: messageicon,
      info: "+998 71 289-99-99",
    },
    {
      id: 2,
      title: "Visit Us",
      desc: "The potential failure of President Biden to get his Build Back Better act through Congress would significantly impact the ability of...",
      img: location,
      info: "9, Ziyolilar str., M.Ulugbek district, 100170 Tashkent, Uzbekistan.",
    },
    {
      id: 3,
      title: "Visit Us",
      desc: "The potential failure of President Biden to get his Build Back Better act through Congress would significantly impact the ability of...",
      img: clock,
      info: "Mon - Fri: 8:00am to 5:00pm  Sut - Sun: Close",
    },
  ];

  const dataMap = data.map((d, index) => (
    <Title
      key={index}
      title={d.title}
      desc={d.desc}
      img={d.img}
      info={d.info}
    />
  ));

  useEffect(() => {
    const testEmail = TEST_EMAIL_REGX.test(email);
    setIsEmailValid(testEmail);
  }, [email]);

  useEffect(() => {
    const testPhonenumber = TEST_PHONENUMBER_REGX.test(phonenumber);
    setIsPhonenumberValid(testPhonenumber);
  }, [phonenumber]);

  useEffect(() => {
    const testName = TEST_NAME_REGX.test(name);
    setIsNameValid(testName);
  }, [name]);

  useEffect(() => {
    const testSurname = TEST_NAME_REGX.test(surname);
    setIsSurnameValid(testSurname);
  }, [surname]);


  const handleSendMessage = (e) => {
    e.preventDefault();
    // Prevent XXS submit change
    const dbSurnameCheck = isSurnameValid;
    const dbNameCheck = isNameValid;
    const dbEmailCheck = isEmailValid;
    const dbPhoneCheck = isPhoneNumberValid;
    if (dbEmailCheck && dbNameCheck && dbSurnameCheck && dbPhoneCheck) {
      setLoading(true);
      authApiInstance
        .post(CONTACT_MAIN_ENDPOINT, {
          name,
          email,
          surname,
          message,
          phone: phonenumber,
        })
        .then((response) => {
          if (response.data) {
            setSuccess(true);
            setLoading(false);
          }
        })
        .catch((err) => {
          if (!err?.response) {
            setErrorMessage("No Server Response");
          } else if (err.response?.status === 409) {
            setErrorMessage("Username Taken");
          } else {
            setErrorMessage("Registration Failed");
          }
          setSuccess(false);
          setLoading(false);
        });
    } else {
      setErrorMessage("Please provide correct info!");
    }
  };

  return (
    <div className={style.body}>
      <h1 className={style.title}>Get in touch</h1>
      <br />

      <form className={style.main} onSubmit={handleSendMessage}>
        <h3>Send a message</h3>
        <p>
          Her parents had moved into the house, belonging to her Scottish
          grandparents, the Earl and Countess of Strathmore, only a few weeks
          before her birth.
        </p>

        <div className={style.inp_gr}>
          <input
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Surname"
            value={surname}
            onChange={(e) => setSurname(e.target.value)}
          />
          <input
            placeholder="Phone number"
            value={phonenumber}
            onChange={(e) => setPhonenumber(e.target.value)}
          />
        </div>
        <textarea
          className={style.message_inp}
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        {errorMessage && <p>{errorMessage}</p>}
        {success && <p>Message was sent!</p>}
        <button className={style.btn}>Send</button>
      </form>
      <hr className={style.hr2} width="1" size="550" color="gray" />
      <div className={style.info}>{dataMap}</div>
      <YandexMap />
    </div>
  );
};

export default MainBlock;
