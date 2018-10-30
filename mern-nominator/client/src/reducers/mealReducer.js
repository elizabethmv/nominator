import { MEAL_ITEMS_LOADING, GET_MEALS, GET_MEAL_ITEMS, ADD_ITEM_TO_MEAL, DELETE_ITEM_FROM_MEAL } from '../actions/types';

const initialState = {
  meals: [{items:[]}],
  loading: false, 
}
export default function(state = initialState, action) {
  switch(action.type) {
    case MEAL_ITEMS_LOADING:
      return {
        ...state,
        loading: true
      }
    case  GET_MEALS:
      // console.log('meals', action.payload)
      return {
        ...state,
        meals: action.payload,
        loading: false 
      }
    case  GET_MEAL_ITEMS:
      return {
        ...state,
        // meals: [...state]action.payload,
        loading: false 
      }
    case  ADD_ITEM_TO_MEAL:
      let meals = state.meals.filter( item => {
        return item._id !== action.payload._id
      })

      return {
        ...state,
        meals: [action.payload, ...meals]
      }
    case  DELETE_ITEM_FROM_MEAL:
      return {
        ...state,
        meals: state.meals.filter(item => {
          return item._id !== action.payload._id
        })
      }
    default:
      return state;
  }
}