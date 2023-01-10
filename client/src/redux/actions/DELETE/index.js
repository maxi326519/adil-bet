// Importar los actions types necesarios

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