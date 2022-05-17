import style from "./Sign.module.css";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import authApi from "../../../../api/authApi";

// TEST regex
const REGISTRATION_ENDPOINT = "Register";
const TEST_PHONENUMBER_REGX = /^\d{12,12}$/; //with international format 13 symbol
const TEST_EMAIL_REGX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const TEST_PASSWORD_REGX =
  /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,})$/;

function SignUpForm() {
  const history = useHistory();
  const [fName, setFName] = useState("");
  const [sName, setSName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [matched, setMatched] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [isValidPhone, setIsValidPhone] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  /**@email__validation - with strict check*/
  useEffect(() => {
    const emailRGXTest = TEST_EMAIL_REGX.test(email);
    setIsValidEmail(emailRGXTest);
  }, [email]);

  /**@phone__validation - with international format */
  useEffect(() => {
    const phoneRGXTest = TEST_PHONENUMBER_REGX.test(phone);
    setIsValidPhone(phoneRGXTest);
  }, [phone]);

  /**@password__validation - with strict check*/
  useEffect(() => {
    const passwordRGXTest = TEST_PASSWORD_REGX.test(password);
    if (passwordRGXTest) {
      const matchThePasswords = password === confirmPassword;
      setMatched(matchThePasswords);
      setIsValidPassword(passwordRGXTest);
    }
  }, [password, confirmPassword]);

  const handleUserRegistration = async (e) => {
    e.preventDefault();
    // Check if XSS occures ( ? Button enabled)
    const dbCheckEmail = TEST_EMAIL_REGX.test(email);
    const dbCheckPassword = TEST_PASSWORD_REGX.test(password);
    const dbCheckPhone = TEST_PHONENUMBER_REGX.test(phone);
    if (dbCheckEmail && dbCheckPassword && dbCheckPhone && matched) {
      setLoading(true);
      try {
        const response = await authApi.post(REGISTRATION_ENDPOINT, {
          fName,
          sName,
          phone,
          email,
          password,
          confirmPassword,
        });
        setLoading(false);
        setSuccess(true);
        setFName("");
        setSName("");
        setEmail("");
        setPhone("");
        setPassword("");
        setConfirmPassword("");
        console.log(response);
        if (response && success) {
          history.push("/login/signIn");
        }
      } catch (err) {
        if (!err?.response) {
          setError("No Server Response");
        } else if (err.response?.status === 409) {
          setError("Username Taken");
        } else {
          setError("Registration Failed");
        }
        setLoading(false);
      }
    } else {
      setError("Invalid data!");
      return;
    }
  };

  console.log(loading);
  return (
    <div className={style.main}>
      <form onSubmit={handleUserRegistration}>
        {error && <p>{error}</p>}
        <label htmlFor="f_name">First name *</label>
        <input
          autoFocus
          id="f_name"
          type="text"
          value={fName}
          onChange={(e) => setFName(e.target.value)}
        />
        <label htmlFor="s_name">Last name *</label>
        <input
          type="text"
          id="s_name"
          value={sName}
          onChange={(e) => setSName(e.target.value)}
        />
        <label htmlFor="phone"> Phone number *</label>
        <input
          type="number"
          id="phone"
          autoComplete="off"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        {!isValidPhone && phone.length > 0 ? (
          <p className={style.instructor}>
            Phone number must be in international format
          </p>
        ) : (
          <></>
        )}
        <label htmlFor="email">Email *</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {!isValidEmail && email.length > 0 ? (
          <p className={style.instructor}>Email is invalid!</p>
        ) : (
          <></>
        )}
        <label htmlFor="password">Create password *</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {!isValidPassword && password.length > 0 ? (
          <p className={style.instructor}>Password is invalid!</p>
        ) : (
          <></>
        )}
        <label htmlFor="password-confirm">Confirm password *</label>
        <input
          type="password"
          id="password-confirm"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {!matched && confirmPassword.length > 0 ? (
          <p className={style.instructor}>Confirm Password is not match!</p>
        ) : (
          <></>
        )}
        <button>Sign Up</button>
      </form>
      <hr />
    </div>
  );
}

export default SignUpForm;
