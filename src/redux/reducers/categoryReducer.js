import { CATEGORY_PRODUCTS, CATEGORY_PRODUCTS_FAILED, CATEGORY_PRODUCTS_LOADING } from '../actions/types';

const initialState = {
  categories: [],
  error: false,
  loading: false
}

const categoryReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case CATEGORY_PRODUCTS:
      return{
        ...state,
        categories: payload.categoryProducts
      } 
    case CATEGORY_PRODUCTS_FAILED:
      return {
        ...state,
        error: true,
        loading: false
      }
    case CATEGORY_PRODUCTS_LOADING:
      return{
        ...state,
        error: false,
        loading: true
      }
    default:
      return state 
  }
}

export default categoryReducer