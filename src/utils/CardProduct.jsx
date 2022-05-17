import style from './Helpers.module.css';
import { FiHeart, FiShoppingBag } from "react-icons/fi";
import { BsSuitHeartFill } from 'react-icons/bs';
import { like__products, remove__liked__oneproduct } from "../redux/actions/likeActions";
import { Link } from 'react-router-dom';
import { connect, useSelector } from 'react-redux';

const CardProduct = (props) => {
  const {liked} = useSelector(state => state.liked);
  const addToLiked = (product) => {
    props.like__products(product);
  }

  const removeFromLiked = (product) => {
    props.remove__liked__oneproduct(product?.id)
    console.log(product?.id)
  }
  return (
    <div className={style.CardProduct}>
      <div className={style.btnGroup}>
        <Link to={props.path}>
          {" "}
          <FiShoppingBag/>
        </Link>
        {liked?.map(i => i.product.id).includes(props.id) ?
       <BsSuitHeartFill style={{color: "red"}} onClick={() => removeFromLiked(props.product)}/> :   <FiHeart onClick={() => addToLiked(props.product)}/> 
        }
      </div>
      <div className={style.cardImg}>
        <Link to={props.path}>
          <img src={props.img} alt="" />
        </Link>
      </div>
      <div className={style.stars}>
        &#x2605; &#x2605; &#x2605; &#x2605; &#x2606;
      </div>
      <div>
        <h1>{props.desc}</h1>
      </div>
      <div>
        <h2>{props.price}</h2>
      </div>
    </div>
  );
};

export default connect(null, {like__products, remove__liked__oneproduct})(CardProduct)