import { 
  MEAL_ITEMS_LOADING,
  GET_MEALS,
  GET_MEAL_ITEMS,
  ADD_MEAL,
  ADD_ITEM_TO_MEAL, 
  DELETE_ITEM_FROM_MEAL,
  DELETE_MEAL,
} from '../actions/types';

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
    case  ADD_MEAL:
      return {
        ...state,
        meals: [action.payload, ...state.meals],
      }
    case  ADD_ITEM_TO_MEAL:
      // const meals = state.meals.map( meal => {
      //   if (meal._id === action.payload.meal) {
      //     meal.items.push(action.payload)
      //   }
      //   return meal
      // });
      
      return {
        ...state,
        meals: action.payload
      }

    case  DELETE_ITEM_FROM_MEAL:
      return {
        ...state,
        meals: state.meals.map( meal => {
          const items = meal.items.filter(item => {
            return  item._id !== action.payload._id
          })   
          meal.items = items;
          console.log(meal);
          return meal;  
        })
      }  

      case  DELETE_MEAL:
      return {
        ...state,
        meals: state.meals.filter( meal => meal._id !== action.payload._id)
      }

    default:
      return state;
  }
}