import {
  SEARCH_TEAM,
  GET_MATCHS,
  SET_CURRENT_PAGE,
  SET_PAGE,
  MATCH_FILTERS,
  ORDER_BY_NAME,
  ITEM_CART,
  GET_REVIEWS,
  UPDATE_REVIEW,
  GET_REVIEW_BY_ID,
  POST_REVIEW,
  DELETE_REVIEW,

} from "../actions/types";

const cartItemsFromLocalStorage = localStorage.getItem("cartItem") || "[]";

const initialState = {
  reviews: [],
  reviewById: [],
  matches: [],
  currentPage: {
    data: [],
    number: 1,
    totalPages: 0,
    maxPerPage: 20,
  },
  matchDetail: [],
  userDates: {},
  userlogin: false,
  filters: {
    league: [],
    country: [],
    teams: [],
  },
  error: [],
  cart: [],
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    // Agregar cada caso
    case ITEM_CART:
      return {
        ...state,
        items: [...state.items, action.payload]
      }

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

    case MATCH_FILTERS:
      return {
        ...state,
        filters: action.payload,
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
      window.localStorage.setItem('user', JSON.stringify([action.payload]));
      return {
        ...state,
        userDates: action.payload,
        userlogin: true,
      };
    }
    case "LOGIN_USER": {
      console.log(action.payload);
      window.localStorage.setItem('user', JSON.stringify([action.payload]));
      return {
        ...state,
        userDates: action.payload,
        userlogin: true,
      };
    }
    case "CREATE_USER_AUTH0": {
      console.log(action.payload);
      window.localStorage.setItem('user', JSON.stringify([action.payload]));
      return {
        ...state,
        userlogin: true,
        userDates: action.payload,
      };
    }
    case "MATCH_DETAILS": {
      return {
        ...state,
        matchDetail: action.payload,
      };
    }
    case 'UPDATE_REDUX':{
      return{
        ...state,
        userDates: action.payload,
        userlogin: true,
      }
    }
    case ORDER_BY_NAME: {
      let all = state.matches;
      let teamsByName =
        action.payload === "A to Z"
          ? all.sort((a, b) => {
              if (a.homeTeam > b.homeTeam) return 1;
              if (a.homeTeam < b.homeTeam) return -1;
              return 0;
            })
          : all.sort((a, b) => {
              if (a.homeTeam < b.homeTeam) return 1;
              if (a.homeTeam > b.homeTeam) return -1;
              return 0;
            });
      return {
        ...state,
        matches: teamsByName,
      };
    }
    case "ADD_BET_TO_CART": {
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    }
    case "DELETE_BET_TO_CART": {
      const matches = state.cart.filter(
        (match) => Number(match.idMatch) !== action.payload
      );
      console.log(matches);
      return {
        ...state,
        cart: matches,
      };
    }
    case "ADD_BET_DB": {
      return {
        ...state,
        cart: [],
      };
    }
    case "CREATE_ORDER": {
      return {
        ...state,
      };
    }
    case "UPDATE_WALLET_USER": {
      return {
        ...state,
        userDates: action.payload,
      };
    }
    case "ERROR_BACK": {
      return {
        ...state,
        error: action.payload,
      };
    }
    case 'CREATE_PAYMENT':{
      console.log(action.payload)
      return {
          ...state,
      }
    }
    case 'DELETE_REVIEW':{
      console.log(action.payload)
      return {
        ...state
      }
    }
    case "GET_REVIEWS":{
      return{
        ...state,
        reviews: action.payload
      }
    }
    case "GET_REVIEW_BY_ID":{
      return{
        ...state,
        reviewById: action.payload
      }
    }
    case 'POST_REVIEW':{
      return {
        ...state
      }
    }
    case 'UPDATE_REVIEW':{
      return{
        ...state
      }
    }
    
    default:
      return state;
  }
};
