import axios from 'axios';

// Importar los actions types necesarios
import { 
    DELETE_REVIEW
} from "../types"

export function deleteOrder (){
    console.log('deleteOrder')
}

export function deleteUser (){
    console.log('deleteUser')
}

export function deleteBetToCart(id) {
    return ({
        type: 'DELETE_BET_TO_CART',
        payload: id,
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