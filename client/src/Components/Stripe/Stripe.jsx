import React, { useState } from "react";
import { useSelector } from 'react-redux';
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import "bootswatch/dist/united/bootstrap.min.css";
import "bootstrap";
import "./Stripe.css";
import {useDispatch} from 'react-redux'
import {addDeposit} from '../../redux/actions/POST/index.js'

const stripePromise = loadStripe(
  "pk_test_51MPqgHHDF8goU6ElSNxHEMDSRl3jnVFalpylIlOwIyF6ppIrWdXL8j6QI4JLwtO2h94rz0703e0zgoKuH8t6675C00VxHwEQzT"
);

const CheckoutForm = (props) => {
  const stripe = useStripe();
  const elementsUse = useElements();
  const dispatch = useDispatch()
  const user = useSelector(state => state.userDates);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Creamos el metodo de pago
    const { paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elementsUse.getElement(CardElement),
      billing_details: {
        name: user.name,
        email: user.email,
        
      }
    });

    // Hacemos el post al back con al info del pago
    const response = await axios.post("/create-checkout-session",
      {
        payment_method: paymentMethod.id,
        amount: 100,
        userId: user.id
      }
    );
  };

  return (
    <form onSubmit={handleSubmit} className="card card-body">
      <div className="form-group">
        <CardElement className="form-control" />
      </div>
      <button className="btn btn-success">Pagar</button>
    </form>
  );
};

export default function Stripe() {
  return (
    <Elements stripe={stripePromise}>
      <div className="container p-4">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <CheckoutForm />
          </div>
        </div>
      </div>
    </Elements>
  );
}