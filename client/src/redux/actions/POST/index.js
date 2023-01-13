import axios from 'axios';

export function addBet(){
    console.log('addBet')
}

export function addOrder(){
    console.log('addOrder')
}

export function addPayment(){
    console.log('addPayment')
}

export function addUser(){
    console.log('addUser')
}

export function postCreateUser(payload) {
    return async function (dispatch) {
      try {
        const result = await axios.post(`/user`, payload);
        return dispatch({
          type: 'POST_CREATE_USER',
          payload: result.data,
        });
      } catch (error) {
          throw new Error (error.message)
      }
    };
  }

  export function postLoginUser(payload) {
    return async function (dispatch) {
      try {
        const result = await axios.post(`/login`, payload);
        console.log(result.data)
        return dispatch({
          type: 'LOGIN_USER',
          payload: result.data,
        });
      } catch (error) {
          throw new Error (error.message)
      }
    };
  }

  export function postLoginUserAuth0(payload) {
    return async function (dispatch) {
      try {
        const result = await axios.post(`/login/auth0`, payload);
        return dispatch({
          type: 'CREATE_USER_AUTH0',
          payload: result.data,
        });
      } catch (error) {
          throw new Error (error.message)
      }
    };
  }
