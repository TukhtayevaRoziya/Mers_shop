import { ADD_TO_CART, REMOVE_FROM_CART, REMOVE_ALL_FROM_CART, PLUS_COUNTER_PRODUCT, MINUS_COUNTER_PRODUCT } from '../actions/types';

const inititalState = {
  cart: [],
  wishlist: []
}

const cartReducer = (state = inititalState, action) => {
  const { type, payload } = action; 
  switch(type){
    case ADD_TO_CART:
      const index = state.cart.findIndex(item =>item.product.id === payload.product.id);
      if(index === -1){
        return{
          cart: [...state.cart, payload].filter((item, index, upcompro) =>
            index === upcompro.findIndex((i) => (
              i.product.id === item.product.id
            ))
          )
        }
      }
      else{
        const item = state.cart.find(item => item.product.id === payload.product.id);
        item.quantity = item.quantity + 1;
        return{
          cart: [...state.cart, item].filter((item, index, upcompro) =>
            index === upcompro.findIndex((i) => (
              i.product.id === item.product.id
            ))
          )
        }
      }
    case REMOVE_FROM_CART:
      let rest = [...state.cart].filter(item => payload.productIds.indexOf(item.product.id) === -1)
      return{
        cart: rest
      }

    case PLUS_COUNTER_PRODUCT:
      const pitem = state.cart.find(pitem => pitem.product.id === payload.product.id);
        pitem.quantity = pitem.quantity + 1;
        return{
          cart: [...state.cart, pitem].filter((pitem, index, upcompro) =>
            index === upcompro.findIndex((i) => (
              i.product.id === pitem.product.id
            ))
          )
        }
      case MINUS_COUNTER_PRODUCT:
        const mitem = state.cart.find(mitem => mitem.product.id === payload.product.id);
          mitem.quantity = mitem.quantity - 1;
          return{
            cart: [...state.cart, mitem].filter((mitem, index, upcompro) =>
              index === upcompro.findIndex((i) => (
                  i.product.id === mitem.product.id
              ))
              )
          }

      case REMOVE_ALL_FROM_CART:
        return{
          cart: []
        }
    default:
      return state
  }
}

export default cartReducer;