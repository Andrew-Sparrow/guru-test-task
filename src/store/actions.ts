import { AxiosResponse } from 'axios';

import { createAction } from '@reduxjs/toolkit';

import { ProductDataType } from '../types/types';

export const ActionType = {
  LOAD_PLACES: 'places/loadPlaces',
};

export const loadProducts = createAction(
  ActionType.LOAD_PLACES,
  (products: ProductDataType[] | AxiosResponse<ProductDataType[]>) => ({ payload: products })
);
