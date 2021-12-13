import {ActionTypes} from '../constants/actionTypes'
export const setAllBooks = (books) => {
  return {
    type: ActionTypes.SET_ALL_BOOKS,
    data: books
  };
};

export const searchBooks = (books) => {
  return {
    type: ActionTypes.SET_SEARCHED_BOOKS,
    data: books
  };
};

export const setAllCartBooks = (books) => {
  return {
    type: ActionTypes.SET_CART_BOOKS,
    data: books
  };
};

export const setCartBooks = (books) => {
  return {
    type: ActionTypes.SET_ADD_CART_BOOKS,
    data: books
  };
};

export const setUpdate = (note) => {
  return {
      type: ActionTypes.SET_UPDATE_NOTE,
      data: note,
  };
};



