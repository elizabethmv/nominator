import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING, GET_FRIDGE_ITEMS, GET_PANTRY_ITEMS, GET_MEALS } from '../actions/types';

const initialState = {
  items: [],
  fridgeItems: [],
  pantryItems: [],
  meals: [],
  loading: false, 
}
export default function(state = initialState, action) {
  switch(action.type) {
    case  GET_ITEMS:
      return {
        ...state,
        items: action.payload,
        loading: false 
      }
    case  DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item._id !== action.payload)
      }
    case  ADD_ITEM:
      return {
        ...state,
        items: [action.payload, ...state.items]
      }
    case  ITEMS_LOADING:
      return {
        ...state,
         loading: true
      }
    case  GET_FRIDGE_ITEMS:
      return {
        ...state,
        fridgeItems: action.payload,
        loading: false 
      }
    case  GET_PANTRY_ITEMS:
      return {
        ...state,
        pantryItems: action.payload,
        loading: false 
      }
    case  GET_MEALS:
      return {
        ...state,
        meals: action.payload,
        loading: false 
      }
    default:
      return state;
  }
}