import { DELETE_FAVORITES, ADD_FAVORITES } from "./types";

const initialState = {
  myFavorites: [],
};

export default function rootReducer(state = initialState, { types, payload }) {
  switch (types) {
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
}
