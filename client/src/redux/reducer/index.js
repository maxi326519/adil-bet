import { SEARCH_TEAM, GET_MATCHS } from "../actions/types";

const initialState = {
  // Agregrar las variables necesarias
  matches: [],
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

    case GET_MATCHS:
      return{
        ...state,
        matches: action.payload
      }

    default:
      return state;
  }
};
