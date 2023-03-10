import { createSlice, PayloadAction, createAsyncThunk, AnyAction } from '@reduxjs/toolkit';
import {
  AxiosAdapter,
  AxiosInstance,
  AxiosInterceptorManager,
  AxiosInterceptorOptions,
  AxiosProxyConfig,
  // Axios,
  // AxiosInstance,
  // AxiosPromise,
  AxiosResponse
} from 'axios';

import { ActionType } from '../actions';
import { ProductDataType } from '../../types/types';
import { APIRoute } from '../../const';

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

// interface RejectedAction extends Action {
//   error: Error;
// }

// function isError(action: AnyAction): action is RejectedAction {
//   return action.type.endsWith('rejected');
// }

function isError(action: AnyAction) {
  return action.type.endsWith('rejected');
}

// type ExtraType = AxiosInstance;


export const fetchProductsList = createAsyncThunk < ProductDataType[], undefined, { extra: AxiosInstance }>(
  ActionType.LOAD_PRODUCTS,
  async (_, thunkAPI) => {
    // console.log(thunkAPI.extra);
    const response = await thunkAPI.extra.get(`${APIRoute.PRODUCTS}`);
    console.log(response);
    return response;
  }
);

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    // loadProducts(state, action: PayloadAction<ProductDataType[]>) {
    //   state.list = action.payload;
    //   state.isLoading = false;
    // }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsList.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProductsList.fulfilled, (state, action: PayloadAction<ProductDataType[]>) => {
        state.list = action.payload;
        state.isLoading = false;
        state.error = null;
      })
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  }
});

export default productsSlice.reducer;
