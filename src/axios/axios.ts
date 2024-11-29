import axios, { AxiosInstance } from "axios";

const BASE_URL = 'http://43.204.216.93/graphql/';


export const AXIOS_INSTANCE: AxiosInstance = axios.create({
    baseURL: BASE_URL,
});