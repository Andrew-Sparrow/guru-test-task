import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import { DispatchFunc, RootState } from '../types/types';
import rootReducer from './root-reducer';
import { getAxiosInstance } from '../services/api';
// import { fetchProductsList } from './api-actions';

const api = getAxiosInstance();


export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    })
});


export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
