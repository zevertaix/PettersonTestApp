import { ADD_FAVORITE_ITEM, REMOVE_FAVORITE_ITEM } from "../actions/actions";


const initialState = {
  list: [],
}

export function favoritesReducer (state = initialState, action) {
  switch (action.type) {
    case ADD_FAVORITE_ITEM:
      return {...state, list: [...state.list, action.payload]}

    case REMOVE_FAVORITE_ITEM:
      const filteredList = state.list.filter((item) => item.id !== action.payload.id)
      return {...state, list:filteredList}
    
  
    default:
      return state;
  }
}