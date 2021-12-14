import { ActionTypes } from "../constants/actionTypes";
const initialState = {
  bookState: [],
  searchState: [],
  cartBooks : []
};
const userBooks = (state = initialState, action) => {
  switch (action.type) {

    case ActionTypes.SET_ALL_BOOKS:
      return {
        ...state,
        bookState: action.data,
      };

      case ActionTypes.SET_SEARCHED_BOOKS:
      return {
        ...state,
        searchState: action.data,
      };

      case ActionTypes.SET_CART_BOOKS:
      return {
        ...state,
        cartBooks: action.data,
      };
      case ActionTypes.SET_ADD_CART_BOOKS:
      return {
        ...state,
        cartBooks: [...state.cartBooks,action.data],
      };

      case ActionTypes.SET_UPDATE_BOOK:
        let newCart = [...state.cartBooks];
        newCart[action.data.index] = action.data.data;
        return {
          ...state,
          cartBooks: newCart,
        };

        case ActionTypes.SET_DELETE_BOOK:
          let newCartItem = state.cartBooks.filter((book) => book._id !== action.data.data._id);
          return {
            ...state,
            cartBooks: newCartItem,
          };
  
    default:
      return state;
  }
};
export default userBooks;
