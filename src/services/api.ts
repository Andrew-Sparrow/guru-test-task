import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';


const BACKEND_URL = 'https://6075786f0baf7c0017fa64ce.mockapi.io/products';
const REQUEST_TIMEOUT = 5000;

export const getAxiosInstance = (): AxiosInstance => {
  const axiosInstance: AxiosInstance = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  const onSuccess = (response : AxiosResponse ): AxiosResponse => {
    console.info(`[response] [${JSON.stringify(response)}]`);
    return response;
  };

  const onFail = (err: AxiosError) => Promise.reject(err);

  axiosInstance.interceptors.response.use(onSuccess, onFail);

  return axiosInstance;
};
