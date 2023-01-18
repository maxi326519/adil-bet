import React from "react";
import { Link } from 'react-router-dom';

import './MyAccountButton.css'
import account from '../../../Assets/svg/Nav/user.svg';

const MyAccountButton = () => {
  return (
    <div className="container-myaccount-button">
      <Link to='/myaccount'>
      <button className="btn btn-primary btn-color"><img src={ account } alt='account' /></button>
      </Link>
    </div>
  )
};

export default MyAccountButton;