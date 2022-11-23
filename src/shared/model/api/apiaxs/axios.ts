import axios, { AxiosRequestConfig } from 'axios';

const config: AxiosRequestConfig = {
    headers: {
        "Accept": 'application/json',
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    },
    baseURL: 'https://github.com/'
}

const instance = axios.create(config)


export default instance