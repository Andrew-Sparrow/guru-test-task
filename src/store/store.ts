import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './root-reducer';
import { getAxiosInstance } from '../services/api';
// import { fetchProductsList } from './api-actions';

const api = getAxiosInstance();


export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    })
});

