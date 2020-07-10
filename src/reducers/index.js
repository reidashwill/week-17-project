import productListReducer from './product-list-reducer'
import formVisibleReducer from './form-visible-reducer'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  productList: productListReducer
});

export default rootReducer;