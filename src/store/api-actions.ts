import { AxiosInstance } from 'axios';

import { loadProducts } from './actions';
import { APIRoute } from '../const';
import type {
  AppDispatch,
  RootState,
  // ProductDataType
} from '../types/types';

export const fetchCommentsList = () => (dispatch: AppDispatch, _getState: RootState, api: AxiosInstance) => (
  api.get(`${APIRoute.PRODUCTS}`)
    .then((products) => {
      dispatch(loadProducts(products));
    })
    .catch((err) => {
      // do nothing.
    })
);
