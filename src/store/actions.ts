import { createAction } from '@reduxjs/toolkit';

import { CardDataType } from '../types/types';

export const ActionType = {
  LOAD_PLACES: 'places/loadPlaces',
};

export const loadProducts = createAction(
  ActionType.LOAD_PLACES,
  (products: CardDataType[]) => ({payload: products})
);
