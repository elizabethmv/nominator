import { combineReducers } from 'redux';
import item from './itemReducer';
import fridge from './fridgeReducer';

console.log(fridge);

export default combineReducers({
  fridge,
  item,
  
});