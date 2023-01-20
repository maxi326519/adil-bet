import axios from "axios";
// Importar los actions types necesarios
import {
  SEARCH_TEAM,
  GET_MATCHS,
  SET_CURRENT_PAGE,
  SET_PAGE,
  MATCH_DETAILS,
  MATCH_FILTERS,
  ORDER_BY_NAME,
  GET_REVIEWS,
  GET_REVIEW_BY_ID,
  GET_USER_INFO,
} from "../types";

export function searchTeam(name) {
  return async function (dispatch) {
    let json = await axios.get(
      `/matchs/search?name=${name}`
    );

    return dispatch({
      type: SEARCH_TEAM,
      payload: json.data,
    });
  };
}

export function handlePage(number) {
  return (dispatch) => {
    dispatch({
      type: SET_CURRENT_PAGE,
      payload: number,
    });
  };
}

export function handleSetPage(number) {
  return (dispatch) => {
    dispatch({
      type: SET_PAGE,
    });
  };
}

export function getMatchDetails(id) {
  return async function (dispatch) {
    try {
      const result = await axios.get(`/details/${id}`);
      return dispatch({
        type: 'MATCH_DETAILS',
        payload: result.data,
      });
    } catch (error) {
      throw new Error(error.message);
    }
  };
}

export function getFilters() {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/getFilters`);
      dispatch({
        type: MATCH_FILTERS,
        payload: response.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export function getMatchs(filters) {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        `/matchs?league=${
          filters ? filters.league : ""
        }&teams=${filters ? filters.teams : ""}&country=${
          filters ? filters.country : ""
        }`
      );
      dispatch({
        type: GET_MATCHS,
        payload: response.data,
      });
    } catch (exception) {
      console.log(exception);
    }
  };
}

export function orderByName(payload) {
  return {
    type: ORDER_BY_NAME,
    payload,
  };
}

export function getUserActivity() {
  console.log("userActivity");
}

export function getUserInfo(id) {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3001/user/${id}`);
      console.log(response, "actionn");
      dispatch({
        type: GET_USER_INFO,
        payload: response.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
}

export function getUserOrders() {
  console.log("userOrders");
}
export function getActivity({ id, page, activity }) {
  console.log(id);
  return async function (dispatch) {
    try {
      const result = await axios.get(
        `http://localhost:3001/activity/${id}?activity=${activity}&&page=${page}`
      );

      return dispatch({
        type: "GET_USER_ACTIVITY",
        payload: result.data,
      });
    } catch (error) {
      throw new Error(error.message);
    }
  };
}

export function getAllReviews() {
  return async (dispatch) => {
    try{
      const response = await axios.get(`/allreviews`);
      dispatch({
        type: GET_REVIEWS,
        payload: response.data
      });
      // console.log(response.data)
    }catch(err){
      console.log(err);
    }
  };
}
export function getReviewById(id){
  return async (dispatch) => {
    try{
      const response = await axios.get(`/reviews/${id}`);
      dispatch({
        type: GET_REVIEW_BY_ID,
        payload: response.data
      })
    }catch(err){
      console.log(err)
    }
  }
}

export function getUsers() {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3001/alluser`);
      dispatch({
        type: 'GET_ALL_USERS',
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getBets() {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3001/allBets`);
      dispatch({
        type: 'GET_ALL_BETS',
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getDeposits() {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3001/allDeposits`);
      dispatch({
        type: 'GET_ALL_DEPOSITS',
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getReviews() {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3001/allreviews`);
      dispatch({
        type: 'GET_ALL_REVIEWS',
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}