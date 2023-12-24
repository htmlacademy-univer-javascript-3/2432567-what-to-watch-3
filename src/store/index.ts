import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer.ts';
import { redirect } from './middleware/redirect.ts';
import createAxios from '../services/api.ts';

const axios = createAxios();
const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument: axios,
    },
  }).concat(redirect)
});

export default store;
