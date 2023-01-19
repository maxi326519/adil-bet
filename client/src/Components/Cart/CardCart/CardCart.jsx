import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteBetToCart } from "../../../redux/actions/DELETE/index.js";

export default function CardCart({ id, betTo, amount }) {
  const dispatch = useDispatch();
  const matches = useSelector((state) => state.matches);
  const match = matches.filter((el) => el.id == id);
  console.log(match);

  const handleOnDelete = () => {
    dispatch(deleteBetToCart(match[0].id));
  };

  return (
    <div className="container-card-team-bet">
      <div className="container-name-teams">
        <div className="container-text-nameteams">
          <span className="team1-text">{match[0].homeTeam} vs</span>
          <span className="team2-text">{match[0].awayTeam}</span>
        </div>
        <span className="date-bet">{match[0].date}</span>
        <span className="betto">Apuesta a: {betTo}</span>
        <span className="quantity-bet">Cantidad: {amount}</span>
      </div>
      <div className="container-button-delete">
        <button className="button-delete" onClick={handleOnDelete}>
          Eliminar
        </button>
      </div>
    </div>
  );
}
