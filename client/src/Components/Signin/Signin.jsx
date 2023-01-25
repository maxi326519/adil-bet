import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { postCreateUser } from "../../redux/actions/POST/index";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import "./Signin.css";
import Logo from "../../Assets/Images/Logo.png";
const INITIAL_STATE = {
  name: "",
  userName: "",
  email: "",
  password: "",
  confirm_password: "",
  phone: "",
  wallet: 0,
  isActive: true,
  isAdmin: false,
};

const CreateUserForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loginWithRedirect } = useAuth0();
  const [register, setRegister] = useState(INITIAL_STATE);

  const [validateRegister, setValidateRegister] = useState({
    name: true,
    userName: true,
    email: true,
    password: true,
    confirm: true,
    equalsPassword: true,
    phone: true
  });

  const expresiones = {
    name: /^[a-zA-ZÀ-ÿ\s]{5,40}$/, // Letras y espacios, pueden llevar acentos.
    userName: /^[a-zA-Z0-9_.+-]{5,40}$/,
    password: /^[\s\S]{8,25}$/, // 4 a 12 digitos.
    email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    phone: /^[+]{0,1}[0-9]{0,}$/
  };

  const handleChange = (evt) => {
    const { name, value } = evt.currentTarget;

    setRegister({
      ...register,
      [name]: value,
    });

    if(expresiones[name]){
      setValidateRegister({
        ...validateRegister,
        [name]: expresiones[name].test(value.trim()),
      });
    }

    if(name === 'confirm_password'){
      if((value.length >= 8) && (value !== register.password)){
        console.log(value, register.password);
        setValidateRegister({
          ...validateRegister,
          confirm: false
        });
      }else{
        setValidateRegister({
          ...validateRegister,
          confirm: true
        });
      }
    }
  };

  const handleSubmitRegister = async (evt) => {
    evt.preventDefault();
    dispatch(postCreateUser(register));
    setRegister(INITIAL_STATE);
    return navigate("/home");
  };

  return (
    <div className="container-register">
      <div className="container-logo-adilbet">
        <img src={Logo} alt="Logo-adilbet" className="Logo-login" />
      </div>
      <div className="container-register-form">
        <div className="container-form-body">
          <h3 className="title-form">Registrate</h3>
          <form onSubmit={handleSubmitRegister} className="form-body">
            {/* NOMBRE */}
            <div className="form-floating mb-3 ">
              <input
                type="text"
                name="name"
                className={`form-control ${
                  validateRegister.name ? "" : "is-invalid"
                }`}
                id={
                  validateRegister.name
                    ? "floatingInputInvalid"
                    : "floatingInput"
                }
                placeholder="name"
                onChange={handleChange}
              />
              <label for="floatingInput">Nombre</label>
              {validateRegister.name ? null : (
                <small className="span-form">
                  El nombre no puede contener numeros y menos de 5 letras
                </small>
              )}
            </div>

            {/* USUARIO */}
            <div className="form-floating mb-3">
              <input
                type="text"
                name="userName"
                className={`form-control ${
                  validateRegister.userName ? "" : "is-invalid"
                }`}
                id={
                  validateRegister.userName
                    ? "floatingInputInvalid"
                    : "floatingInput"
                }
                placeholder="name"
                onChange={handleChange}
              />
              <label for="floatingInput">Nombre de usuario</label>
              {validateRegister.userName ? null : (
                <small className="span-form">
                  Letras, numeros y los siguientes simbolos: _ . -
                </small>
              )}
            </div>

            {/* EMAIL */}
            <div className="form-floating mb-3">
              <input
                type="email"
                name="email"
                className={`form-control ${
                  validateRegister.email ? "" : "is-invalid"
                }`}
                id={
                  validateRegister.email
                    ? "floatingInputInvalid"
                    : "floatingInput"
                }
                placeholder="name@example.com"
                onChange={handleChange}
              />
              <label for="floatingInput">Email address</label>
              {validateRegister.email ? null : (
                <small className="span-form">
                  El correo electronico no es valido
                </small>
              )}
            </div>

            {/* CONTRASEÑA */}
            <div className="form-floating mb-3">
              <input
                type="password"
                name="password"
                className={`form-control ${
                  validateRegister.password && validateRegister.confirm ? "" : "is-invalid"
                }`}
                id="floatingInput"
                placeholder="Contraseña"
                value={register.password}
                onChange={handleChange}
              />
              <label for="floatingInput">Contraseña</label>
              {validateRegister.password ? null : (
                <small className="span-form">
                  La contraseña tiene que contener minimo 8 caracteres
                </small>
              )}
            </div>

            {/* CONFIRMAR CONTRASEÑA */}
            <div className="form-floating mb-3">
              <input
                type="password"
                name="confirm_password"
                placeholder="Confirmar Contraseña"
                className={`form-control ${
                  validateRegister.confirm
                  ? null : "is-invalid"
                }`}
                id={
                  validateRegister.confirm
                    ? "floatingInputInvalid"
                    : "floatingInput"
                }
                value={register.confirm}
                onChange={handleChange}
              />
              <label for="floatingInput">Confirmar contraseña</label>
              {validateRegister.confirm ? null : (
                <small className="span-form">
                  Las contraseñas no coinciden
                </small>
              )}
            </div>

            {/* TELEFONO */}
            <div className="form-floating mb-3">
              <input
                type="tel"
                name="phone"
                placeholder="Telefono"
                className={`form-control ${
                  validateRegister.phone
                  ? null : "is-invalid"
                }`}
                id={
                  validateRegister.phone
                    ? "floatingInputInvalid"
                    : "floatingInput"
                }
                value={register.phone}
                onChange={handleChange}
              />
              <label for="floatingInput">Telefono</label>
              {validateRegister.phone ? null : (
                <small className="span-form">
                  El formato es incorrecto
                </small>
              )}
            </div>

            {/* BOTON DE REGISTRO */}
            <div className="button-check-register">
              <button className="btn btn-primary btn-color">Registrarse</button>
            </div>

            {/* Auth0 de 3ros */}
            <button
              onClick={() => loginWithRedirect()}
              className="container-google"
            >
              <img
                src="https://rotulosmatesanz.com/wp-content/uploads/2017/09/2000px-Google_G_Logo.svg_.png"
                alt="google-logo"
                className="google-logo"
              />
              Iniciar con Google
            </button>
          </form>
          <div className="register-link">
            <p className="text-form-register">¿Ya tienes cuenta?</p>
            <Link to="/login" className="btn btn-outline-primary">
              Iniciar sesion
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateUserForm;
