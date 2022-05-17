import { useState, useEffect } from 'react';
import axios from "../api/unAuthApi";

const useSearch = (url, searchText) => {
  const [searchedProduct, setSearchedProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios.get(url, {params: {searchText}})
    .then(response => {
      setSearchedProduct(response.data)
      if(response && response.data.length < 1){
        setLoading(false)
      }
      else{
        setLoading(false)
      }
    })
    .catch(err => {
      console.log(err)
      setLoading(false)
    })
  }, [searchText, url])

  return {searchedProduct, loading}
}

export default useSearch
