import { combineReducers } from 'redux';

// import { products } from './products/products';
import productsSlice from './products/productsSlice';

export const NameSpace = {
  PRODUCTS: 'PRODUCTS'
};

export default combineReducers({
  [NameSpace.PRODUCTS]: productsSlice,
});
