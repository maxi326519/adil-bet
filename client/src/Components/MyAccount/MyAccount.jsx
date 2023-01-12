import React from "react";
import UserActivity from "../userActivity/userActivity";
import UserProfile from "./userProfile/userProfile";
//import Wallet from "../wallet/wallet";

export default function MyAccount() {
  // LA INFORMACION DEL USUARIO ESTA EN EL ESTADO DE REDUX USERDATES REVISAR EL REDUCER
  return (
    <div>
      <p>Soy Mi Cuenta</p>
      <UserProfile />
      <UserActivity />
    </div>
  );
}
