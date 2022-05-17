import { RESET_PASSWORD_FAILED, RESET_PASSWORD, RESET_PASSWORD_LOADING, RESET_PASSWORD_CLEAR } from "../actions/types";

const initialState = {
  message: "",
  loading: false,
  err: false
}

const resetPwdReducer = (state = initialState, { type }) => {
    switch(type){
      case RESET_PASSWORD:
        return{
          message: "Success!",
          err: false,
          loading: false
        }
      case RESET_PASSWORD_FAILED:
        return{
          message: "Error occured in editing password!",
          err: true,
          loading: false
        }
      case RESET_PASSWORD_LOADING:
        return {
          message: "Loading...",
          err: false,
          loading: true,
        }
      case RESET_PASSWORD_CLEAR:
        return{
          message: "",
          err: false,
          loading: false
        }
      default:
        return state
    }
}

export default resetPwdReducer;