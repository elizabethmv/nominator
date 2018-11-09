import axios from 'axios';
import { 
  FRIDGE_ITEMS_LOADING, 
  GET_FRIDGE_ITEMS, 
  ADD_ITEM_TO_FRIDGE, 
  DELETE_ITEM_FROM_FRIDGE,
  DELETE_FRIDGE
} from './types';

import { deleteItemFromPantry } from './pantryActions';
import { deleteItemFromMeal } from './mealActions';

export const setFridgeItemsLoading  = ()  => {
  return {
    type: FRIDGE_ITEMS_LOADING
  }
}

export const getFridgeItems = (fridge) => dispatch => {
  dispatch( setFridgeItemsLoading() );
  axios.get(`/api/fridges/${fridge._id}`)
    .then( response => dispatch({
      type: GET_FRIDGE_ITEMS,
      payload: response.data 
    }))
}

export const addItemToFridge = (fridge, item) => dispatch => {
  axios
    .patch(`/api/fridges/${fridge._id}`, item)
    .then( response =>{
      dispatch({
        type: ADD_ITEM_TO_FRIDGE,
        payload: response.data
      })
      dispatch( deleteItemFromPantry(item) );
      dispatch( deleteItemFromMeal(item) );
    })
}

export const deleteItemFromFridge = item => ({
  type: DELETE_ITEM_FROM_FRIDGE,
  payload: item
})

export const deleteFridge = id => dispatch => {
  axios.delete(`/api/fridges/${id}`)
    .then( response => {
      dispatch({
        type: DELETE_FRIDGE,
        payload: id
      })
    })
}



