import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Link } from "react-router-dom";
import './LoginButton.css'

const LoginButton = () => {
  return (
    <div className="container-buttons">
      <Link to="/login">
        <button className="button-login-navbar">Ingresar</button>
      </Link>
      <Link to="/signin">
        <button className="button-login-navbar">Registrar</button>
      </Link>
    </div>
  );
};

export default LoginButton;
