import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import swal from "sweetalert";
import cards from "../../../Assets/Images/Cardsstripe.png";

import "./CheckoutForm.css";
import { Link } from "react-router-dom";

export default function CheckoutForm({ setLoading }) {
  const [amount, setAmount] = useState(0);
  const stripe = useStripe();
  const elementsUse = useElements();
  const user = useSelector((state) => state.userDates);
  const userLocal = JSON.parse(window.localStorage.getItem("user"));
  const [data, setData] = useState({});

  const handleAxios = async (e) => {
    try {
      // Creamos el metodo de pago
      const { paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: elementsUse.getElement(CardElement),
        billing_details: {
          name: data.name,
          email: data.email,
        },
      });

      const response = await axios.post("/create-checkout-session", {
        payment_method: paymentMethod.id,
        amount: amount /* Traer del estado */,
        userId: user.id ? user.id : userLocal.id,
        dataEmail: data,
      });

      if (response.data.message === "Successful Payment") {
        swal({
          title: "RECARGA EXITOSA",
          text: "MUCHAS GRACIAS POR SU RECARGA",
          button: "ACEPTAR",
        }).then(function () {
          window.location = "/home";
        });
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
      swal({
        title: `Error`,
        text: "Hubo un error",
        button: "ACEPTAR",
      }).then(function () {
        window.location = "/payment";
      });
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    handleAxios();
  }

  function handlerData(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  }

  const handleInputChange = (inputAmount) => {
    setAmount(inputAmount);
  };

  return (
    <div>
      <div className="cntallstripe">
        <div className="cntformcards">
          <div>
            <form onSubmit={handleSubmit} className="form">
              <div className="mb-3">
                <label for="exampleFormControlInput2" className="form-label">
                  Nombre del propietario
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  id="exampleFormControlInput2"
                  placeholder="Nombre del Propietario..."
                  onChange={handlerData}
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">
                  Direccion Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="exampleFormControlInput1"
                  placeholder="Correo Electronico"
                  onChange={handlerData}
                />
              </div>
              <div className="form-group">
                <label for="card-element">Tarjeta Debito o Credito</label>
                <CardElement className="bg-white rounded-md py-3 my-6" />
              </div>
              <div className="cntpay">
                <div>
                  <select
                    onChange={(e) => handleInputChange(e.target.value)}
                    id="monto"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="">
                      Seleccione la cantidad que quiere recargar
                    </option>
                    <option value="50">$50</option>
                    <option value="100">$100</option>
                    <option value="200">$200</option>
                    <option value="500">$500</option>
                    <option value="1000">$1000</option>
                  </select>
                </div>
                <div>
                  <button className="btn btn-success" type="submit">
                    Pagar
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div>
            <img src={cards} alt="logos-cards" className="image-cards-stripe" />
          </div>
        </div>
        <div>
          <p className="text-stripe">
            Te encuentras en un ambiente seguro, sientete tranquilo de que tu
            informacion estará encriptada.
          </p>
        </div>
      </div>
      <div>
        <Link to="/home">
          <button>
            <p>Vuelve al Inicio</p>
          </button>
        </Link>
      </div>
    </div>
  );
}
