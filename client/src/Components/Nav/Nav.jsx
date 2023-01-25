import React from "react";
import { Link } from "react-router-dom";
//import logo from "../../images";
import "./Nav.css";
import Signin from "../Signin/Signin";
import Login from "../Login/Login";
import Logo from "../../Assets/Images/Logo.png";
import LoginButton from "./LoginButton/LoginButton.jsx";
import LogoutButton from "./LogoutButton/LogoutButton.jsx";
import { useDispatch, useSelector } from "react-redux";
import MyAccountButton from "./MyAccountButton/MyAccountButton";
import Wallet from "./Wallet/Wallet";

import cart from "../../Assets/svg/Nav/cart.svg";

export default function Nav() {
  const dispatch = useDispatch();
  const userDates = useSelector((state) => state.userDates);

  return (
    <div className="header">
      <div className="contlogo">
        <Link to="/">
          <img className="logo" src={Logo} alt="logo_Adilbet" />
        </Link>
      </div>
      <div className="menu">
        <Link to="/home" className="nav-menu-link">
          <span>Home</span>
        </Link>

        <Link to="/promotions" className="nav-menu-link">
          <span>Promociones</span>
        </Link>

        <Link to="/tutorial" className="nav-menu-link">
          <span>Tutorial</span>
        </Link>

        <Link to="/about" className="nav-menu-link">
          <span>Nosotros</span>
        </Link>
      </div>

      <div className="sesion">
        {Object.entries(userDates).length === 0 ? (
          <LoginButton />
        ) : (
          <div className="sesions-btn">
            <Wallet />
            <MyAccountButton />
            <LogoutButton />
            {userDates.isAdmin ? (
              <Link to="/dashboard">
                <button className="btn btn-primary btn-color">ADMIN</button>
              </Link>
            ) : null}
          </div>
        )}
      </div>
    </div>
  );
}
