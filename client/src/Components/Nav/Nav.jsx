import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images";
import "./Nav.css";
import "../Home/Home";
import "../Promotions/Promotions";
import "../Tutorial/Tutorial";
import "../About/About";
import Signin from "../Signin/Signin";
import Login from "../Login/Login";

export default function Nav() {
  return (
    <div className="header">
      <nav className="nav">
        <img className={"logo"} src={logo} alt="logo_Adilbet" />

        <Link to="/home">
          <h1 className="link_home nav-menu-link">HOME</h1>
        </Link>

        <Link to="/promotions">
          <h1 className="link_promotions nav-menu-link">PROMOCIONES</h1>
        </Link>

        <Link to="/tutorial">
          <h1 className="link_tutorial nav-menu-link">TUTORIAL</h1>
        </Link>

        <Link to="/about">
          <h1 className="link_about ">NOSOTROS</h1>
        </Link>

        <div className="login">
          <Login />
        </div>

        <div className="signin">
          <Signin />
        </div>
      </nav>
    </div>
  );
}
