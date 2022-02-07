export const SET_PHOTOS_LIST = "SET_PHOTOS_LIST";
export const ADD_FAVORITE_ITEM = "ADD_FAVORITE_ITEM"
export const REMOVE_FAVORITE_ITEM = "REMOVE_FAVORITE_ITEM"

export function setPhotosList(list) {
  return {
    type: SET_PHOTOS_LIST,
    payload: list,
  }
}

export function addFavoriteItem (item) {
  return {
    type: ADD_FAVORITE_ITEM,
    payload: item,
  }
}

export function removeFavoriteItem (item) {
  return {
    type: REMOVE_FAVORITE_ITEM,
    payload: item,
  }
}