import { MEAL_ITEMS_LOADING, GET_MEALS, GET_MEAL_ITEMS, ADD_ITEM_TO_MEAL, DELETE_ITEM_FROM_MEAL } from '../actions/types';

const initialState = {
  meals: [],
  mealItems: [],
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
      return {
        ...state,
        meals: action.payload,
        loading: false 
      }
    case  GET_MEAL_ITEMS:
      return {
        ...state,
        mealItems: action.payload,
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