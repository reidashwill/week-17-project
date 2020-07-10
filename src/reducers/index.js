import productListReducer from './product-list-reducer'
import formVisibleReducer from './form-visible-reducer'
import editingReducer from './editingReducer'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  productList: productListReducer,
  editing: editingReducer
});

export default rootReducer;