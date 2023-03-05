import { AxiosInstance } from 'axios';

import { loadProducts } from './actions';
import { APIRoute } from '../const';
import type {
  AppDispatch,
  RootState,
} from '../types/types';


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

// const fetchProducts = createAsyncThunk(
//   'products/fetchProducts',
//   async (thunkAPI) => {
//     const response = await userAPI.fetchById(userId);
//     return response.data;
//   }
// );
