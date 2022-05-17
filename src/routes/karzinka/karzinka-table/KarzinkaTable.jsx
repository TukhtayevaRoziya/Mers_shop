import React from "react";
import PropTypes from 'prop-types';
import KarzinkaProducts from "../karzinka-products/KarzinkaProducts";
import classes from "./KarzinkaTable.module.css";

const KarzinkaTable = ({checkBox, cart, setDelIds, ids, allSelected}) => {
  return (
    <table className={classes.product__table}>
      <thead className={classes.table__head}>
        <tr>
          <th></th>
          <th>Товар</th>
          <th>Цена</th>
          <th>Кол-во</th>
          <th>Стоимость</th>
        </tr>
      </thead>
      <tbody className={classes.table__body}>
        {cart?.map((cartItem, index) => (
          <KarzinkaProducts
            productId={cartItem.product?.id}
            setDelIds={setDelIds}
            ids={ids}
            key={index}
            price={cartItem.product?.cost_usd}
            counters={!checkBox}
            checkBox={checkBox}
            initialAmount={cartItem.quantity}
            img={cartItem.product?.imageUrl}
            title={cartItem.product?.name_en}
            allSelected={allSelected}
          />
        ))}
      </tbody>
    </table>
  );
};

KarzinkaTable.propTypes = {
    checkBox: PropTypes.bool
};

export default KarzinkaTable;