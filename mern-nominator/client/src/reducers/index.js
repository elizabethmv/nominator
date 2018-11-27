import { combineReducers } from 'redux';
import item from './itemReducer';
import fridge from './fridgeReducer';
import pantry from './pantryReducer';
import meal from './mealReducer';
import recipe from './recipeReducer';

export default combineReducers({
  pantry,
  fridge,
  item,
  meal,
  recipe,
});