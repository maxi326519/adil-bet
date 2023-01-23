import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleSetPage } from "../../../redux/actions/GET";

// Components
import Card from "./Card/Card";
import PaginationControllers from "./PaginationControllers/PaginationControllers";
import AddBet from '../AddBet/AddBet';

import styles from "./MatchCards.module.css";

export default function MatchCards() {
  const matches = useSelector((state) => state.matches);
  const currentPage = useSelector((state) => state.currentPage.data);
  const dispatch = useDispatch();
  const [window, setWindow] = useState(false); 
  var [match, setMatch] = useState(0);

  useEffect(() => {
    if (matches.length > 0) dispatch(handleSetPage());
  }, [matches, dispatch]);
  
  function handleWindow(m){
    setWindow(!window);
    setMatch(m);
  }

  return (
    <div className={styles.content}>
      <div className={styles.list}>
        {currentPage.map((match) => {
          return (
            <Card
              handleWindow={handleWindow}
              key={match.id}
              matchId={match.id}
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
          );
        })}
      </div>
      <PaginationControllers />
      <AddBet window={ window } handleWindow={ handleWindow } match={match}/>
    </div>
  );
}
