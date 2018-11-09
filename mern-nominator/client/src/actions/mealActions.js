import axios from 'axios';
import { 
  MEALS_LOADING, 
  MEAL_ITEMS_LOADING,
  GET_MEALS, 
  GET_MEAL_ITEMS, 
  ADD_MEAL, 
  ADD_ITEM_TO_MEAL, 
  DELETE_ITEM_FROM_MEAL,
  DELETE_MEAL
} from './types';
import { deleteItemFromPantry } from './pantryActions';
import { deleteItemFromFridge } from './fridgeActions';

export const setItemsLoading  = ()  => {
  return {
    type: MEAL_ITEMS_LOADING
  }
}

export const setMealItemsLoading  = ()  => {
  return {
    type: MEALS_LOADING
  }
}

export const getMeals = () => dispatch => {
  dispatch( setItemsLoading() );
  axios.get('/api/meals')
    .then( response => {
      dispatch({
        type: GET_MEALS,
        payload: response.data
      })
      return response.data;
  })
}

export const getMealItems = (meal) => dispatch => {
  dispatch( setItemsLoading() );
  axios.get(`/api/meals/${meal._id}`)
    .then( response => dispatch({
      type: GET_MEAL_ITEMS,
      payload: response.data 
    }))
}

export const addMeal = meal => dispatch => {
  axios
    .post(`/api/meals`,meal)
    .then( response => {
      dispatch( { type: ADD_MEAL, payload: response.data } );
    })
}

export const addItemToMeal = (meal, item)  => dispatch => {
  dispatch( deleteItemFromFridge(item) );
  dispatch( deleteItemFromPantry(item) );
  dispatch( deleteItemFromMeal(item) );
  
  axios 
    .patch(`/api/meals/${meal._id}`, item)
    .then( response => {
      dispatch({ type: ADD_ITEM_TO_MEAL, payload: response.data });
    })
}

export const deleteItemFromMeal = item => ({
  type: DELETE_ITEM_FROM_MEAL,
  payload: item
})

export const deleteMeal = meal => dispatch => {
  axios 
    .delete(`/api/meals/${meal._id}`)
    .then( response => {
      dispatch({ type: DELETE_MEAL, payload: meal })
    })
}

