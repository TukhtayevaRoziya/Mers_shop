import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import classes from './Karzinka.module.css';

import visa from '../../assets/karzinka/visa.png';
import masterCard from '../../assets/karzinka/MasterCard.png';
import paypal from '../../assets/karzinka/PayPal.png';


import KarzinkaProcess from '../../components/UI/karzinka-process/KarzinkaProcess';
import KarzinkaNavbar from './karzinka-navbar/KarzinkaNavbar';
import KarzinkaFooter from './karzinka-footer/KarzinkaFooter';
import KarzinkaRecommendations from './karzinka-recommendations/KarzinkaRecommendations';
import KarzinkaMethods from './karzinka-methods/KarzinkaMethods'
import KarzinkaTable from './karzinka-table/KarzinkaTable'
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../redux/actions/cartActions';

const Karzinka = () => {
    const [delIds, setDelIds] = useState([]);
    const dispatch = useDispatch();
    const {cart} = useSelector(state => state.cart);
    const link_style={
        textDecoration :"none",
        color: "#fff",
        fontSize: "20px",
        fontWeight: 700,
        fontFamily: "var(--main-font-family)",
        display: "flex"
    }

    const handleRemoveBasketElements = () => {
       let all = cart.map((item) => item.product.id)
        if(allSelected){
            dispatch(removeFromCart(all))
        }
        else{
            dispatch(removeFromCart(delIds))
        }
    }
    const subTotal = cart?.map((item) => item.product?.cost_usd * item?.quantity).reduce((acc, inc) => acc + inc, 0)
    const items = cart?.map((item) => item.quantity).reduce((acc, inc) => acc + inc, 0);
    const [allSelected, setAllSelected ] = useState(false);
    return (
        <div>
            <KarzinkaNavbar title="ewbfejwkb" JSXcomponent={<Link style={link_style}  to='/pokupka'>Продолжить покупки <FiChevronRight/></Link>}/>
            <div className={classes.main__container}>
                <KarzinkaProcess active={1} activeColor="#000"/>
                <div className={classes.container__checkout}>
                    <div className={classes.container__products}>
                        <div className={classes.container__count}>
                            <h1 className={classes.count__indicator}>Корзина ({items})</h1>
                            <ul className={classes.count__collection}>
                                <li ><input type="checkbox" onChange={(e) => setAllSelected(e.target.checked)}/>Выбрать все</li>
                                <li>Move to wishlist</li>
                                <li onClick={handleRemoveBasketElements}>Remove</li>
                            </ul>
                        </div>
                        <KarzinkaTable setDelIds={setDelIds} ids={delIds} cart={cart} noChecBox={false} allSelected={allSelected}/>
                    </div>
                    <div className={classes.container__payment}>
                       <KarzinkaMethods btn={false} items={items} subTotal={subTotal}/>
                        <p>Мы принимаем:</p>
                        <ul className={classes.collection_payment}>
                            <li><img src={masterCard} alt="" /></li>
                            <li><img src={visa} alt="" /></li>
                            <li><img src={paypal} alt="" /></li>
                        </ul>
                        <ul className={classes.collection__intructions}>
                            <li>Безопасность и различные способы оплаты</li>
                            <li>Быстрее, Профессиональное разрешение споров</li>
                        </ul>
                    </div>
                </div>
                <h1 className={classes.count__indicator} style={{marginTop: "70px"}}>Вам также может понравиться</h1>
               <KarzinkaRecommendations/>
            </div>
            <KarzinkaFooter/>
        </div>
    )
}

export default Karzinka
