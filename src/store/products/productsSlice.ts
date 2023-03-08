import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';


import { ProductDataType } from '../../types/types';

type ProductsStateType = {
  list: ProductDataType[] | AxiosResponse<ProductDataType[]>;
  isLoading: boolean;
};

const initialState: ProductsStateType = {
  list: [],
  isLoading: true
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    loadProducts(state, action: PayloadAction<ProductDataType[]>) {
      state.list = action.payload;
      state.isLoading = false;
    }
  }
});

export const { loadProducts } = productsSlice.actions;

export default productsSlice.reducer;
