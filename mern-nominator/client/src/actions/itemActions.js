import axios from 'axios';
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING, GET_FRIDGE_ITEMS, GET_PANTRY_ITEMS, GET_MEALS } from './types';

export const getItems = () => dispatch => {
  dispatch( setItemsLoading() );
  axios.get('/api/items')
    .then( response => dispatch({
      type: GET_ITEMS,
      payload: response.data  
    }))
}

export const addItem = item  => dispatch => {
  axios 
    .post('/api/items', item)
    .then( response => 
      dispatch({
        type: ADD_ITEM,
         payload: response.data 
      })  
    )
}

export const deleteItem = id => dispatch => {
  axios.delete(`/api/items/${id}`)
    .then( response => {
      dispatch({
        type: DELETE_ITEM,
        payload: id
      })
    })
}
 
export const setItemsLoading  = ()  => {
  return {
    type: ITEMS_LOADING
  }
}

export const getFridgeItems = (fridge) => dispatch => {
  dispatch( setItemsLoading() );
  axios.get(`/api/fridges/${fridge._id}`)
    .then( response => dispatch({
      type: GET_FRIDGE_ITEMS,
      payload: response.data 
    }))
}

export const getPantryItems = (pantry) => dispatch => {
  dispatch( setItemsLoading() );
  axios.get(`/api/pantries/${pantry._id}`)
    .then( response => dispatch({
      type: GET_PANTRY_ITEMS,
      payload: response.data 
    }))
}

export const getMeals = () => dispatch => {
  dispatch( setItemsLoading() );
  axios.get('/api/meals')
    .then( response => dispatch({
      type: GET_MEALS,
      payload: response.data 
    }))
}