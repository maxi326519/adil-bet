import React, { useState } from "react";
import CardCart from "./CardCart/CardCart.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
  createBetDB,
  createOrder,
  itemCart,
} from "../../redux/actions/POST/index.js";
import { updateWalletUser } from "../../redux/actions/PATCH/index.js";
import "./Cart.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const userDates = useSelector((state) => state.userDates);
  const userId = userDates.id;
  const [style, setStyle] = useState(false);

  let total = 0;
  cart.map((e) => {
    return (total = total + e.amount);
  });
  let wallet = userDates.wallet - total;

  const handleOnPay = () => {

    if (total < userDates.wallet ) {
      cart.map((e) => {
        dispatch(createBetDB(e));
      });
      //accion para descontar el wallet ruta put
      dispatch(updateWalletUser({ wallet, userId }));
      //accion para crear la orden
      dispatch(createOrder({ total, userId }));
      //accion para crear cada una de las apuestas
      swal({
        title: "APUESTA EXITOSA",
        text: "MUCHAS GRACIAS POR SU APUESTA",
        button: "ACEPTAR",
      });
      window.localStorage.removeItem('cart')
    } 
    if(total > userDates.wallet) {
      swal({
        title: "APUESTA RECHAZADA",
        text: "NO TIENE SUFICIENTE SALDO",
        button: "ACEPTAR",
      }).then(() => {
        window.location.href="/payment"
      })
    }else if(!userDates.wallet){
      swal({
        title: "DEBES INICIAR SESION PARA APOSTAR",
        button: "ACEPTAR",
      }).then(() => {
        window.location.href="/login"
      })
    }
  };

  function HandleStyle() {
    style ? setStyle(false) : setStyle(true);
  }

  return (
    <div className="container-cart">
      <div className="container-title-ticket" onClick={HandleStyle}>
        <h2 className="title-ticket">TICKET DE APUESTA</h2>
      </div>
      <div className={`container-allinfo ${style ? "ticket-animation" : ""}`}>
        <div className="card-cart">
          {cart.length >= 1 ? (
            cart?.map((match, i) => {
              return (
                <CardCart
                  key={i}
                  id={match.idMatch}
                  amount={match.amount}
                  betTo={match.betTo}
                />
              );
            })
          ) : (
            <div className="cart-empty">No hay apuestas</div>
          )}
        </div>
        <div className="bet-buttons">
          <span className="total-pay">TOTAL A PAGAR: $ {total} </span>
          <button
        
            onClick={handleOnPay}
            className="button-pay"
          >
            REALIZAR PAGO
          </button>
          
        </div>
      </div>
    </div>
  );
}
