import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import swal from "sweetalert";

import "./CheckoutForm.css";

export default function CheckoutForm({ setLoading }) {
  const [amount, setAmount] = useState(0);
  const stripe = useStripe();
  const elementsUse = useElements();
  const user = useSelector((state) => state.userDates);
  const userLocal = JSON.parse(window.localStorage.getItem('user'))
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
        text: 'Hubo un error',
        button: "ACEPTAR",
      }).then(function () {
        window.location = "/payment";
      });
    }
  };

  function handleSubmit(e) {
    e.preventDefault();
    if(data.name && data.name.length > 0){

    }else if(data.email && data.email.length > 0){

    }else{
      setLoading(true);
      handleAxios();
    }
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
    <form onSubmit={handleSubmit} className="card card-body">
      <div className="mb-3">
        <label for="exampleFormControlInput2" className="form-label">
          Name of owner
        </label>
        <input
          type="text"
          className="form-control"
          name="name"
          id="exampleFormControlInput2"
          placeholder="account holder name"
          onChange={handlerData}
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          name="email"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
          onChange={handlerData}
        />
      </div>
      <div className="form-group">
        <label for="card-element">Credit or debit card</label>
        <CardElement className="bg-white rounded-md py-3 my-6" />
      </div>
      <select
        onChange={(e) => handleInputChange(e.target.value)}
        id="monto"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="">Select the amount to top up</option>
        <option value="50">$50</option>
        <option value="100">$100</option>
        <option value="200">$200</option>
        <option value="500">$500</option>
        <option value="1000">$1000</option>
      </select>
      <button className="btn btn-success" type="submit">
        Pagar
      </button>
    </form>
  );
}
