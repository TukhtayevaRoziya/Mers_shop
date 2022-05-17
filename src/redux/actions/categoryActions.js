import { CATEGORY_PRODUCTS, CATEGORY_PRODUCTS_FAILED, CATEGORY_PRODUCTS_LOADING } from './types';
import unAuthApiInstance from '../../api/unAuthApi';
const CATEGORY_ENDPOINT = "productCategories";

export const categoryProductsSuccess = (data) => {
  return{
    type: CATEGORY_PRODUCTS,
    payload: {
      categoryProducts: data
    }
  }
}

export const categoryProductsFailed = () => {
  return {
    type: CATEGORY_PRODUCTS_FAILED
  }
}

export const categoryProductsLoading = () => {
  return {
    type: CATEGORY_PRODUCTS_LOADING
  }
}


export const getCategoryProducts = (categoryId) => async dispatch => {
  dispatch(categoryProductsLoading());
    unAuthApiInstance.get(categoryId ? `${CATEGORY_ENDPOINT}/${categoryId}` : `${CATEGORY_ENDPOINT}`)
      .then(response => {
        if(response.status === 200){
          dispatch(categoryProductsSuccess(response.data))
        }
      })
      .catch(err => {
        dispatch(categoryProductsFailed())
      })
}