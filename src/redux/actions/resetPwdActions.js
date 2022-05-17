import { RESET_PASSWORD_FAILED, RESET_PASSWORD, RESET_PASSWORD_LOADING, RESET_PASSWORD_CLEAR } from "./types";
import authApiInstance from "../../api/authApi";
const RESET_PASSWORD_ENDOINT = "ResetPassword";

export const resetPassword = ({oldPassword, newPassword, confirmPassword}) => async dispatch => {
  dispatch({
    type: RESET_PASSWORD_LOADING
  });
  authApiInstance.post(RESET_PASSWORD_ENDOINT, null, {
    params: {
      oldPassword,
      newPassword,
      coniformPassword: confirmPassword
    }
  }).then(() => {
        dispatch({
          type: RESET_PASSWORD
        })
  })
    .catch((err) => {
      dispatch({
        type: RESET_PASSWORD_FAILED
      })
    })
    setTimeout(() => {
      dispatch({
        type: RESET_PASSWORD_CLEAR
      })
    }, 3000)
}