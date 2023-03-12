import { combineReducers } from 'redux';

import productsSlice from './products/productsSlice';

export const NameSpace = {
  PRODUCTS: 'PRODUCTS'
};

export default combineReducers({
  [NameSpace.PRODUCTS]: productsSlice,
});
