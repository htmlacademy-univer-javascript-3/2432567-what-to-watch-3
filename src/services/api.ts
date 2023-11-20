import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { getToken } from './token';

const createAxios = (): AxiosInstance => {
  const ax = axios.create({
    baseURL: 'https://13.design.pages.academy/wtw',
    timeout: 5000
  });

  ax.interceptors.request.use((config: AxiosRequestConfig) => {
    const token = getToken();

    if (token && config.headers) {
      config.headers['x-token'] = token;
    }

    return config;
  });

  return ax;
};

export default createAxios;
