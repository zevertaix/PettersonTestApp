import { SET_ORDER_KEY, SET_PHOTOS_LIST } from "../actions/actions";

const initialState = {
  list: [],
  order: "default"
};

export function photosReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PHOTOS_LIST:
      return { ...state, list: action.payload };
    case SET_ORDER_KEY: 
      return {...state, order: action.payload }
   
    default:
      return state;
  }
}
