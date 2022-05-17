import { LIKE_PRODUCTS, REMOVE_LIKED_PRODUCTS, REMOVE_LIKED_PRODUCT } from '../actions/types';

const inititalState = {
  liked: [],
}

const likeReducer = (state = inititalState, action) => {
  const { type, payload } = action; 
  switch(type){
    case LIKE_PRODUCTS:
      const index = state.liked.findIndex(item =>item.product.id === payload.product.id);
      if(index === -1){
        return{
          liked: [...state.liked, payload].filter((item, index, upcompro) =>
            index === upcompro.findIndex((i) => (
              i.product.id === item.product.id
            ))
          )
        }
      }
      else{
        const item = state.liked.find(item => item.product.id === payload.product.id);
        item.quantity = item.quantity + 1;
        return{
          liked: [...state.liked, item].filter((item, index, upcompro) =>
            index === upcompro.findIndex((i) => (
              i.product.id === item.product.id
            ))
          )
        }
      }
    case REMOVE_LIKED_PRODUCT:
      const indexLiked = [...state.liked].findIndex((product) => product.product.id === payload.productId);
      let rest = [...state.liked];
      rest.splice(indexLiked, 1);
      console.log(rest)
      return{
        liked: rest
      }
    case REMOVE_LIKED_PRODUCTS:
        return{
          liked: []
        }
    default:
      return state
  }
}

export default likeReducer