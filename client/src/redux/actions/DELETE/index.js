import axios from 'axios';

// Importar los actions types necesarios
import { 
    DELETE_REVIEW,
    DELETE_WITHDRAW
} from "../types"

export function deleteOrder (){
    console.log('deleteOrder')
}

export function deleteUser (){
    console.log('deleteUser')
}

export function deleteBetToCart({id, team, amountbet}) {
  const payload1 = {
    id,
    team,
    amount: amountbet
  }
  console.log(payload1)
    return ({
        type: 'DELETE_BET_TO_CART',
        payload: payload1,
      });
}

export function deleteReview(id) {
    return async function (dispatch) {
      try {
        const result = await axios.delete(`/reviews/${id}`);
        return dispatch({
          type: DELETE_REVIEW,
          payload: result.data,
        });
      } catch (error) {
        throw new Error(error.message);
      }
    };
  }

  export function deleteWithdraw(id){
    return async function(dispatch){
        try{
          const result = await axios.delete(`/withdraw/${id}`)
          return dispatch({
            type: DELETE_WITHDRAW,
            payload: result.data,
          })
      }catch(error){
        throw new Error(error.message)
      }
    }
  }