import React from 'react';
import { connect, useSelector } from 'react-redux';
import classes from './Liked.module.css';
import {remove__liked__oneproduct } from '../../redux/actions/likeActions';
import { addToCart } from "../../redux/actions/cartActions";

const Liked = (props) => {
  const {liked} = useSelector(state => state.liked)
  console.log(liked)

  const removeFromLiked = (product) => {
    props.remove__liked__oneproduct(product?.id)
  }

  const handleAddToCart = (product) => {
    props.addToCart(product)
  }
  return (
    <div className={classes.liked}>
      {
        liked?.map(({product}) => 
            <div className={classes.likedproduct}>
              <img src={product?.imageUrl} alt="" />
              <div className={classes.likedproduct__info}>
              <h1>{product?.name_en}</h1>
              <h2>{product?.cost_usd}</h2>
              <p>{product?.description_en}</p>
                <p style={{color: "red", cursor: "pointer"}} onClick={() => removeFromLiked(props.product)}>Remove this from liked </p>
                <button onClick={() => handleAddToCart(product)}>Click</button>
              </div>
              
            </div>
        )
      }
    </div>
  )
}


export default connect(null, {remove__liked__oneproduct, addToCart})(Liked);