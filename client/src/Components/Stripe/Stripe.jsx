import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements
} from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm/CheckoutForm";
import Loading from "../Loading/Loading";

import "./Stripe.css";

const stripePromise = loadStripe(
  "pk_test_51MUWj9BawCLw8uloI38vPLO0dieWdb37F9RM5i8Y5Q096rwD6790KV54ZZcI4E1IJblTG8pM4f4hiC8YxMx0bD37007zi7aenT"
);

export default function Stripe() {
  const [loading, setLoading] = useState(false);

  return (
    <div className="background">
      <Elements stripe={stripePromise}>
        <CheckoutForm setLoading={setLoading} />
      </Elements>
      {loading ? <Loading /> : null}
    </div>
  );
}