import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {deleteBetToCart} from "../../redux/actions/DELETE/index.js"

export default function CardCart({ id, betTo, amount }) {
  const dispatch = useDispatch()
  const matches = useSelector(state => state.matches)
  const match = matches.filter(el => el.id == id)
  console.log(match)

  const handleOnDelete = () =>{
    dispatch(deleteBetToCart(match[0].id))
  }


  return (
    <div>
      <div>
        <span>{match[0].homeTeam}</span>
        <span> vs </span>
        <span>{match[0].awayTeam}</span>
      </div>
      <span>{match[0].date}</span>
      <span>Apuesta a: {betTo}</span>
      <span>Cantidad: {amount}</span>
      <button onClick={handleOnDelete}>Eliminar</button>
    </div>
  )
}