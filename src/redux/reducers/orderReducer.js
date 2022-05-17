import { ORDER_PRODUCTS_FAILED, ORDER_PRODUCTS, ORDER_PRODUCTS_LOADING } from "../actions/types";

const initialState = {
  order_deatils: null,
  loading: false,
  error: false,
  message: ''
}

const orderReducer = (state = initialState, {type, payload}) => {
  switch(type){
    case ORDER_PRODUCTS: 
      return{
        ...state,
        order_deatils: payload.data,
        message: "Successfully ordered"
      }
    case ORDER_PRODUCTS_FAILED:
      return{
        ...state,
          error: true,
          message: "Something went wrong in ordering process!"
      }
    case ORDER_PRODUCTS_LOADING:
      return{
        ...state,
        loading: true
      }
    default:
      return state
  }
}

export default orderReducer;