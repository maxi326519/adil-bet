import {
  SEARCH_TEAM,
  GET_MATCHS,
  SET_CURRENT_PAGE,
  SET_PAGE,
} from "../actions/types";

const initialState = {
  // Agregrar las variables necesarias
  matches: [],
  currentPage: {
    data: [],
    number: 1,
    totalPages: 0,
    maxPerPage: 10
  },
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
      return {
        ...state,
        matches: action.payload,
      };

    case SET_CURRENT_PAGE:
      let newPage = state.currentPage.number + action.payload;
      const fistMatch = state.currentPage.number * state.currentPage.maxPerPage;

      return {
        ...state,
        currentPage: {
          data: state.matches.slice(fistMatch, fistMatch + state.currentPage.maxPerPage),
          number: newPage,
          totalPages: Math.ceil(state.matches.length / state.currentPage.maxPerPage),
          maxPerPage: 10
        }
      };

    case SET_PAGE:
      return {
        ...state,
        currentPage: {
          data: state.matches.slice(0, state.currentPage.maxPerPage),
          number: 1,
          totalPages: Math.ceil(state.matches.length / state.currentPage.maxPerPage),
          maxPerPage: 10
        },
      };

    default:
      return state;
  }
};
