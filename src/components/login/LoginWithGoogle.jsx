import React from "react";
import { GoogleLogin } from "react-google-login";
import { connect } from "react-redux";
import {
  authUserWithGoogle,
  authUserWithGoogleFail,
} from "../../redux/actions/authActions";
import { refreshTokenSetup } from "../../utils/refreshToken";
import style from "./LoginWith.module.css";
const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID;

function LoginWithGoogle(props) {
  const onSuccess = (res) => {
    const { accessToken, ...profileObj } = res;
    const gUser = {
      accessToken: accessToken,
      user: profileObj,
      message: "Successfully Logged in!",
      code: 200,
    };
    props.authUserWithGoogle(gUser);
    refreshTokenSetup(res);
  };

  const onFailure = () => {
    props.authUserWithGoogleFail({ message: "Failed to Login!" });
  };

  return (
    <div>
      <GoogleLogin
        clientId={clientId}
        buttonText="Google"
        onSuccess={onSuccess}
        onFailure={onFailure}
        cookiePolicy={"single_host_origin"}
        style={{ marginTop: "100px" }}
        className={style.google}
      />
    </div>
  );
}

export default connect(null, { authUserWithGoogle, authUserWithGoogleFail })(
  LoginWithGoogle
);
