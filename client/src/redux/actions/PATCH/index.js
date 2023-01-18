// Importar los actions types necesarios
import axios from "axios";

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
      const result = await axios.patch(`/user/${userId}`, payload);
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