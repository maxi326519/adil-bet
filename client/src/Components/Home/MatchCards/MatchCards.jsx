import React from 'react';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { handleSetPage } from '../../../redux/actions/GET';
import Card from './Card/Card';
import PaginationControllers from './PaginationControllers/PaginationControllers';

import styles from "./MatchCards.module.css";

export default function MatchCards({ currentMatchs }) {

  const matches = useSelector((state) => state.matches);
  const currentPage = useSelector((state) => state.currentPage.data);
  const dispatch = useDispatch();

  useEffect(()=>{
    if(matches.length > 0) dispatch(handleSetPage())
  },[matches, dispatch]);

  return (
    <div className={styles.list}>
      {
        currentPage.map((match) => {
          return (
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
            />)
          })
        }
      <PaginationControllers/>
    </div>
  );
}