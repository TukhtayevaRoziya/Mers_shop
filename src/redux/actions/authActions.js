import { AUTH_FAIL, AUTH_USER, AUTH_LOADING, AUTH_SIGNOUT } from "./types";
import authAPI from "../../api/authApi";
const LOGIN_ENDPOINT = "LoginAPI";

export const authUser = (user__data) => async dispatch => {
  dispatch({
    type: AUTH_LOADING,
  });
  authAPI
    .post(LOGIN_ENDPOINT, null, {
      params: user__data,
    })
    .then((response) => {
      dispatch({
        type: AUTH_USER,
        payload: {
          user: response?.data.user,
          message: response?.data.message,
          accessToken: response?.data.accessToken,
          refreshToken: response?.data.refreshToken,
          code: 200,
        },
      });
    })
    .catch((err) => {
      dispatch({
        type: AUTH_FAIL,
        payload: {
          message: err?.response.data.title,
          code: err?.response.status,
        },
      });
      console.log(err)
    });
};

export const authUserWithGoogle = (google__user) => async dispatch => {
  dispatch({
    type: AUTH_USER,
    payload: google__user,
  });
};

export const authUserWithFacebook = (facebook__user) => async dispatch => {
  dispatch({
    type: AUTH_USER,
    payload: facebook__user,
  });
};

export const authUserWithGoogleFail = (err__message) => async dispatch => {
  dispatch({
    type: AUTH_FAIL,
    payload: err__message,
  });
};

export const authUserWithFacebookFail = (err__message) => async dispatch => {
  dispatch({
    type: AUTH_FAIL,
    payload: err__message,
  });
};

export const authUserSignOut = () => async dispatch =>  {
  console.log("Signed out")
  dispatch({
    type: AUTH_SIGNOUT
  })
}