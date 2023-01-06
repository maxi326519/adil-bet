import React from 'react'
import { useDispatch} from "react-redux";
import styles from './BetsButton.module.css'
import {addOrder} from '../../redux/actions/POST'

export default function BetsButton () {
   const dispatch = useDispatch()
   const multiplier = {
    homebet: 1.8,
    awaybet: 2.5,
    tiebet: 3.0,
   }

   function handleAddOrder() {
    dispatch(addOrder)
    }

   return (
    <div className={styles.bttmcontainer}>
       
       <button onClick={handleAddOrder}>
        <span>homebet</span>
        <span>{multiplier.homebet}</span>
       </button>

       <button onClick={handleAddOrder}>
        <span>awaybet</span>
        <span>{multiplier.awaybet}</span>
       </button>
    
    </div>
   )
}