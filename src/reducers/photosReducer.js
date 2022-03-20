import { SET_PHOTOS_LIST } from "../actions/actions";

const initialState = {
  list: [],
  order: 'default'
};

export function photosReducer(state = initialState, action) {
  switch (action.type) {
    case SET_PHOTOS_LIST:
      return { ...state, list: action.payload };
   
    default:
      return state;
  }
}
