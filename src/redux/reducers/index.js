import { combineReducers } from "redux";
import authReducer from "./authReducer";
import cartReducer from "./cartReducer";
import categoryReducer from "./categoryReducer";
import likeReducer from "./likeReducer";
import orderReducer from "./orderReducer";
import resetPwdReducer from "./resetPwdReducer";

const rootReducers = combineReducers({
  authReducer: authReducer,
  cart: cartReducer,
  liked: likeReducer,
  order: orderReducer,
  resetPwd: resetPwdReducer,
  categories: categoryReducer
});

export default rootReducers;
