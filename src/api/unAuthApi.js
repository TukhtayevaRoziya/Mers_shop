import axios from 'axios';

const unAuthApiInstance = axios.create({
    baseURL: process.env.REACT_APP_API_BASEURL,
    headers: { 
        'Content-Type': 'application/json'
    }
})

export default unAuthApiInstance;