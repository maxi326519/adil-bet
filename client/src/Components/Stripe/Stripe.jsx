import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
import axios from "axios";
import swal from "sweetalert";

import "./Stripe.css";

const stripePromise = loadStripe(
  "pk_test_51MPqgHHDF8goU6ElSNxHEMDSRl3jnVFalpylIlOwIyF6ppIrWdXL8j6QI4JLwtO2h94rz0703e0zgoKuH8t6675C00VxHwEQzT"
);

const CheckoutForm = (props) => {
  const [amount, setAmount] = useState(0);
  const stripe = useStripe();
  const elementsUse = useElements();
  const user = useSelector(state => state.userDates);
  const [ data, setData] = useState({})

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Creamos el metodo de pago
    const { paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elementsUse.getElement(CardElement),
      billing_details: {
        name: data.name,
        email: data.email,

      }
    });

    const response = await axios.post('/create-checkout-session', {
      payment_method: paymentMethod.id,
      amount:  amount /* Traer del estado */,
      userId: user.id,
      dataEmail: data
    })

    props.handleLoading()

    if (response.data.message === 'Successful Payment') {
      swal({
        title: "RECARGA EXITOSA",
        text: "MUCHAS GRACIAS POR SU RECARGA",
        button: "ACEPTAR"
      }).then(function() {
        window.location = "/home";
    });
    }
  }

  function handlerData (e){
    setData({
      ...data,
    [e.target.name]: e.target.value
    })
  }

  const handleInputChange = (inputAmount) => {
    setAmount(inputAmount);
  }


  return (
    <form onSubmit={handleSubmit} className="card card-body">
      <div class="mb-3">
      <label for="exampleFormControlInput2" class="form-label">Name of owner</label>
      <input type="text" class="form-control" name="name" id="exampleFormControlInput2" placeholder="account holder name" onChange={handlerData}/>
      </div>
      <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Email address</label>
      <input type="email" class="form-control" name="email" id="exampleFormControlInput1" placeholder="name@example.com" onChange={handlerData}/>
      </div>
      <div className="form-group">
      <label for="card-element">Credit or debit card</label>
        <CardElement className="bg-white rounded-md py-3 my-6" />
      </div>
      <select
        onChange={e => handleInputChange(e.target.value)}
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
      <button className="btn btn-success" type='submit'>Pagar</button>
    </form>
  );
};

export default function Stripe() {

  const [loading, setLoading] = useState(false)

 const handleLoading = () => {
   setLoading(!loading)
 }

  return (
    <div className="background">
    <Elements stripe={stripePromise}>
      <CheckoutForm handleLoading={handleLoading}/>
      {
      loading ? (
        <div className="loading-container">
          <img src="https://i.pinimg.com/originals/65/ba/48/65ba488626025cff82f091336fbf94bb.gif" alt='loading'></img>
        </div>) : null
      }
    </Elements>
    </div>
  );
}