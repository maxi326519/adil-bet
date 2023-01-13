import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateProfile } from "../../../redux/actions/PATCH/index";
import { useParams } from "react-router";

export default function UserProfile() {
  const [userData, setUserData] = useState({
    userName: "",
    email: "",
    phone: "",
  });

  const [disabled, setDisabled] = useState(true);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userDates);

  // user.phone !== userData.phone ? userData.phone : user.phone

  console.log(userData);
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await dispatch(updateProfile(user.id, userData))
      .then(() => {
        console.log("usuario actualizado correctamente!");
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
    <form onSubmit={handleSubmit}>
      <div>
        <h3>Nombre: {user.name} </h3>
        <div>
          UserName:
          <input
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
        <h3>
          Email: {user.email !== userData.email ? userData.email : user.email}
        </h3>
        <div>
          Email:
          <input
            type="text"
            name="email"
            value={userData.email}
            placeholder={user.email}
            onChange={(e) => handleChange(e)}
            onKeyDown={handleKeyDown}
            disabled={disabled}
          />
        </div>
        <h3>Phone: {user.phone} </h3>
        <div>
          Phone:
          <input
            type="text"
            name="phone"
            value={user.phone !== userData.phone ? userData.phone : user.phone}
            placeholder={user.phone}
            onChange={(e) => handleChange(e)}
            onKeyDown={handleKeyDown}
            disabled={disabled}
          />
        </div>

        <h3>Wallet: {user.wallet} </h3>
      </div>
      <button onClick={handleDisabled}>Editar</button>
      <button type="submit">Save</button>
    </form>
  );
}
