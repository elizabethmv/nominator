import { combineReducers } from 'redux';
import item from './itemReducer';
import fridge from './fridgeReducer';
import pantry from './pantryReducer';

console.log(pantry);

export default combineReducers({
  pantry,
  fridge,
  item,
});