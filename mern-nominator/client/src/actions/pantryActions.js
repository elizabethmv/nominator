import axios from 'axios';
import { PANTRY_ITEMS_LOADING, GET_PANTRY_ITEMS, ADD_ITEM_TO_PANTRY, DELETE_ITEM_FROM_PANTRY, DELETE_ITEM_FROM_FRIDGE } from './types';

export const setPantryItemsLoading  = ()  => {
  return {
    type: PANTRY_ITEMS_LOADING
  }
}

export const getPantryItems = (pantry) => dispatch => {
  dispatch( setPantryItemsLoading() );
  axios.get(`/api/pantries/${pantry._id}`)
    .then( response => dispatch({
      type: GET_PANTRY_ITEMS,
      payload: response.data 
    }))
}

export const addItemToPantry = (pantry, item) => dispatch => {
  axios
    .patch(`/api/pantries/${pantry._id}`, item)
    .then( response => {
      dispatch({
        type: ADD_ITEM_TO_PANTRY,
        payload: response.data
      });
      dispatch({
        type: DELETE_ITEM_FROM_FRIDGE,
        payload: item
      });
    })
}

export const deleteItemFromPantry = item => ({
  type: DELETE_ITEM_FROM_PANTRY,
  payload: item
})



