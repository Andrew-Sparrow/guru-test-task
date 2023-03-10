import { configureStore } from '@reduxjs/toolkit';

// import { DispatchFunc, RootState } from '../types/types';
import rootReducer from './root-reducer';
import { getAxiosInstance } from '../services/api';
import { AxiosInstance } from 'axios';
// import productsReducer from './products/productsSlice';
// import { fetchProductsList } from './api-actions';

const api: AxiosInstance = getAxiosInstance();


export const store = configureStore({
  reducer: {
    products: rootReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    })
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
