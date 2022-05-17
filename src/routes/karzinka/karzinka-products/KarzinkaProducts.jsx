import React from 'react';
import classes from './KarzinkaProducts.module.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { increaseQuantity, decreaseQuantity } from '../../../redux/actions/cartActions';

const KarzinkaProducts = ({img, title, price, counters, initialAmount, checkBox, productId, setDelIds, ids, allSelected}) => {
    const dispatch = useDispatch();
    const handleCheckedProduct = (index) => {
        setDelIds([...ids, index])
    }
    const handleUnCheckedProduct = (index) => {
        setDelIds(ids.filter(i => i !== index));
    }
    return (
        <tr className={classes.product__item}>
            <td  className={classes.product__cell}>{!checkBox && <div className={classes.cell__check}><input type="checkbox" checked={allSelected ? allSelected : null} onChange={(e) => e.target.checked ? handleCheckedProduct(productId) : handleUnCheckedProduct(productId)}/></div>}</td>
            <td style={checkBox ? {paddingLeft: "1e0px"} : null} className={classes.product__cell + ' ' + classes.product__block}> <div><img className={classes.product__cell__image} src={img} alt=""/> <p>{title}</p></div> </td>
            <td className={classes.product__cell}><div className={classes.cell__info}>${price}</div></td>
            <td className={classes.product__cell}> <div className={classes.cell__counter}>{counters && <button onClick={initialAmount > 1 ? () => dispatch(decreaseQuantity({id: productId})) : () => {}}>-</button>} {initialAmount} {counters && <button onClick={() => dispatch(increaseQuantity({id: productId}))}>+</button>}</div></td>
            <td className={classes.product__cell}><div className={classes.cell__info}>${price * initialAmount}</div></td>
        </tr>
    )
}

KarzinkaProducts.propTypes = {
    img: PropTypes.string || PropTypes.element,
    title: PropTypes.string,
    initialAmount: PropTypes.number,
    counters: PropTypes.bool,
    price: PropTypes.number,
    index: PropTypes.number
};

export default KarzinkaProducts
