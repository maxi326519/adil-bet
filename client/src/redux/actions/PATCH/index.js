// Importar los actions types necesarios
import axios from "axios";
import {
  UPDATE_MULT_BET,
  UPDATE_STATUS_BET,
  UPDATE_AMOUNT_BET,
} from "../types";
const api = 'http://localhost:3001'

export function updateMatch() {
  console.log("updateMatch");
}

export function updateUser() {
  console.log("updateUser");
}

export function updateProfile(id, { userName, email, phone }) {
  const payload = {
    userName,
    email,
    phone,
  };
  return async function (dispatch) {
    try {
      const result = await axios.patch(`/user/${id}`, payload);
      return dispatch({
        type: "UPDATE_PROFILE",
        payload: result.data,
      });
    } catch (error) {
      throw new Error(error.message);
    }
  };
}

export function updateWalletUser({ userId, wallet }) {
  const payload = {
    wallet,
  };
  return async function (dispatch) {
    try {
      const result = await axios.patch(`/userupdate/${userId}`, payload);
      return dispatch({
        type: "UPDATE_WALLET_USER",
        payload: result.data,
      });
    } catch (error) {
      throw new Error(error.message);
    }
  };
}

export function updateReview (userId, reviewData){
  const payload = {
    ...reviewData
  }
  return async function(dispatch){
    try{
      const response = await axios.patch(`/reviews/${userId}`, payload)
      return dispatch({
        type: 'UPDATE_REVIEW',
        payload: response.data
      })
    }catch(err){
      console.log(err)
      throw new Error(err.message)
    }
  }
}

export function userActive({userId, isActive}) {
  const payload={
    "isActive" : isActive? false:true
  }
  console.log(payload)
return async function (dispatch) {
try {
 const result = await axios.patch(`${api}/userupdate/${userId}`, payload);
 return dispatch({
   type: 'UPDATE_ACTIVE_USER',
   payload: result.data,
 });
} catch (error) {
 console.log(error)
   throw new Error (error.message)
}
};
};

export function userAdmin({userId, isAdmin}) {
  const payload={
    "isAdmin" : isAdmin? false:true
  }
return async function (dispatch) {
try {
 const result = await axios.patch(`${api}/userupdate/${userId}`, payload);
 console.log(result.data)
 return dispatch({
   type: 'UPDATE_ADMIN_USER',
   payload: result.data,
 });
} catch (error) {
 console.log(error)
   throw new Error (error.message)
}
};
};

export function reviewActive({id, status}) {
  const payload={
    "status" : status==='Pending'? 'Aprobed':'Pending'
  }
return async function (dispatch) {
try {
 const result = await axios.patch(`${api}/reviews/${id}`, payload);
 console.log(result.data)
 return dispatch({
   type: 'UPDATE_REVIEW_STATUS',
   payload: result.data,
 });
} catch (error) {
 console.log(error)
   throw new Error (error.message)
}
};
};

export function betMult({ id, multiplier }) {
  const payload = {
    multiplier,
  };
  return async function (dispatch) {
    try {
      const result = await axios.patch(`${api}/bet/${id}`, payload);
      return dispatch({
        type: UPDATE_MULT_BET,
        payload: result.data,
      });
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
    }
  };
}

export function betStatus({ id, status }) {
  const payload = {
    "status" : status==='Active'? 'Completed':'Active'
  };
  return async function (dispatch) {
    try {
      const result = await axios.patch(`${api}/bet/${id}`, payload);
      return dispatch({
        type: UPDATE_STATUS_BET,
        payload: result.data,
      });
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
    }
  };
}

export function betAmount({ id, amount }) {
  const payload = {
    amount,
  };
  return async function (dispatch) {
    try {
      const result = await axios.patch(`${api}/bet/${id}`, payload);
      return dispatch({
        type: UPDATE_AMOUNT_BET,
        payload: result.data,
      });
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
    }
  };
}

export function updateDeposit({id, amount, method }) {
  const payload = {
    amount,
    method,
  };
  return async function (dispatch) {
    try {
      const result = await axios.patch(
        `http://localhost:3001/deposit/${id}`,
        payload
      );
      console.log(result.data);
      return dispatch({
        type: "UPDATE_DEPOSIT",
        payload: result.data,
      });
    } catch (error) {
      console.log(error);
      throw new Error(error.message);
    }
  };
}