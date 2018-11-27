import { GET_SHOPPINGLIST_ITEMS, ADD_ITEM_SHOPPING_LIST, DELETE_ITEM, ITEMS_LOADING } from '../actions/types';

const initialState = {
  items: [],
  loading: false, 
}

export default function(state = initialState, action) {
  switch(action.type) {
    case  ITEMS_LOADING:
      return {
        ...state,
         loading: true
      }
    case  GET_SHOPPINGLIST_ITEMS:
      return {
        ...state,
        items: [...state.items],
        loading: false 
      }
    case  ADD_ITEM_SHOPPING_LIST:
      return {
        ...state,
        items: [action.payload, ...state.items]
      }
    case  DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item._id !== action.payload._id)
      }
    default:
      return state;
  }
}
