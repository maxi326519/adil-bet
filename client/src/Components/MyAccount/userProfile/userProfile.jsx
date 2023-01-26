import React, { /*useEffect,*/ useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateProfile } from "../../../redux/actions/PATCH/index";
import /*useParams*/ "react-router";
import { FaUser } from "react-icons/fa";
import Swal from "sweetalert2";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import styles from "./userProfile.module.css";

export default function UserProfile() {
  const [userData, setUserData] = useState({
    name: "...",
    userName: "...",
    email: "...",
    phone: "",
  });
  // nuevos estados para mostrar mensajes de error
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const [disabled, setDisabled] = useState(true);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userDates);

  useEffect(() => {
    console.log(user);
    if (user) {
      setUserData({
        name: user.name,
        userName: user.userName,
        email: user.email,
        phone: user.phone,
      });
    }
  }, [user]);

  const handleChange = (e) => {
    // Validar formato de correo electrónico y teléfono
    if (e.target.name === "email") {
      const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
      if (!emailRegex.test(e.target.value)) {
        setEmailError("Debes ingresar un correo válido");//message ok
        console.log();
      } else {
        setEmailError("");
      }
    }
    else if (e.target.name === "phone") {
      const phoneRegex = /^[+]{0,1}[0-9]{0,}$/;
      if (!phoneRegex.test(e.target.value)) {
        setPhoneError("Debes ingresar un número de teléfono válido");
      } else {
        setPhoneError("");
      }
    }

    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(updateProfile(user.id, userData))
      .then(() => {
        toast("¡Usuario actualizado correctamente!");
      })
      .catch((error) => {
        toast("Error al actualizar usuario", error);
      });
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  const handleDisabled = () => {
    setUserData({
      name: user.name,
      userName: user.userName,
      email: user.email,
      phone: user.phone,
    });
    setDisabled(!disabled);
  };

  return (
    <div className={styles.profile}>
      <ToastContainer />

      <div className={styles.formContainer}>
        {/* NOMBRE */}
        <form onSubmit={handleSubmit}>
          <div className={styles.avatar}>
            <FaUser />
          </div>
          <div className="containerProfile">
            <label for="exampleInputEmail1">Nombre y Apellido</label>
            <input
              type="text"
              name="name"
              className="form-control"
              value={userData.name}
              placeholder={userData.name}
              onChange={(e) => handleChange(e)}
              onKeyDown={handleKeyDown}
              disabled={disabled}
            />
            <small className="form-text text-muted invalid-feedback">
              {/* Agregar validaciones del usuario */}
            </small>
          </div>

          {/* USUARIO */}
          <div className="containerProfile">
            <label for="exampleInputEmail1" className="titleInput">
              Usuario
            </label>
            <input
              type="text"
              name="userName"
              className="form-control"
              value={userData.userName}
              placeholder={userData.userName}
              onChange={(e) => handleChange(e)}
              onKeyDown={handleKeyDown}
              disabled={disabled}
            />
            <small className="form-text text-muted invalid-feedback">
              {/* Agregar validaciones del usuario */}
            </small>
          </div>

          {/* EMAIL */}
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={userData.email}
              placeholder={userData.email}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              onChange={(e) => handleChange(e)}
              onKeyDown={handleKeyDown}
              disabled={disabled}
            />
            <small>{emailError}</small>
          </div>

          {/* TELEFONO */}
          <div className="form-group">
            <label for="exampleInputEmail1">Teléfono</label>
            <input
              type="tel"
              name="phone"
              className="form-control"
              pattern="[+]{0,1}[0-9]{0,}$"
              value={userData.phone}
              placeholder={userData.phone}
              onChange={(e) => handleChange(e)}
              onKeyDown={handleKeyDown}
              disabled={disabled}
            />
            <small className="invalid-feedback">{phoneError}</small>
          </div>
        </form>
        {disabled ? (
          <div className={styles.btnContainer}>
            <button className="btn btn-success" onClick={handleDisabled}>
              Modificar
            </button>
          </div>
        ) : (
          <div className={styles.btnContainer}>
            <button className="btn btn-success" onClick={handleDisabled}>
              Cancelar
            </button>
            <button className="btn btn-success" onClick={handleSubmit}>
              Guardar
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
