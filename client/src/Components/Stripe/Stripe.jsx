import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements
} from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm/CheckoutForm";
import Loading from "../Loading/Loading";

import "./Stripe.css";

const stripePromise = loadStripe(
  "pk_test_51MPqgHHDF8goU6ElSNxHEMDSRl3jnVFalpylIlOwIyF6ppIrWdXL8j6QI4JLwtO2h94rz0703e0zgoKuH8t6675C00VxHwEQzT"
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