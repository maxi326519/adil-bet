import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import './LogoutButton.css'

const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button onClick={() => logout({ returnTo: window.location.origin })} className='button-logout-navbar'>
      Cerrar Sesion
    </button>
  );
};

export default LogoutButton;
