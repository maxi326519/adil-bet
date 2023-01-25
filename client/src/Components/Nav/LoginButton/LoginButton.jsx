import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Link } from "react-router-dom";
import './LoginButton.css'

const LoginButton = () => {
  return (
    <div className="container-buttons">
      <Link to="/login">
        <button className="btn btn-primary btn-color">Ingresa</button>
      </Link>
      <Link to="/signin">
        <button className="btn btn-primary btn-color">Regístrate</button>
      </Link>
    </div>
  );
};

export default LoginButton;
