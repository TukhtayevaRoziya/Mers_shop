import { useState, useEffect } from "react";
import unServiceAuthApi from "../api/serviceApiUnauth";

const useFetch = (endpoint, params) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const abortionRequest = new AbortController();
    function getData() {
      unServiceAuthApi
        .get(endpoint, { signal: abortionRequest.signal }, { params: params })
        .then((response) => {
          setData(response.data);
        })
        .catch((err) => console.log(err));
    }
    getData();
    return () => abortionRequest.abort();
  }, [endpoint, params]);
  return { data };
};

export default useFetch;
