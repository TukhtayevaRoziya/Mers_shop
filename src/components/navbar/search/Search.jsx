import React from "react";
import { useState } from "react";
import useSearch from "../../../hooks/useSearch";
import style from "./Search.module.css";
import { BiLoaderAlt } from 'react-icons/bi';
import { Link } from 'react-router-dom';
const SEARCH_API_ENDPOINT = "Search";
export const Search = ({outside}) => {
  const [searchText, setSearchText] = useState('');
  const { searchedProduct, loading } = useSearch(SEARCH_API_ENDPOINT, searchText);
  return (
    <>
    <div className={style.search_block}>
      <input type="search" placeholder="Search product" value={searchText} onChange={e => setSearchText(e.target.value)}/>
      <div className={style.icon}></div>
    </div>

   {
      searchText.replace(/ /g, "").length > 0 && !outside ? <div className={style.search__results}>
        {!loading ?
          searchedProduct.map(product => 
            <Link onClick={() => setSearchText('')} to={`/product/${product.id}`}>
              <div className={style.result__product}>
                <img src={product.imageUrl} alt="" />
                <div className={style.product__infosearch}>
                <h2>{product.name_en}</h2>
                <p>${product.cost_usd}</p>
                </div>
            </div>  
            </Link>
          ) : <BiLoaderAlt className={style.loader}/>
        }
      </div>  : <></>
    }
    </>
  );
};
