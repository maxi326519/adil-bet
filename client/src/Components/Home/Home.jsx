import React from "react";
import LoginButton from "../LoginButton.js";
import LogoutButton from "../LogoutButton.js";
import { useEffect } from 'react';
import {useDispatch} from 'react-redux'
import {postLoginUserAuth0} from '../../redux/actions/POST/index.js'
import { useAuth0 } from "@auth0/auth0-react";

 const Home = () => {
    const { isAuthenticated, logout, user } = useAuth0();
    const dispatch = useDispatch ();
    console.log(user)

    useEffect(() => {
        dispatch(postLoginUserAuth0({email:user?.email, name:user?.given_name
        }))}, [user]);

    return (
        <div>
            { user ? <LogoutButton/>:<LoginButton/> }            
        </div>
    );
}

export default Home;