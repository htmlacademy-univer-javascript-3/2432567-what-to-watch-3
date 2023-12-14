import { configureStore } from '@reduxjs/toolkit';
import createAxios from '../services/api.ts';
import reducer from './reducer.ts';
import { redirect } from './middleware/redirect.ts';

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
