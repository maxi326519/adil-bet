import axios from "axios";
// Importar los actions types necesarios
import { SEARCH_TEAM, GET_MATCHS, SET_CURRENT_PAGE, SET_PAGE } from "../types";

export function searchTeam(name) {
  return async function (dispatch) {
    /*     let json = await axios.get(`http://localhost:3001/matchs`);

    return dispatch({
      type: SEARCH_TEAM,
      payload: {
        name: name,
        data: json.data,
      },
    }); */
  };
}

export function handlePage(number) {
  return (dispatch) => {
    dispatch({
      type: SET_CURRENT_PAGE,
      payload: number
    });
  };
}

export function handleSetPage(number) {
  return (dispatch) => {
    dispatch({
      type: SET_PAGE
    });
  };
}

export function getMatchDetails() {
  console.log("matchDetails");
}

export function getMatchs() {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3001/matchs");
      dispatch({
        type: GET_MATCHS,
        payload: response.data.message,
      });
    } catch (exception) {
      console.log(exception);
    }
  };
}

export function getUserActivity() {
  console.log("userActivity");
}

export function getUserInfo() {
  console.log("userInfo");
}

export function getUserOrders() {
  console.log("userOrders");
}
