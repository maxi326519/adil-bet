import axios from 'axios';
const api = 'http://localhost:3001'

export function addBet(bet) {
  if (bet.homeBet) {
    const payload = {
      'amount': Number(bet.homeBet),
      'betTo': 'homeBet',
      'multiplier': 1.8,
      'idUser': bet.idUser,
      'idMatch': bet.idMatch
    }
    console.log(payload)
    return {
      type: 'ADD_BET_TO_CART',
      payload,
    };
  };
  if (bet.awayBet) {
    const payload = {
      'amount': Number(bet.awayBet),
      'betTo': 'awayBet',
      'multiplier': 2.5,
      'idUser': bet.idUser,
      'idMatch': bet.idMatch
    }
    return {
      type: 'ADD_BET_TO_CART',
      payload,
    };
  }
  if (bet.tieBet) {
    const payload = {
      'amount': Number(bet.tieBet),
      'betTo': 'tieBet',
      'multiplier': 3,
      'idUser': bet.idUser,
      'idMatch': bet.idMatch
    }
    return {
      type: 'ADD_BET_TO_CART',
      payload,
    };
  }
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
        const result = await axios.post(`${api}/user`, payload);
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
        const result = await axios.post(`${api}/login`, payload);
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
        const result = await axios.post(`${api}/login/auth0`, payload);
        return dispatch({
          type: 'CREATE_USER_AUTH0',
          payload: result.data,
        });
      } catch (error) {
          throw new Error (error.message)
      }
    };
  }

  export function createBetDB(payload) {
         console.log(payload)
      return async function (dispatch) {
      try {
        const result = await axios.post(`${api}/order/bet`, payload);
        console.log(result.data)
        return dispatch({
          type: 'ADD_BET_DB',
          payload: result.data,
        });
      } catch (error) {
        console.log(error)
          throw new Error (error.message)
      }
    };
  };
  export function createOrder({userId, total}) {
    console.log(userId,total)
    const payload={
      'amount':total,
      'idUser':userId,
    }
    console.log(payload)
 return async function (dispatch) {
 try {
   const result = await axios.post(`${api}/order`, payload);
   console.log(result.data)
   return dispatch({
     type: 'CREATE_ORDER',
     payload: result.data,
   });
 } catch (error) {
   console.log(error)
     throw new Error (error.message)
 }
};
};
  