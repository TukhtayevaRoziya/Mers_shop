import { ADD_TO_CART, REMOVE_FROM_CART, REMOVE_ALL_FROM_CART, MOVE_TO_WISHLIST, PLUS_COUNTER_PRODUCT, MINUS_COUNTER_PRODUCT } from "./types";

export const addToCart = (product) => {
  return{
    type: ADD_TO_CART,
    payload: {
      product,
      quantity: 1
    }
  }
}

export const removeFromCart = (productIds) => {
  console.log(productIds)
  return{
    type: REMOVE_FROM_CART,
    payload: {
      productIds
    }
  }
}

export const removeAllFromCart = () => {
  return{
    type: REMOVE_ALL_FROM_CART
  }
}

export const moveToWishlist = (product) => {
  return{
    type: MOVE_TO_WISHLIST,
    payload: product
  }
}

export const increaseQuantity = (product) => {
  return {
    type: PLUS_COUNTER_PRODUCT,
    payload: {
      product
    }
  }
}

export const decreaseQuantity = (product) => {
  return {
    type: MINUS_COUNTER_PRODUCT,
    payload: {
      product
    }
  }
}