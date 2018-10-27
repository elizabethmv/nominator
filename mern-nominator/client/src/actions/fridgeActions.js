import axios from 'axios';
// import { deleteItemFromPantry} from './pantryActions';
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
      // deleteItemFromPantry({ _id: "5bccf0ada1ab9f13df595d27" }, item);
      
      dispatch({
            type: ADD_ITEM_TO_FRIDGE,
            payload: response.data
          })
     
      dispatch({ type: DELETE_ITEM_FROM_PANTRY, payload: item })
    })
}

export const deleteItemFromFridge = item => ({
  type: DELETE_ITEM_FROM_FRIDGE,
  payload: item
})



