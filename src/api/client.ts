import axios, { AxiosRequestConfig, AxiosInstance } from 'axios';

import { API_URL as baseURL } from '^configs/environment';

const createBaseClient = (config?: AxiosRequestConfig): AxiosInstance => axios.create({
  baseURL,
  headers: {
    Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjU2MCwiZXhwIjoxNzI2NTY3MTc5LCJ0eXBlIjoiYWNjZXNzIiwidGltZXN0YW1wIjoxNjk1MDMxMTc5fQ.0y7NtuVDCvcPvmWbliMs1q02sov2oFC6u2Hi6H4A2W4`,
  },
  ...config,
});

export default createBaseClient();

