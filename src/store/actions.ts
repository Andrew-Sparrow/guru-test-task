import { AxiosResponse } from 'axios';

import { createAction } from '@reduxjs/toolkit';

import { ProductDataType } from '../types/types';

export const ActionType = {
  LOAD_PRODUCTS: 'products/loadProducts',
};

export const loadProducts = createAction(
  ActionType.LOAD_PRODUCTS,
  (products: ProductDataType[] | AxiosResponse<ProductDataType[]>) => ({ payload: products })
);
