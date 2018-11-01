import axios from 'axios';
import { 
  MEALS_LOADING, 
  GET_MEALS, 
  MEAL_ITEMS_LOADING, 
  GET_MEAL_ITEMS, 
  ADD_ITEM_TO_MEAL, 
  DELETE_ITEM_FROM_MEAL
} from './types';
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
    .then( response => {
      dispatch({
        type: GET_MEALS,
        payload: response.data
      })
      return response.data;
  })
  // .then( meals => {
  //   Promise.all(meals.map( (meal) => {
  //     axios.get(`/api/meals/${meal._id}`)
  //       .then( items => {
  //         const mealWithItems = {items:items.data, ...meal};
  //         console.log(mealWithItems);
  //         dispatch({
  //           type: GET_MEALS,
  //           payload: mealWithItems
  //         })
          
  //         return mealWithItems
  //       })
  //   }))
  // })
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
    .patch(`/api/meals/${meal._id}`, item)
    .then( response => {
      console.log('addItemToMeal',response.data);
      dispatch({ type: ADD_ITEM_TO_MEAL, payload: response.data })
      dispatch( deleteItemFromFridge(item) );
      dispatch( deleteItemFromPantry(item) );
    })
}

export const deleteItemFromMeal = (meal, item) => ({
  type: DELETE_ITEM_FROM_MEAL,
  payload: {meal, item}
})

