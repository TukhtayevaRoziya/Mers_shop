import { useState, useEffect } from "react";
import { NavLink, useHistory, useLocation} from "react-router-dom";
import style from "./Sign.module.css";
import { connect, useSelector } from "react-redux";
import { authUser } from "../../../../redux/actions/authActions";
const TEST_EMAIL_REGX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const TEST_PASSWORD_REGX =
  /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])([a-zA-Z0-9@$!%*?&]{8,})$/;

function SignInForm(props) {
  const location = useLocation();
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const authStatus = useSelector((state) => state.authReducer);
  useEffect(() => {
    const emailRGXTest = TEST_EMAIL_REGX.test(email);
    setIsValidEmail(emailRGXTest);
  }, [email]);

  useEffect(() => {
    const passwordRGXTest = TEST_PASSWORD_REGX.test(password);
    setIsValidPassword(passwordRGXTest);
  }, [password]);

  const handleLogin = async (e) => {
    e.preventDefault();
    // Check if XSS occures ( ? Button enabled)
    const dbCheckEmail = TEST_EMAIL_REGX.test(email);
    const dbCheckPassword = TEST_PASSWORD_REGX.test(password);

    if (dbCheckEmail && !dbCheckPassword) {
      props.authUser({ email, password });
    } else {
      setError("Invalid data!");
      return;
    }
  };

  // console.log(location, history);

  // useEffect(() => {
  //   if(authStatus.isAuthenticated){
  //     history.push(location.state.from)
  //   }
  //   else{
  //     return
  //   }
  // },[authStatus.isAuthenticated, history, location.state.from])

  return (
    <div className={style.main}>
      <form onSubmit={handleLogin}>
        {authStatus.message || error ? (
          <p>{authStatus?.message}</p>
        ) : (
          <p>{error}</p>
        )}
        <label htmlFor="email">Email*</label>
        <input
          autoFocus
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {!isValidEmail && email.length > 0 ? (
          <p className={style.instructor}>Email is invalid</p>
        ) : (
          <></>
        )}
        <label htmlFor="password">Password*</label>
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
        <NavLink to={"/login/forgetPassword"}>Forgot password?</NavLink>
        <button>Sign In</button>
      </form>
    </div>
  );
}

export default connect(null, { authUser})(SignInForm);