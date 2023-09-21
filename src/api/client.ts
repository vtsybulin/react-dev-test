import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';

import {API_TOKEN, API_URL as baseURL} from '^configs/environment';

const createBaseClient = (config?: AxiosRequestConfig): AxiosInstance => axios.create({
  baseURL,
  headers: {
    Authorization: API_TOKEN,
  },
  ...config,
});

export default createBaseClient();

