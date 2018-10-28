import axios from 'axios';
import { MEALS_LOADING, GET_MEALS, MEAL_ITEMS_LOADING, GET_MEAL_ITEMS, ADD_ITEM_TO_MEAL, DELETE_ITEM_FROM_MEAL} from './types';
import { deleteItemFromPantry } from './pantryActions';
import { deleteItemFromFridge } from './fridgeActions';

export const setItemsLoading  = ()  => {
  return {
    type: MEALS_LOADING
  }
}

export const getMeals = () => dispatch => {
  dispatch( setItemsLoading() );
  axios.get('/api/meals')
    .then( response => dispatch({
      type: GET_MEALS,
      payload: response.data 
    }))
}

export const getMealItems = (meal) => dispatch => {
  dispatch( setItemsLoading() );
  axios.get(`/api/meals/${meal._id}`)
    .then( response => dispatch({
      type: GET_MEAL_ITEMS,
      payload: response.data 
    }))
}

export const addItemToMeal = (meal, item)  => dispatch => {
  axios 
    .post(`/api/meals/${meal._id}`, item)
    .then( response => {
      dispatch({ type: ADD_ITEM_TO_MEAL, payload: response.data })
      dispatch( deleteItemFromFridge(item) );
      dispatch( deleteItemFromPantry(item) );
    })
}

export const deleteItemFromMeal = (meal, item) => ({
  type: DELETE_ITEM_FROM_MEAL,
  payload: {meal, item}
})

