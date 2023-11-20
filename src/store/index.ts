import { configureStore } from '@reduxjs/toolkit';
import createAxios from '../services/api.ts';
import reducer from './reducer.ts';

const axios = createAxios();
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: axios,
    },
  })
});

export default store;
