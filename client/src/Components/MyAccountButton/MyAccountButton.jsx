import React from "react";
import { Link } from 'react-router-dom';

const MyAccountButton = () => {
  return (
    <div>
      <Link to='/myaccount'>
      <button >Mi cuenta</button>;
      </Link>
    </div>
  )
};

export default MyAccountButton;