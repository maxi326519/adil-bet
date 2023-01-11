import React from "react";
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

  return (
    <div className="container-cart">
      <div className="container-title-ticket">
        <h2 className="title-ticket">TICKET DE APUESTA</h2>
      </div>
      <div className="container-allinfo">
        <div>
          <div className="card-cart">
            {/* {cart?.map((match) => {
              return (
                <CardCart
                  id={match.idMatch}
                  amount={match.amount}
                  betTo={match.betTo}
                />
              );
            })} */}
            <div className="container-card-team-bet">
              <div className="container-name-teams">
                <div className="container-text-nameteams">
                  <span className="team1-text">Team Henry vs</span>
                  <span className="team2-text">Team CoderHouse</span>
                </div>
                <span className="date-bet">20/05/1998</span>
                <span className="betto">Apuesta a: Team Henry</span>
                <span className="quantity-bet">Cantidad: 10.00</span>
              </div>
              <div className="container-button-delete">
                <button className="button-delete">Eliminar</button>
              </div>
            </div>
          </div>
          <div className="container-card-team-bet">
            <div className="container-name-teams">
              <div className="container-text-nameteams">
                <span className="team1-text">New York Meets vs</span>
                <span className="team2-text">Piratas</span>
              </div>
              <span className="date-bet">20/05/2005</span>
              <span className="betto">Apuesta a: New York Meets</span>
              <span className="quantity-bet">Cantidad: 10.00</span>
            </div>
            <div className="container-button-delete">
              <button className="button-delete">Eliminar</button>
            </div>
          </div>
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
