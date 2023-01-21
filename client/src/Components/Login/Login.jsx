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
          <h3 className="title-login">Inicia Sesion</h3>
          <form onSubmit={handleSubmit} className="form-body">

          {/* EMAIL */}
          <div class="form-floating mb-3">
              <input
                type="email"
                name="email"
                class="form-control"
                placeholder="name@example.com"
                onChange={handleChange}
              />
              <label for="floatingInput">Correo electronico</label>
            </div>

            {/* PASSWORD */}
            <div class="form-floating mb-3">
              <input
                type="password"
                name="password"
                class="form-control"
                placeholder="name@example.com"
                onChange={handleChange}
              />
              <label for="floatingInput">Contraseña</label>
            </div>

            <div className="button-check-register">
              <button className="btn btn-primary btn-color">Iniciar Sesion</button>
            </div>

          </form>
            <button
              onClick={() => loginWithRedirect()}
              className="container-google"
            >
            <img
              src="https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png"
              alt="google-logo"
              className="google-logo"
            />
              Registrarse con Google
            </button>
            <div className="register-link">
              <p className="text-form-register">¿No tienes cuenta?</p>
              <Link to="/signin" className="btn btn-outline-primary">Registarse</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
