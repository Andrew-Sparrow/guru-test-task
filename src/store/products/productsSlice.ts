import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  Action
} from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';


import { ProductDataType } from '../../types/types';
import { ActionType } from '../actions';
import { getAxiosInstance } from '../../services/api';

type ProductsStateType = {
  list: ProductDataType[] | AxiosResponse<ProductDataType[]>;
  isLoading: boolean;
  error: string | null;
};

const initialState: ProductsStateType = {
  list: [],
  isLoading: true,
  error: null
};

function isError(action: Action<string>) {
  return action.type.endsWith('rejected');
}

const api = getAxiosInstance();

export const fetchProductsList = createAsyncThunk(
  ActionType.LOAD_PRODUCTS,
  async (_, { rejectWithValue }) => {
    const response = await api.get('/products');

    if (response.statusText !== 'OK') {
      return rejectWithValue('Server Error!');
    }

    return response;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsList.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProductsList.fulfilled, (state, action) => {
        state.list = action.payload;
        state.isLoading = false;
      })
      .addMatcher(
        isError,
        (state, action: PayloadAction<string>) => {
          state.error = action.payload;
          state.isLoading = false;
        });
  }
});

export default productsSlice.reducer;
