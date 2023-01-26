import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../../Assets/Images/Logo.png";
import './NavDashboard.css'


export default function NavDashboard() {

  return (
    <div className="header-dash">
      <div className="contlogo">
        <Link to="/">
          <img className="logodash" src={Logo} alt="logo_Adilbet" />
        </Link>
      </div>
    </div>
  );
}

