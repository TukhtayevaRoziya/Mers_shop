import { LIKE_PRODUCTS, REMOVE_LIKED_PRODUCTS, REMOVE_LIKED_PRODUCT } from "./types";

export const like__products = (product) => {
  return{
    type: LIKE_PRODUCTS,
    payload:{ 
      product
    }
  }
}

export const remove__liked__oneproduct = (productId) => {
  return{
    type: REMOVE_LIKED_PRODUCT,
    payload: {
      productId
    }
  }
}

export const remove__liked__products = () => {
  return {
    type: REMOVE_LIKED_PRODUCTS
  }
}