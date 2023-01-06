import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import { Link } from 'react-router-dom';

const LoginButton = () => {
  return (
    <div>
      <Link to='/login'>
      <button >Log In</button>;
      </Link>
    </div>
  )
};

export default LoginButton;