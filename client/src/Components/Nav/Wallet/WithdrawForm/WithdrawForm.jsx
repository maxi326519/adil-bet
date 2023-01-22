import React from "react";
import { useState } from "react";
import { addWithdraw } from "../../../../redux/actions/POST/index.js";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";

import styles from "./WithdrawForm.module.css";

export default function WithdrawlForm({ window, handleWindow }) {
  const user = useSelector(state => state.userDates)
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [errorW, setErrorW] = useState({ value: false, msg: "" });
  const [input, setInput] = useState({
    userId: user.id,
  });

  function handleClose() {
    handleWindow();
  }


  function handlerSubmit(e) {
    e.preventDefault();
    if (!input.amount) alert("amount is need");
    else if (!input.method) alert("Select the type");
    else if (!input.document) alert("Choose document.");
    else if (!input.phone) alert("Choose phone.");
    else {
      dispatch(addWithdraw(input));
      swal({
        title: "RETIRO RECIBIDO",
        text: "MUCHAS GRACIAS POR SU RETIRO EN 48 HORAS SERA EFECTUADO",
        button: "ACEPTAR",
      }).then(function () {
        window.location = "/home";
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
    <div class={`${styles.container} ${window ? styles.isActive : null}`}>
      <form
        className={`${styles.window} ${errorW.value ? styles.error : null}`}
        onSubmit={handlerSubmit}
      >
        <div className={styles.closeContainer}>
          <button
            type="button"
            class="btn-close"
            aria-label="Close"
            onClick={handleClose}
          ></button>
        </div>{" "}
        <div className="">
          <label for="floatingInput">Monto USD *:</label>
          <input
            type="text"
            name="amount"
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
            type="text"
            name="document"
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
