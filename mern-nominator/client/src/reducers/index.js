import { combineReducers } from 'redux';
import item from './itemReducer';
import fridge from './fridgeReducer';
import pantry from './pantryReducer';
import meal from './mealReducer';

export default combineReducers({
  pantry,
  fridge,
  item,
  meal,
});