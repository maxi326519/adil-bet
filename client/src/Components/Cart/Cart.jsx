import React, { useState } from "react";
import CardCart from "../CardCart/CardCart.jsx";
import { useDispatch, useSelector } from "react-redux";
import { createBetDB, createOrder } from "../../redux/actions/POST/index.js";
import { updateWalletUser } from "../../redux/actions/PATCH/index.js";
import "./Cart.css";

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const userDates = useSelector((state) => state.userDates);
  const userId = userDates.id;
  console.log(userDates);
  const [style, setStyle] = useState(false)

  let total = 0;
  cart.map((e) => {
    return (total = total + e.amount);
  });
  let wallet = userDates.wallet - total;

  const handleOnPay = () => {
    //accion para crear cada una de las apuestas
    cart.map((e) => {
      dispatch(createBetDB(e));
    });
    //accion para crear la orden
    dispatch(createOrder({ total, userId }));
    //accion para descontar el wallet ruta put
    dispatch(updateWalletUser({ wallet, userId }));
  };

  function HandleStyle () {
    style ? setStyle(false) : setStyle(true)
    console.log("Soy estilo")
  }

  return (
    <div className="container-cart">
      <div className="container-title-ticket" onClick={HandleStyle}>
        <h2 className="title-ticket">TICKET DE APUESTA</h2>
      </div>
      <div className={`container-allinfo ${style ? "ticket-animation" : ""}`}>
        <div className="card-cart">
          {cart?.map((match) => {
            return (
              <CardCart
                id={match.idMatch}
                amount={match.amount}
                betTo={match.betTo}
              />
            );
          })}
        </div>
        <div className="bet-buttons">
          <span className="total-pay">TOTAL A PAGAR: $ {total} </span>
          <button
            disabled={Number(userDates.wallet) < Number(total) ? true : false}
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
