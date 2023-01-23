import React from "react";
import { useState } from "react";
import { addWithdraw } from "../../../../redux/actions/POST/index.js";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";

import styles from "./WithdrawForm.module.css";

export default function WithdrawlForm({ window, handleWindow }) {
  const user = useSelector(state => state.userDates)
  const dispatch = useDispatch();
  const localUser = localStorage.getItem('user')
  const [errors, setErrors] = useState({});
  const walletUser = useSelector(state => state.userDates.wallet)
  const [errorW, setErrorW] = useState({ value: false, msg: "" });
  const [input, setInput] = useState({
    userId: user.id ? user.id : localUser.id,
  });

  function handleClose() {
    setInput({
      userId: user.id ? user.id : localUser.id,
      amount: '',
      phone: '',
      method: 'Select',
      document: '',
      card: ''
    })
    handleWindow();
  }

  function handlerSubmit(e) {
    e.preventDefault();
    if (!input.amount || input.amount <= 0 || input.amount === ''){
      swal({
        title: "Se necesita el monto a retirar",
        button: "ACEPTAR",
      })}
    else if(input.amount > walletUser){
      swal({
        title: "Fondos insuficientes",
        button: "ACEPTAR",
      })}
    else if (!input.method || input.method === 'Select' ){
      swal({
        title: "Seleccione el tipo de documento",
        button: "ACEPTAR",
      })}
    else if (!input.document){
      swal({
        title: "Se necesita el documento",
        button: "ACEPTAR",
      })}
    else if (!input.phone){
      swal({
        title: "Se necesita el telefono",
        button: "ACEPTAR",
      })}
      else if (!input.card){
        swal({
          title: "Se necesita el numero de cuenta",
          button: "ACEPTAR",
        })}
    else {
      setInput({
        ...input,
        amount: parseInt(input.amount),
        card: parseInt(input.card)
      })
      dispatch(addWithdraw(input));
      swal({
        title: "RETIRO RECIBIDO",
        text: "MUCHAS GRACIAS POR SU RETIRO EN 48 HORAS SERA EFECTUADO",
        button: "ACEPTAR",
      }).then(function () {
        handleClose()
      });
    }
  }

  function handlerChange(e) {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className={`${styles.container} ${window ? styles.isActive : null}`}>
      <form
        className={`${styles.window} ${errorW.value ? styles.error : null}`}
        onSubmit={handlerSubmit}
      >
        <div className={styles.closeContainer}>
          <button
            type="button"
            className="btn-close"
            aria-label="Close"
            onClick={handleClose}
          ></button>
        </div>{" "}
        <div className="">
          <label for="floatingInput">Monto USD *:</label>
          <input
            type="number"
            name="amount"
            value={input.amount}
            className=""
            placeholder="Introduzca la informacion..."
            onChange={handlerChange}
          />
        </div>
        <div className="">
          <label>Tipo de documento *:</label>
          <select
            className="selectdocument"
            name="method"
            value={input.method ? input.method : null}
            onChange={handlerChange}
          >
            <option>Select</option>
            <option>Green Card</option>
            <option>Passport</option>
            <option>Driver's license</option>
          </select>
        </div>
        <div className="">
          <input
            type="number"
            name="document"
            value={input.document}
            className=""
            placeholder="Introduzca la informacion..."
            onChange={handlerChange}
          />
        </div>
        <div className="">
          <label>Número de Celular - coloca el código de área local *:</label>
          <input
            type="text"
            name="phone"
            value={input.phone}
            className=""
            placeholder="Introduzca la informacion..."
            onChange={handlerChange}
          />
        </div>
        <div className="">
        <label>Número de Cuenta *:</label>
          <input
            type="number"
            name="card"
            value={input.card}
            className=""
            placeholder="Introduzca la informacion..."
            onChange={handlerChange}
          />
        </div>
        <div>
          {
              <button className="btnsend" type="submit">
                ENVIAR
              </button>
            }
        </div>
        {errorW.value ? (
          <span className={styles.spanError}>{errorW.msg}</span>
        ) : null}
      </form>
    </div>
  );
}
