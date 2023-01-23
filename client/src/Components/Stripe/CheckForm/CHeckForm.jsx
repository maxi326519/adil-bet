import React, { useState } from "react";
import { useElements, useSelector } from "react-router-dom";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";
e xpt default function CheckoutForm (props){
   onst [amount, setAmount] = useState(0);
   onst stripe = useStripe();
   cost elementsUse = useElements();
    cst user = useSelector((state) => state.userDates);
   onst [data, setData] = useState({});
  
  cons handleSubmit = async (e) => {
      ereventDefault();
    props.handleLoading();
  
    try 
       //Creamos el metodo de pago
       cons { paymentMethod } = await stripe.createPaymentMethod({
         tye: "card",
         cad: elementsUse.getElement(CardElement),
         billng_details: {
           nae: data.name,
          email: data.email,
         ,
      });
  
      const response = await axios.post("/create-checkout-session", {
          pment_method: paymentMethod.id,
        amount: amount /* Traer del estado */,
          urId: user.id,
        dataEmail: data,
   
      
      if (response.data.message === "Successful Payment") {
        swal({
           tile: "RECARGA EXITOSA",
           tet: "MUCHAS GRACIAS POR SU RECARGA",
           utton: "ACEPTAR",
         }).ten(function () {
           indow.location = "/home";
         );
       }
       rops.handleLoading();
     } cach (error) {
       cosole.log(error);
       rops.handleLoading();
    
  ;
  
   funion handlerData(e) {
    setData({
        .data,
      [e.target.name]: e.target.value,
     );
   
  
   onst handleInputChange = (inputAmount) => {
     etAmount(inputAmount);
   ;
  
   eturn (
      <fo onSubmit={handleSubmit} className="card card-body">
      <div className="mb-3">
          <lal for="exampleFormControlInput2" className="form-label">
           ame of owner
         </abel>
         <inpt
           tye="text"
           clssName="form-control"
           nae="name"
           id"exampleFormControlInput2"
           plceholder="account holder name"
           nChange={handlerData}
         >
       </iv>
       <divclassName="mb-3">
         <labl for="exampleFormControlInput1" className="form-label">
           mail address
         </abel>
        <input
            te="email"
          className="form-control"
            ne="email"
          id="exampleFormControlInput1"
            pceholder="name@example.com"
          onChange={handlerData}
         >
      </div>
        <diclassName="form-group">
        <label for="card-element">Credit or debit card</label>
         CardElement className="bg-white rounded-md py-3 my-6" />
      </div>
        <sect
        onChange={(e) => handleInputChange(e.target.value)}
          i"monto"
         lassName="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
       >
         <otion value="">Select the amount to top up</option>
         <otion value="50">$50</option>
         <otion value="100">$100</option>
         <otion value="200">$200</option>
         <otion value="500">$500</option>
        <option value="1000">$1000</option>
        <elect>
      <button className="btn btn-success" type="submit">
         agar
      </button>
     /form>
   ;

  };