import React from "react";
import { Link } from "react-router-dom";
//import logo from "../../images";
import "./Nav.css";
import "../Home/Home";
import "../Promotions/Promotions";
import "../Tutorial/Tutorial";
import "../About/About";
import Signin from "../Signin/Signin";
import Login from "../Login/Login";
import Logo from "../../Assets/Images/Logo.png";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../LoginButton/LoginButton.jsx";
import LogoutButton from '../LogoutButton/LogoutButton.jsx' ;
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import {postLoginUserAuth0} from '../../redux/actions/POST/index.js'
import MyAccountButton from "../MyAccountButton/MyAccountButton";

export default function Nav() {

  const { user } = useAuth0();
  const dispatch = useDispatch ();
  const userDates = useSelector(state => state.userDates)

  useEffect(() => {
      dispatch(postLoginUserAuth0({email:user?.email, name:user?.name}))}, [user]);

  return (
    <div className="header">
      <nav className="nav">
        <div className="menu">
          <Link to="/">
            <img className="logo" src={Logo} alt="logo_Adilbet" />
          </Link>

          <Link to="/home">
            <span className="link_home nav-menu-link">Home</span>
          </Link>

          <Link to="/promotions">
            <span className="link_promotions nav-menu-link">Promociones</span>
          </Link>

          <Link to="/tutorial">
            <span className="link_tutorial nav-menu-link">Tutorial</span>
          </Link>

          <Link to="/about">
            <span className="link_about nav-menu-link">Nosotros</span>
          </Link>
        </div>

        <div className="secion">
          {Object.entries(userDates).length === 0? <LoginButton/>:<LogoutButton/>}
          {Object.entries(userDates).length === 0? null:<MyAccountButton/>}
          {/* <Link to="/login">
            <span className="link_about ">Login</span>
          </Link> */}

          {/* <Link to="/signin">
            <span className="link_about ">Signin</span>
          </Link> */}
        </div>
      </nav>
    </div>
  );
}
