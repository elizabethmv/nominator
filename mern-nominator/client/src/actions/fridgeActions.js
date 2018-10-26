import axios from 'axios';
import { FRIDGE_ITEMS_LOADING, GET_FRIDGE_ITEMS, ADD_ITEM_TO_FRIDGE, DELETE_ITEM_FROM_FRIDGE, DELETE_ITEM_FROM_PANTRY } from './types';

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
      });
      console.log(item)
      dispatch({ type: DELETE_ITEM_FROM_PANTRY, payload: item });
    })
}

export const deleteItemFromFridge = item => ({
  type: DELETE_ITEM_FROM_FRIDGE,
  payload: item
})



