import React, { /*useEffect,*/ useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateProfile } from "../../../redux/actions/PATCH/index";
import /*useParams*/ "react-router";
import { FaUser } from "react-icons/fa";
import Swal from "sweetalert2";

import "./userProfile.css";

export default function UserProfile() {
  const [userData, setUserData] = useState({
    userName: "",
    email: "",
    phone: "",
  });
  // nuevos estados para mostrar mensajes de error
  const [emailError, setEmailError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);

  const [disabled, setDisabled] = useState(true);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userDates);

  console.log(userData);
  const handleChange = (e) => {
    // Validar formato de correo electrónico y teléfono
    if (e.target.name === "email") {
      const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
      if (!emailRegex.test(e.target.value)) {
        setEmailError("Debes ingresar un correo válido");
      } else {
        setEmailError("");
      }
    }
    if (e.target.name === "phone") {
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
        console.log("usuario actualizado correctamente!");

        setShowSuccessAlert(true);
        
      })
      .catch((error) => {
        console.log("Error al actualizar usuario:", error);
      });
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  const handleDisabled = () => {
    setDisabled(!disabled);
  };

  return (
    <form className="formProfile" onSubmit={handleSubmit}>
      {showSuccessAlert && (
        <Swal
          title="¡Exito!"
          text="El perfil del usuario ha sido actualizado."
          icon="success"
          onClose={() => setShowSuccessAlert(false)}
        />
      )}

      <div>
        <h3>{user.name} </h3>
        <FaUser />
        <div className="containerProfile">
          <h3>Usuario</h3>
          <input
            className="inputProfile"
            type="text"
            name="userName"
            value={
              user.userName !== userData.userName
                ? userData.userName
                : user.userName
            }
            placeholder={user.userName}
            onChange={(e) => handleChange(e)}
            onKeyDown={handleKeyDown}
            disabled={disabled}
          />
        </div>
        <h3>Email</h3>
        <div>
          <input
            className="inputProfile"
            type="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            name="email"
            value={user.email !== userData.email ? userData.email : user.email}
            placeholder={user.email}
            onChange={(e) => handleChange(e)}
            onKeyDown={handleKeyDown}
            disabled={disabled}
          />
          <h5>{emailError}</h5>
        </div>
        <h3>Phone</h3>
        <div>
          <input
            className="inputProfile"
            type="tel"
            pattern="[+]{0,1}[0-9]{0,}"
            name="phone"
            value={user.phone !== userData.phone ? userData.phone : user.phone}
            placeholder={user.phone}
            onChange={(e) => handleChange(e)}
            onKeyDown={handleKeyDown}
            disabled={disabled}
          />
          <h5>{phoneError}</h5>
        </div>
      </div>
      <div className="buttonsProfile">
        <button className="button1" onClick={handleDisabled}>
          Modificar
        </button>
        <button className="button2" type="submit">
          Guardar
        </button>
      </div>
      <h4>Wallet : $ {user.wallet} </h4>
    </form>
  );
}
