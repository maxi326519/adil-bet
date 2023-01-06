import React from "react";
import { Link } from "react-router-dom";
//import logo from "../../images";
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
        <div className="menu">
          {/* <img className={"logo"} src={logo} alt="logo_Adilbet" /> */}

          <Link to="/home">
            <span className="link_home nav-menu-link">Home</span>
          </Link>

          <Link to="/promotions">
            <span className="link_promotions nav-menu-link">Promociones</span>
          </Link>

          <Link to="/tutorial">
            <span className="link_tutorial nav-menu-link">Tutorial</span>
          </Link>

          <Link to="/about">
            <span className="link_about nav-menu-link">Nosotros</span>
          </Link>
        </div>

        <div className="secion">
          <Link to="/login">
            <span className="link_about ">Login</span>
          </Link>

          <Link to="/signin">
            <span className="link_about ">Signin</span>
          </Link>
        </div>
      </nav>
    </div>
  );
}
