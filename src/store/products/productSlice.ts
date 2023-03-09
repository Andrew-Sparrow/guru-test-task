import { createSlice, createAsyncThunk, AnyAction, PayloadAction, Action } from '@reduxjs/toolkit';


import type { ProductDataType } from '../../types/types';
import { ActionType } from '../actions';
import { getAxiosInstance } from '../../services/api';
import { APIRoute } from '../../const';


type ProductStateType = {
  list: ProductDataType[];
  isLoading: boolean;
  error: string | null;
}

interface RejectedAction extends Action {
  error: Error;
}

const initialState: ProductStateType = {
  list: [],
  isLoading: false,
  error: null
};

const api = getAxiosInstance();

function isError(action: AnyAction): action is RejectedAction {
  return action.type.endsWith('rejected');
}

export const fetchProductsList = createAsyncThunk<ProductDataType[], undefined, { rejectValue: string }>(
  ActionType.LOAD_PRODUCTS,
  async function (_, { rejectWithValue }) {
    const response = await api.get(APIRoute.PRODUCTS);

    if (response.statusText !== 'OK') {
      return rejectWithValue('Server Error');
    }

    return response;
  }
);


const productSlice = createSlice({
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
      .addMatcher(isError, (state, action: PayloadAction<string>) => {
        state.error = action.payload;
        state.isLoading = false;
      });
  }
});

export default productSlice.reducer;
