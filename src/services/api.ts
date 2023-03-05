import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';

import { CardDataType } from '../types/types';

const BACKEND_URL = 'https://6075786f0baf7c0017fa64ce.mockapi.io/products';
const REQUEST_TIMEOUT = 5000;


export const getAxiosInstance = (): AxiosInstance => {
  const axiosInstance: AxiosInstance = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  const onSuccess = ({ data }: AxiosResponse<CardDataType[]>): CardDataType[] => {
    console.info(`[response] [${JSON.stringify(data)}]`);
    return data;
  };

  const onFail = (err: AxiosError) => Promise.reject(err);

  axiosInstance.interceptors.response.use(onSuccess, onFail);

  return axiosInstance;
};
