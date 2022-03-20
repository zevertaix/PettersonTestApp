import { combineReducers } from "redux";
import { favoritesReducer } from "./favoritesReducer";
import { photosReducer } from "./photosReducer";

export const rootReducer = combineReducers({
  photos: photosReducer,
  favorites: favoritesReducer,
});