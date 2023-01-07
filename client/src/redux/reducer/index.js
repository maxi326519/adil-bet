import {
  SEARCH_TEAM,
  GET_MATCHS,
  SET_CURRENT_PAGE,
  SET_PAGE,
  GET_FILTERS,
} from "../actions/types";

const initialState = {
  matches: [],
  currentPage: {
    data: [],
    number: 1,
    totalPages: 0,
    maxPerPage: 20,
  },
  matchDetail:[],
  filters:[]
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    // Agregar cada caso
    case SEARCH_TEAM:
      return {
        ...state,
        matches: action.payload,
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
          ...state.currentPage,
          data: state.matches.slice(
            fistMatch,
            fistMatch + state.currentPage.maxPerPage
          ),
          number: newPage,
          totalPages: Math.ceil(
            state.matches.length / state.currentPage.maxPerPage
          ),
        },
      };

    case SET_PAGE:
      return {
        ...state,
        currentPage: {
          ...state.currentPage,
          data: state.matches.slice(0, state.currentPage.maxPerPage),
          number: 1,
          totalPages: Math.ceil(
            state.matches.length / state.currentPage.maxPerPage
          ),
        },
      };

    case "POST_CREATE_USER": {
      //window.localStorage.setItem(USER, JSON.stringify([action.payload]));
      return {
        ...state,
        userDates: action.payload,
        userlogin: true,
      };
    }
    case "LOGIN_USER": {
      console.log(action.payload);
      // window.localStorage.setItem(USER, JSON.stringify([action.payload]));
      return {
        ...state,
        userDates: action.payload,
        userlogin: true,
      };
    }
    case "CREATE_USER_AUTH0": {
      console.log(action.payload);
      // window.localStorage.setItem(USER, JSON.stringify([action.payload]));
      // window.localStorage.setItem(AUTH0, 'YES');
      return {
        ...state,
        userlogin: true,
        userDates: action.payload,
      };
    }
    case 'MATCH_DETAILS':{
      return {
          ...state,
          matchDetail: action.payload
      }
    }
    case GET_FILTERS:{
      return {
        ...state,
        filters: action.payload
      }
    }
    default:
      return state;
  }
};
