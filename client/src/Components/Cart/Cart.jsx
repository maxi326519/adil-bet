import React from "react";
import CardCart from "../CardCart/CardCart.jsx";
import { useDispatch, useSelector} from "react-redux";
import {createBetDB, createOrder} from '../../redux/actions/POST/index.js'
import {updateWalletUser} from '../../redux/actions/PATCH/index.js'

export default function Cart() {
    
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const userDates = useSelector(state => state.userDates)
    const userId = userDates.id
    console.log(userDates)
    
    let total = 0; 
    cart.map(e=>{
        return total= total + e.amount
    })
    let wallet = userDates.wallet-total 

    const handleOnPay = ()=>{
        //accion para crear cada una de las apuestas
        cart.map(e=>{
            dispatch (createBetDB(e))
        })
        //accion para crear la orden 
        dispatch(createOrder({total, userId}))
        //accion para descontar el wallet ruta put 
        dispatch (updateWalletUser({wallet, userId}))
    } 
        

          return (
            <div>
                {cart?.map(match=>{
                    return <CardCart id={match.idMatch} amount={match.amount} betTo={match.betTo}/>
                })}
                <span>Total a pagar: {total} </span> 
                <button disabled={Number(userDates.wallet) < Number(total) ? true:false} onClick={handleOnPay}>Realizar pago</button>    
            </div>
          )
        
  }