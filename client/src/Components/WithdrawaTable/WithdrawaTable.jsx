import React from "react";
import { useState } from "react";
import { addWithdraw } from "../../redux/actions/POST/index";
import { useDispatch, useSelector } from "react-redux";
import swal from "sweetalert";

export default function WithdrawTable() {
  const dispatch = useDispatch();
  const user = JSON.parse(window.localStorage.getItem('user'))
  const [errors, setErrors] = useState({});
  const [input, setInput] = useState({
    userId: user[0].id,
  });

  function handlerSubmit(e) {
    console.log(input);
    e.preventDefault();
    if (!input.amount) alert("amount is need");
    else if (!input.method) alert("Select the type");
    else if (!input.document) alert("Choose document.");
    else if (!input.phone) alert("Choose phone.");
    else {
      dispatch(addWithdraw(input));
      swal({
        title: "RETIRO RECIBIDO",
        text: "MUCHAS GRACIAS POR SU RETIRO, EN 48 HORAS SERA EFECTUADO",
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
    <div>
      <form onSubmit={handlerSubmit} className="">
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
          {!input.amount ||
          !input.document ||
          !input.phone ||
          !input.method ||
          Object.entries(errors).length ? (
            <button className="btnsend" type="submit" disabled={false}>
              ENVIAR
            </button>
          ) : (
            <button className="btnsend" type="submit">
              ENVIAR
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
