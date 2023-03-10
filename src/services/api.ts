import axios, {
  AxiosInstance,
} from 'axios';


const BACKEND_URL = 'https://6075786f0baf7c0017fa64ce.mockapi.io';
const REQUEST_TIMEOUT = 5000;

export const getAxiosInstance = (): AxiosInstance => {
  const axiosInstance: AxiosInstance = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  return axiosInstance;
};
