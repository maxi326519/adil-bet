// Importar los actions types necesarios
import axios from 'axios';
const api = 'http://localhost:3001'

export function updateMatch(){
    console.log('updateMatch');
}

export function updateUser(){
    console.log('updateUser');

}

export function updateWalletUser({userId, wallet}) {
    const payload={
      wallet,
    }
    console.log(payload)
 return async function (dispatch) {
 try {
   const result = await axios.patch(`${api}/user/${userId}`, payload);
   console.log(result.data)
   return dispatch({
     type: 'UPDATE_WALLET_USER',
     payload: result.data,
   });
 } catch (error) {
   console.log(error)
     throw new Error (error.message)
 }
};
};