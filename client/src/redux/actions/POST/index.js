import axios from "axios";
import { func } from "prop-types";

export function addBet(bet) {
  if (bet.homeBet) {
    const payload = {
      amount: Number(bet.homeBet),
      betTo: "homeBet",
      multiplier: 1.8,
      idUser: bet.idUser,
      idMatch: bet.idMatch,
    };
    console.log(payload);
    return {
      type: "ADD_BET_TO_CART",
      payload,
    };
  }
  if (bet.awayBet) {
    const payload = {
      amount: Number(bet.awayBet),
      betTo: "awayBet",
      multiplier: 2.5,
      idUser: bet.idUser,
      idMatch: bet.idMatch,
    };
    return {
      type: "ADD_BET_TO_CART",
      payload,
    };
  }
  if (bet.tieBet) {
    const payload = {
      amount: Number(bet.tieBet),
      betTo: "tieBet",
      multiplier: 3,
      idUser: bet.idUser,
      idMatch: bet.idMatch,
    };
    return {
      type: "ADD_BET_TO_CART",
      payload,
    };
  }
}

export function addOrder() {
  console.log("addOrder");
}

export function addPayment() {
  console.log("addPayment");
}

export function addUser() {
  console.log("addUser");
}

export function updateRedux(dataUser) {
  return (dispatch) => {
    dispatch({
      type: "UPDATE_REDUX",
      payload: dataUser,
    });
  };
}

export function postCreateUser(payload) {
  return async function (dispatch) {
    try {
      const result = await axios.post(`/user`, payload);
      return dispatch({
        type: "POST_CREATE_USER",
        payload: result.data,
      });
    } catch (error) {
      throw new Error(error.message);
    }
  };
}

export function postLoginUser(payload) {
  return async function (dispatch) {
    try {
      const result = await axios.post(`/login`, payload);
      console.log(result.data);
      return dispatch({
        type: "LOGIN_USER",
        payload: result.data,
      });
    } catch (error) {
      return dispatch({
        type: "ERROR_BACK",
        payload: "Error, inténtalonuevamente",
      });
    }
  };
}

export function postLoginUserAuth0(payload) {
  return async function (dispatch) {
    try {
      const result = await axios.post(`/login/auth0`, payload);
      return dispatch({
        type: "CREATE_USER_AUTH0",
        payload: result.data,
      });
    } catch (error) {
      throw new Error(error.message);
    }
  };
}

export function createBetDB(payload) {
  console.log(payload);
  return async function (dispatch) {
    try {
      const result = await axios.post(`/order/bet`, payload);
      console.log(result.data);
      return dispatch({
        type: "ADD_BET_DB",
        payload: result.data,
      });
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
    }
  };
}
export function createOrder({ userId, total }) {
  console.log(userId, total);
  const payload = {
    amount: total,
    idUser: userId,
  };
  console.log(payload);
  return async function (dispatch) {
    try {
      const result = await axios.post(`/order`, payload);
      console.log(result.data);
      return dispatch({
        type: "CREATE_ORDER",
        payload: result.data,
      });
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
    }
  };
}

export function addDeposit(payload) {
  return async function (dispatch) {
    try {
      const result = await axios.post(`/paid`, payload);
      return dispatch({
        type: "CREATE_PAYMENT",
        payload: result.data,
      });
    } catch (error) {
      throw new Error(error.message);
    }
  };
}

export function addReview(payload) {
  return async function (dispatch) {
    try {
      const response = await axios.post(`/reviews`, payload);
      return dispatch({
        type: "POST_REVIEW",
        payload: response.data,
      });
    } catch (error) {
      throw new Error(error.message);
    }
  };
}
export function addWithdraw(payload){
  return async function (dispatch){
    try{
      const response = await axios.post(`/withdraw`, payload);
      return dispatch({
        type: "POST_WITHDRAW",
        payload: response.data
      })
    }catch(error){
      throw new Error(error.message)
    }
  }
}