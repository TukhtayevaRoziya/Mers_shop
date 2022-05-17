import axios from 'axios';

const unServiceAuthApiInstance = axios.create({
    baseURL: process.env.REACT_APP_API_SERVICE_BASEURL,
    headers: { 
        'Content-Type': 'application/json'
    }
})

export default unServiceAuthApiInstance;