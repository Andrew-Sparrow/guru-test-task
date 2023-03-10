// import { createAsyncThunk } from '@reduxjs/toolkit';

import { AxiosInstance } from 'axios';

import { loadProducts } from './actions';
import { APIRoute } from '../const';

import { AppDispatch, RootState } from './store';

// import { ActionType } from './actions';


export const fetchProductsList = () => (
  dispatch: AppDispatch,
  _getState: RootState,
  api: AxiosInstance
) => (
  api.get(`${APIRoute.PRODUCTS}`)
    .then((products) => {
      dispatch(loadProducts(products));
    })
    .catch((err) => {
      // do nothing.
    })
);

// export const fetchProductsList = createAsyncThunk(
//   ActionType.LOAD_PRODUCTS,
//   async (thunkAPI) => {
//     console.log(thunkAPI);
//     const response = await thunkAPI.extraArgument.get(`${APIRoute.PRODUCTS}`);
//     return response;
//   }
// );


