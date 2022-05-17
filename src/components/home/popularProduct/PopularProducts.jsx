import React from "react";
import { Products } from "../../../utils/helpers";
import CardProduct from "../../../utils/CardProduct";
import style from "./PopularProducts.module.css";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
const PRODUCT_MAINS_ENDPOINT = "productMains";

export const PopularProducts = ({ color = "#f8f8f8" }) => {
  const { categories } = useSelector((state) => state.categories);
  const { data } = useFetch(PRODUCT_MAINS_ENDPOINT, null);
  return (
    <div style={{ backgroundColor: color }} className={style.body}>
      <Products
        title={"Popular products"}
        desc={
          "Sooner or later your car’s engine accessory drive belts, timing belts, and coolant hoses will dry out and crack."
        }
      />
      <div className={style.scroll}>
        {categories?.length === 0
          ? data.map((product, index) => (
              <CardProduct
                key={index}
                id={product.id}
                index={index}
                desc={product.name_en}
                img={product.imageUrl}
                price={`$${product.cost_usd}` || `${product.cost_usd} sum`}
                path={`product/${product?.id}`}
                product={product}
              />
            ))
          : categories?.productMain?.map((product, index) => (
              <CardProduct
                key={index}
                id={product.id}
                index={index}
                desc={product.name_en}
                img={product.imageUrl}
                price={`$${product.cost_usd}` || `${product.cost_usd} sum`}
                path={`product/${product?.id}`}
                product={product}
              />
            ))}
      </div>
    </div>
  );
};
