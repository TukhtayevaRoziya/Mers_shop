import React from "react";
import { authUserWithFacebook, authUserWithFacebookFail } from "../../redux/actions/authActions";
import { connect } from "react-redux";
import FacebookLogin from "react-facebook-login";

import style from "./LoginWith.module.css";

const LoginWithFacebook = (props) => {
  const responseFacebook = (response) => {
    const {accessToken, ...user} = response;

    const fbUser = {
      accessToken: accessToken,
      user: user,
      message: "Successfully Logged in!",
      code: 200
    }
    if (response.status !== "unknown") {
        props.authUserWithFacebook(fbUser);
    }
    else{
      props.authUserWithFacebookFail({message: "Failed to Login"})
    }
  };

  const componentClicked = () => {
    console.log("clicked");
  };
  return (
    <div
      style={{
        width: "100%",
        margin: "auto",
        padding: "10px 0px",
      }}
    >
      <FacebookLogin
        appId={process.env.REACT_APP_FACEBOOK_APP_ID}
        fields="name,email,picture"
        onClick={componentClicked}
        callback={responseFacebook}
        icon="fa-facebook"
        textButton="Facebok"
        size="metro"
        cssClass={style.facebook}
      />
    </div>
  );
};

export default connect(null, { authUserWithFacebook, authUserWithFacebookFail })(LoginWithFacebook);
