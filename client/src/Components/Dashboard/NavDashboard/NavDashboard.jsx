import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../../Assets/Images/Logo.png";


export default function NavDashboard() {

  return (
    <div className="header">
      <div className="contlogo">
        <Link to="/">
          <img className="logo" src={Logo} alt="logo_Adilbet" />
        </Link>
      </div>
    </div>
  );
}

