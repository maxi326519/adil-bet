import React, { useState } from "react";
import { Link } from "react-router-dom";
import { postLoginUser } from "../../redux/actions/POST/index.js";
import { useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import Logo from "../../Assets/Images/Logo.png";

const INITIAL_STATE = {
  email: "",
  password: "",
};

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  const [login, setLogin] = useState(INITIAL_STATE);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (evt) => {
    evt.preventDefault();
    console.log(login);
    dispatch(postLoginUser(login));
    setLogin(INITIAL_STATE);
    return navigate("/home");
  };
  const handleChange = (evt) => {
    const { name, value } = evt.currentTarget;
    setLogin({
      ...login,
      [name]: value,
    });
  };

  return (
    <div className="container-Login">
      <div className="container-logo-adilbet">
        <img src={Logo} alt="Logo-adilbet" className="Logo-login" />
      </div>
      <div className="container-form-all">
        <Link to="/home">
          <button className="btn-X">
            <span>X</span>
          </button>
        </Link>
        <div className="container-form">
          <h3 className="title-login">Inicia Sesion.</h3>
          <form onSubmit={handleSubmit} className="form-body">
            <p className="text-login">Correo electronico</p>
            <input
              className="form-input"
              placeholder="Correo Electronico"
              name="email"
              onChange={handleChange}
              value={login.email}
              type="email"
            />
            <p className="text-login">Contraseña</p>
            <input
              className="form-input"
              placeholder="Contraseña"
              name="password"
              onChange={handleChange}
              value={login.password}
              type="password"
            />
            <div className="container-button-login">
              <button type="submit" className="button-form-login">
                Ingresar
              </button>
              <div>
                <p className="text-form-register">No tienes cuenta?</p>
                <div className="button-form-register-cont">
                  <Link to="/register" className="button-form-register">
                    Registrate
                  </Link>
                </div>
              </div>
            </div>
          </form>
          <div className="container-google">
            <img
              src="https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png"
              alt="google-logo"
              className="google-logo"
            />
            <button
              onClick={() => loginWithRedirect()}
              className="button-google"
            >
              Registrarte con Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
