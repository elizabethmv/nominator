import { 
  ITEMS_LOADING, 
  GET_SHOPPINGLIST_ITEMS, 
  ADD_ITEM_SHOPPING_LIST, 
  DELETE_ITEM, 
} from './types';

export const setItemsLoading  = ()  => ({ type: ITEMS_LOADING })

export const getShoppingListsItems = () => dispatch => dispatch({type: GET_SHOPPINGLIST_ITEMS})

export const addItemToShoppingList = item  => dispatch =>{
  // console.log(item);
  dispatch({  type: ADD_ITEM_SHOPPING_LIST, payload: item });
} 

export const deleteItem = item => dispatch => dispatch({ type: DELETE_ITEM, payload: item })
