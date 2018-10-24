import { FRIDGE_ITEMS_LOADING, GET_FRIDGE_ITEMS, ADD_ITEM_TO_FRIDGE } from '../actions/types';

const initialState = {
  fridgeItems: [],
  loading: false, 
}
export default function(state = initialState, action) {
  switch(action.type) {
    case FRIDGE_ITEMS_LOADING:
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
    case  ADD_ITEM_TO_FRIDGE:
      return {
        ...state,
        fridgeItems: [action.payload, ...state.items]
      }
    default:
      return state;
  }
}