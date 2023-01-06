import React from 'react';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getMatchs } from '../../../redux/actions/GET';
import Card from './Card/Card';

import styles from "./MatchCards.module.css";

export default function MatchCards() {
  const matches = useSelector((state) => state.matches);
  const dispatch = useDispatch();

  useEffect(()=>{
    console.log('Componente montado');
    dispatch(getMatchs());
  });

  return (
    <div className={'Match' + styles.container}>
      {matches.length > 0 ? matches.map(match =>
        <Card
          league={match.league}
          homeTeam={match.homeTeam}
          awayTeam={match.awayTeam}
          date={match.date}
          logoLeague={match.logoLeague}
          logoHome={match.logoHome}
          logoAway={match.logoAway}
          scoreHome={match.scoreHome}
          scoreAway={match.scoreAway}
        />
      )
        : <div>Loading...{/* Agregar un componente de carga */}</div>
      }
    </div>
  );
}