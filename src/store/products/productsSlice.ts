import {
  createSlice,
  createAsyncThunk,
  PayloadAction,
  Action
} from '@reduxjs/toolkit';
import {
  AxiosError,
  // AxiosResponse
} from 'axios';


import { ProductDataType } from '../../types/types';
import { ActionType } from '../actions';
import { getAxiosInstance } from '../../services/api';

type ProductsStateType = {
  // list: ProductDataType[] | AxiosResponse<ProductDataType[]>;
  list: ProductDataType[] ;
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

export const fetchProductsList = createAsyncThunk<ProductDataType[], undefined>(
  ActionType.LOAD_PRODUCTS,
  async (_, { rejectWithValue }) => {
    try {
      const response = await api.get('/products');
      return response.data as ProductDataType[];
    } catch (error) {
      return rejectWithValue(error);
    }
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
        (state, action: PayloadAction<AxiosError>) => {
          state.error = action.payload.message;
          state.isLoading = false;
        });
  }
});

export default productsSlice.reducer;
