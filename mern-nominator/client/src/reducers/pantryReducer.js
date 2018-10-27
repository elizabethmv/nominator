import { PANTRY_ITEMS_LOADING, GET_PANTRY_ITEMS, ADD_ITEM_TO_PANTRY, DELETE_ITEM_FROM_PANTRY } from '../actions/types';

const initialState = {
  pantryItems: [],
  loading: false, 
}
export default function(state = initialState, action) {
  switch(action.type) {
    case PANTRY_ITEMS_LOADING:
      return {
        ...state,
        loading: true
      }
    case  GET_PANTRY_ITEMS:
      return {
        ...state,
        pantryItems: action.payload,
        loading: false 
      }
    case  ADD_ITEM_TO_PANTRY:
      let pantryItems = state.pantryItems.filter( item => {
        return item._id !== action.payload._id
      })

      return {
        ...state,
        pantryItems: [action.payload, ...pantryItems]
      }
    case  DELETE_ITEM_FROM_PANTRY:
      return {
        ...state,
        pantryItems: state.pantryItems.filter(item => {
          return item._id !== action.payload._id
        })
      }
    default:
      return state;
  }
}