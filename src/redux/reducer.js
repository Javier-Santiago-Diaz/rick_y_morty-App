import { DELETE_FAVORITES, ADD_FAVORITES } from "./types";

const initialState = {
  myFavorites: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_FAVORITES:
      return {
        ...state,
        myFavorites: [...state.myFavorites, payload],
      };

    case DELETE_FAVORITES:
      return {
        ...state,
        myFavorites: state.myFavorites.filter((char) => char.id !== payload),
      };

    default:
      return { ...state };
  }
};
export default rootReducer;
