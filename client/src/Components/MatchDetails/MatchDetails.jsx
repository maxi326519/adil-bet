import React from "react";
import { getMatchDetails } from "../../redux/actions/GET/index.js";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BetsButton from "../BetsButton/BetsButton.jsx";
import { useParams } from "react-router-dom";

import Nav from "../Nav/Nav";

import "./MatchDetails.css";

export default function MatchDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const match = useSelector((state) => state.matchDetail);
  console.log(match);
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
          <div>
            <img className="imgteam" src={match?.logoHome} alt="not found" />
            <h3>Equipo local: {match?.homeTeam}</h3>
          </div>
          <div>
            <img className="imgteam" src={match?.logoAway} alt="not found" />
            <h3>Equipo Visitante: {match?.awayTeam}</h3>
          </div>
        </div>
        <BetsButton />
      </div>
    </div>
  );
}
