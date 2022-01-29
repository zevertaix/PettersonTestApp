export const SET_PHOTOS_LIST = "SET_PHOTOS_LIST";
export const SET_SEARCH_LIST = "SET_SEARCH_LIST";

export function setPhotosList(data) {
  return {
    type: SET_PHOTOS_LIST,
    payload: data,
  }
}

export function setSearchList(array) {
  return {
    type: SET_SEARCH_LIST,
    payload: array,
  }
}