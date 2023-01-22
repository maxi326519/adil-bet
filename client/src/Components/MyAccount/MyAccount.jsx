import React from "react";
import { getUserActivity } from "../../redux/actions/GET";
import UserActivity from "../userActivity/userActivity";
import UserProfile from "./userProfile/userProfile";
import { Link } from "react-router-dom";

import "../Home/Home";
import "./MyAccount.css";

export default function MyAccount() {
  // LA INFORMACION DEL USUARIO ESTA EN EL ESTADO DE REDUX USERDATES REVISAR EL REDUCER
  return (
    <div className="main_container">
      <div className="myAccount">
        <div>
          <p>MI CUENTA</p>
        </div>
        <UserProfile />
        <UserActivity />
        <Link to="/home">
          <button className="home-button">Home</button>
        </Link>
      </div>
    </div>
  );
}
