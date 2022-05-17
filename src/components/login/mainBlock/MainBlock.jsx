import React from "react";
import { Route, Switch } from "react-router-dom";

import { Sign } from "./sign/Sign";
import { Password } from "../../UI/login/Password";

import style from "./MainBlock.module.css";

export const MainBlock = () => {
  return (
    <div className={style.body}>
      <div className={style.box}>
        <Switch>
          <Route
            path="/login/forgetPassword"
            component={() => (
              <Password
                pathname={"/login/enterCode"}
                title={"Account Setting"}
                desc={
                  "Forget your password? Please enter your phone number or email address. You will resive a link to create a new password via email"
                }
                btnText={"Reset password"}
              />
            )}
          />
          <Route
            path="/login/enterCode"
            component={() => (
              <Password
                pathname={"/login/save"}
                title={"Enter code"}
                btnText={"Submit"}
              />
            )}
          />
          <Route
            path="/login/save"
            component={() => (
              <Password
                pathname={"/login/enterCode"}
                title={"You changed the password"}
                btnText={"Go previous page"}
              />
            )}
          />
          <Route path={"*"} render={() => <Sign />} />
        </Switch>
      </div>
    </div>
  );
};
