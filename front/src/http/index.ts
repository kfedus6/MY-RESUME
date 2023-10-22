import axios, { AxiosInstance } from "axios";

const $host: AxiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:5000/portfolio'
})

export { $host }