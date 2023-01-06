 import React, { useState } from "react";
//import { useSelector } from "react-redux"; 
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMatchs, handleSetPage } from '../../redux/actions/GET';

import MatchCards from "./MatchCards/MatchCards";
import Nav from "../Nav/Nav";
import Searchbar from "./Searchbar/Searchbar";
import Filter from "./Filter/Filter";
import Footer from "../Footer/Footer";
import Paged from "../Paged/Paged"; 

import styles from "./Home.css";

export default function Home() {
  
    const dispatch = useDispatch();

    useEffect(()=>{
      dispatch(getMatchs());
    });

  return (
    <div className={styles.home}>
      <Nav/>
      <div className={styles.Searchbar}>
        <Searchbar/>
        <Filter/>
      </div>
      <MatchCards/>
      <Footer />
    </div>
  );
}
