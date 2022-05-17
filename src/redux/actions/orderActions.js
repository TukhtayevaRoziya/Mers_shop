import authApiInstance from "../../api/authApi";
import { ORDER_PRODUCTS_FAILED, ORDER_PRODUCTS, ORDER_PRODUCTS_LOADING } from "./types";
const ORDER_FORM_ENDPOINT = "orderMainsAPI";

export const orderProducts = (productMain, quantity, user, user_info) => async dispatch => {
  console.log(productMain)
  user.userID = 0;
  user.roleID = 0;
  user.status = 0;
  user.phone = user_info.phone;
  user.mainRole.parentId = 0;
  user.mainRole.roleID = 0;
  productMain.id = 0;
  productMain.productCategory.id = 0;
  productMain.productCategory.parentId = 0;
  productMain.categoryID = 0;
  productMain.id = 0;
  productMain.homeTopProduct[0].id = 0;
  productMain.productNews[0].productID = 0;
  productMain.productNews[0].id = 0;
  productMain.productNews[0].productID = 0;
  console.log(productMain);
  dispatch({
    type: ORDER_PRODUCTS_LOADING
  });
  authApiInstance.post(ORDER_FORM_ENDPOINT, {
      id: 0,
      count: quantity,
      productID: 0,
      status: 0,
      productMain,
      clientID: 0,
      clientMain: {
        id: 0,
        fname: user_info.fname,
        lname: user_info.lname,
        address: user_info.address,
        phone: user_info.phone,
        email: user_info.email,
        mainUser: [
         user
        ]
    }
  }
  )
    .then(response => {
      dispatch({
        type: ORDER_PRODUCTS,
        payload: {
          data: response.data
        }
      })
      console.log(response)
    })
    .catch(err => {
      dispatch({
        type: ORDER_PRODUCTS_FAILED
      })
      console.log(err)
    })
}