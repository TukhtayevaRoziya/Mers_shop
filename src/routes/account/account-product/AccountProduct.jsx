import React from "react";
import { AiFillStar } from "react-icons/ai";
import { FiTrash2, FiShoppingBag } from "react-icons/fi";
import PropTypes from "prop-types";
import { Link, useRouteMatch } from "react-router-dom";
import classes from "./AccountProduct.module.css";

const AccountProduct = ({ data, tableHeaders, details }) => {
  const { url } = useRouteMatch();
  return (
    <div className={classes.account__product}>
      <table className={classes.account__table}>
        <thead>
          <tr>
            {tableHeaders &&
              tableHeaders.map((table__head, index) => (
                <th className={classes.product__instructor} key={index}>
                  {table__head}
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((table__item) => (
            <tr key={table__item.id} className={classes.product__item}>
              <td className={classes.product__datacell}>
                <div className={classes.product__wrapper}>
                  <img src={table__item.productImage} alt="" />
                  <div className={classes.product__info}>
                    <p className={classes.product__title}>
                      {table__item.productTitle}
                    </p>
                    <div className={classes.product__ratings}>
                      {!tableHeaders ? (
                        new Array(table__item.productRatings)
                          .fill()
                          .map((_, index) => <AiFillStar key={index} />)
                      ) : (
                        <></>
                      )}
                    </div>
                    <div className={classes.product__cost}>
                      ${table__item.productCost}{" "}
                      {tableHeaders && !details ? (
                        <p style={{ paddingLeft: "20px", fontWeight: "300" }}>
                          x{table__item.count}
                        </p>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </div>
              </td>
              {tableHeaders ? (
                <td className={classes.product__datacell}>
                  <div className={classes.product__option}>
                    {!details ? (
                      <p className={classes.product__count}>
                        {" "}
                        $ {table__item.productCount * table__item.productCost}
                      </p>
                    ) : (
                      <p>{table__item.id}</p>
                    )}
                  </div>
                </td>
              ) : (
                <></>
              )}
              <td className={classes.product__datacell}>
                <div className={classes.product__option}>
                  {!tableHeaders ? (
                    <>
                      <FiTrash2 /> <p> Удалить</p>
                    </>
                  ) : !details ? (
                    <div className={classes.product__details}>
                      {" "}
                      <p>ожидается платеж</p>{" "}
                      <Link to={`${url}/details/${table__item.id}`}>
                        Деталь заказа
                      </Link>{" "}
                    </div>
                  ) : (
                    <p>x{table__item.productCount}</p>
                  )}
                </div>
              </td>
              <td className={classes.product__datacell}>
                <div className={classes.product__option}>
                  {!tableHeaders ? (
                    <>
                      <FiShoppingBag /> <p> Добавить в корзину</p>
                    </>
                  ) : !details ? (
                    <>
                      {" "}
                      <FiTrash2 /> <p> Удалить</p>
                    </>
                  ) : (
                    <p>${table__item.productCost}</p>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

AccountProduct.propTypes = {
  data: PropTypes.array,
  tableHeaders: PropTypes.array,
  details: PropTypes.bool,
};

export default AccountProduct;
