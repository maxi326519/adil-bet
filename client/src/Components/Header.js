import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import LoginButton from "./LoginButton.js";
import LogoutButton from "./LogoutButton.js";
import { useEffect } from 'react';
import {useDispatch} from 'react-redux'
import {postLoginUserAuth0} from '../redux/actions/POST/index.js'
import Profile from "./Profile";

const Header = () => {
    const { isAuthenticated, logout, user } = useAuth0();
    const dispatch = useDispatch ();

    useEffect(() => {
        dispatch(postLoginUserAuth0({email:user?.email, name:user?.name}))}, [user]);

    return (
        <div>
            { user ? <LogoutButton/>:<LoginButton/> }            
        </div>
    );
};

//localStorage.setItem(name, content)
//localStorage.getItem(name, content)

export default Header;