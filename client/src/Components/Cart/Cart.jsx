import React from "react";
import CardCart from "../CardCart/CardCart.jsx";
import { useDispatch, useSelector} from "react-redux";

export default function Cart() {
    
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const userDates = useSelector(state => state.userDates)
    let total = 0; 
    cart.map(e=>{
        return total= total + e.amount
    })

    const handleOnPay = ()=>{
        //accion para crear cada una de las apuestas
        dispatch ()
        //accion para crear la orden 
        //accion para descontar el wallet ruta put 
    } 
        

          return (
            <div>
                {cart?.map(match=>{
                    return <CardCart id={match.idMatch} amount={match.amount} betTo={match.betTo}/>
                })}
                <span>Total a pagar: {total} </span> 
                <button disabled={Number(userDates.wallet) < Number(total) ? false:true}>Realizar pago</button>    
            </div>
          )
        
  }