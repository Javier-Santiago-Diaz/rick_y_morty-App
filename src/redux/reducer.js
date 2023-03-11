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
      const filter = state.myFavorites.filter((ele) => ele.id !== payload);
      return {
        ...state,
        myFavorites: filter,
      };

    default:
      return state;
  }
}
