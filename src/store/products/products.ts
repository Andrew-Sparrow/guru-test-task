import { createReducer } from '@reduxjs/toolkit';
import { CardDataType } from '../../types/types';

import {
  loadProducts
} from '../actions';

type StateType = {
  products: CardDataType[];
  isLoading: boolean;
};

const initialState: StateType = {
  products: [],
  isLoading: true,
};


const products = createReducer(initialState, (builder) => {
  builder
    .addCase(loadProducts, (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
    });
});

export { products };
