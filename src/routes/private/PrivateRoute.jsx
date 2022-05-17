import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect, useLocation } from "react-router-dom";
import PersistContainer from "../../utils/PersistContainer";

const Private = (props) => {
  const user = useSelector((state) => state.authReducer);
  const location = useLocation();
  return user.isAuthenticated ? (
    <PersistContainer>
      <Route {...props} />
    </PersistContainer>
  ) : (
    <Redirect
      to={{
        pathname: "/login/sign-in",
        state: {
          from: location.pathname,
        }
      }}
    />
  );
};

export default Private;
