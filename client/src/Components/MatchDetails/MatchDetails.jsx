import React from "react";
import { getMatchDetails } from "../../redux/actions/GET/index.js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Nav from "../Nav/Nav";

import "./MatchDetails.css";
import BetsButtonInput from "../BetsButtonInput/BetsButtonInput.jsx";
import BetsButtonDetails from "../BetsButtonsDetails/BetsButton.jsx";
import Cart from '../Cart/Cart.jsx'

export default function MatchDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const match = useSelector((state) => state.matchDetail);
  useEffect(() => {
    dispatch(getMatchDetails(id));
  }, [dispatch, id]);

  return (
    <div className="matchdetail">
      <Nav />
      <div className="details-content">
        <div className="cntleague">
          <h1 className="titleleague">{match?.league}</h1>
          <img className="imgleague" src={match?.logoLeague} alt="not found" />
        </div>
        <div className="cnt-teams">
          <div className="container-list-statistics">
            <h2>Estadisticas:</h2>
            <ul className="list-statistics">
              <li className="item-statistics-good">Partidos Ganados: 87% 🠕</li>
              <li className="item-statistics-bad">Promedio Rondas: 35 🠗</li>
              <li className="item-statistics-good">
                Apuestas realizadas: 563 🠕
              </li>
              <li className="item-statistics-good">Apuestas ganadas: 17 🠕</li>
            </ul>
          </div>
          <div>
            <img className="imgteam" src={match?.logoHome} alt="not found" />
            <h3 className="team1">Equipo local:</h3>
            <p className="name-teams"> {match?.homeTeam}</p>
          </div>
          <div className="text-vs">
            <h3 className="text-vs">VS</h3>
          </div>
          <div>
            <img className="imgteam" src={match?.logoAway} alt="not found" />
            <h3 className="team1">Equipo Visitante:</h3>
            <p className="name-teams"> {match?.awayTeam}</p>
          </div>
          <div className="container-list-statistics">
            <h2>Estadisticas:</h2>
            <ul className="list-statistics">
              <li className="item-statistics-good">Partidos Ganados: 65% 🠕</li>
              <li className="item-statistics-bad">Promedio Rondas: 20 🠗</li>
              <li className="item-statistics-good">
                Apuestas realizadas: 347 🠕
              </li>
              <li className="item-statistics-bad">Apuestas ganadas: 28 🠗</li>
            </ul>
          </div>
        </div>
        {/* <BetsButtonDetails /> */}
        <BetsButtonInput id={id}/>
      </div>
      <Cart/>
    </div>
  );
}
