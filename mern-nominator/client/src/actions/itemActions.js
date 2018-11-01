import axios from 'axios';
import { 
  ITEMS_LOADING, 
  GET_ITEMS, 
  ADD_ITEM, 
  DELETE_ITEM, 
} from './types';
import { addItemToMeal } from './mealActions';

export const setItemsLoading  = ()  => {
  return {
    type: ITEMS_LOADING
  }
}

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
    .then( response => {

      const newItem = response.data;
      dispatch({
        type: ADD_ITEM,
         payload: newItem 
      })  

      if(newItem.fridge){
        
      }
      if(newItem.pantry){
        
      }
      if(newItem.meal){
        console.log('addItem meal id',newItem.meal)
        dispatch( addItemToMeal( {_id: newItem.meal }, newItem ) );
      }
      
    })
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
