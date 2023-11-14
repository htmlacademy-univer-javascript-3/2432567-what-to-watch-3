// example-2.js
import axios, { AxiosInstance } from 'axios';

const createAxios = (): AxiosInstance => axios.create({
  baseURL: 'https://13.design.pages.academy/wtw',
  timeout: 5000,
});

export default createAxios;
