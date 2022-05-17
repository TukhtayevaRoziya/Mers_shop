import axios from 'axios';
import { authHeaders } from '../utils/authHeaders';

const authApiInstance = axios.create({
    baseURL: process.env.REACT_APP_API_BASEURL,
    headers: { 
        'Content-Type': 'application/json',
        'Authorization' : authHeaders(),
        "Accept": "*/*",
        "Access-Control-Allow-Origin" : "*"
    },
    withCredentials: true
})


export default authApiInstance;