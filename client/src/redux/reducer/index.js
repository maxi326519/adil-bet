import { SEARCH_TEAM } from "../actions/types";

const initialState = {
  // Agregrar las variables necesarias
  matchs: [],
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    // Agregar cada caso
    case SEARCH_TEAM:
      return {
        ...state,
        matchs: action.payload.data.filter((m) => {
          if (m.homeTeam.include(action.payload.name)) return true;
          if (m.awayTeam.include(action.payload.name)) return true;
          if (m.league.include(action.payload.name)) return true;
        }),
      };

    default:
      return state;
  }
};
