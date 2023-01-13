import React, { useState } from "react";
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
import { useSelector } from 'react-redux';
import cors from 'cors';

const stripePromise = loadStripe(
  "pk_test_51MHby8F7eyBevS9ZTF3WvgrNWzEcmymWJE8d9KquqyAMHBwF1dIqEILuNBoAaa7Sgi3ZiEoZtWSps2gjdl9UNVpP00kXKAwJOc"
);

const CheckoutForm = (props) => {
  const [amount, setAmount] = useState(0);
  const stripeUse = useStripe();
  const elementsUse = useElements();
  const dispatch = useDispatch()

  const user = useSelector(state => state.userDates.id);
  console.log(user);

  const handleChangeInput = (e) =>{
    e.preventDefault()
    setAmount(e.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripeUse.createPaymentMethod({
      type: "card",
      card: elementsUse.getElement(CardElement),
    });
     console.log(paymentMethod)
    if (!error) {
      const { id } = paymentMethod;
      console.log(id)


      //el userId se debe obtener del estado de redux con useSelector y la cantidad se debe obtener de un estado useState del input 

      const data = await axios.post(
        "http://localhost:3001/create-checkout-session",
        {
          "id": id,
          "amount": amount,
          "userId": user,
        },
        { withCredentials: true }
      );
      if(data.message === "Successful Payment"){
        const paid={
          "method": "Stripe",
          "amount": amount,
          "userId": user,
        }

        dispatch(addDeposit(paid))
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="card card-body">
      <div className="form-group">
        <CardElement className="form-control" />
      </div>
      <input type='number' onChange={handleChangeInput}></input>
      <button className="btn btn-success" type='submit'>Pagar</button>
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
