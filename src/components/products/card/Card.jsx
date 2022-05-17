import React, { useState } from "react";
import { NavLink, useParams, Link } from 'react-router-dom';
import useFetch from "../../../hooks/useFetch";
import style from './Card.module.css';
import { FiShoppingCart, FiStar } from 'react-icons/fi';
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/actions/cartActions";
const CARD_MAINS_ENDPOINT_WITHID = "productMains";

export const Card = ({sortBy}) => {
  const dispatch = useDispatch();
  const params = useParams();
  const [selectedImage, setSelectedImage] = useState(0);
  const { data } = useFetch(`${CARD_MAINS_ENDPOINT_WITHID}/${+params.id}`, null)

  const handleQuantity = (e) => {
    console.log(e.target.value)
  }
  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  }

  return (
    <div className={style.body}>
      <div className={style.block + ' ' + style.block1}>
        <img src={data.allImageUrl?.split(",")[selectedImage]} alt="" />
        <div className={style.pctGroup + ' ' + style.sm_pct}>
            {
              data && data.allImageUrl?.split(",").map((productImage, index) => 
                <img key={index} src={`${productImage.replace(" ", "")}`} alt="" />
              )
            }
          </div>
        <div className={style.info}>
          <h2>{sortBy}</h2>
          <h1>{data?.name_en}</h1>
          <div className={style.stars}>
            {data?.quality &&
            new Array(Math.floor(data.quality / 2)).fill().map((_, index) => 
              <FiStar key={index}/>
            )
          }</div>
          <p>{data?.description_en}</p>
          <select onChange={handleQuantity}>
              {
                new Array(5).fill().map((_, index) =>
                  <option key={index} value={index+1}>{index+1}</option>
                )
              }
          </select>
          <NavLink to={'/karzinka'} className={style.btn + ' ' + style.sm_btn}>Add to bag</NavLink>

        </div>
      </div> 
      <div className={style.block + ' ' + style.block2}>
          <div className={style.pctGroup + ' ' + style.lg_pct}>
          {
              data && data.allImageUrl?.split(",").map((productImage, index) => 
                <img style={index === selectedImage ? {border: "2px solid darkblue"} : {border: "2px solid transparent"}} key={index} className={style.image_gallery} src={`${productImage.replace(" ", "")}`}  onClick={() => setSelectedImage(index)} alt="" />
              )
            }
          </div>
          <button onClick={() => handleAddToCart(data)}  className={style.btn  + ' ' + style.lg_btn}>Add to bag</button>
          <Link className={style.checkout__btn} to="/karzinka">Checkout <FiShoppingCart/> </Link>

      </div>
    </div>
  );
};
