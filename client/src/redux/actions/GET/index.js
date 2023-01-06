import axios from "axios";
// Importar los actions types necesarios
import { SEARCH_TEAM } from "../types";

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

export function getMatchDetails() {
  console.log("matchDetails");
}

export function getMatchs() {
  console.log("matchs");
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