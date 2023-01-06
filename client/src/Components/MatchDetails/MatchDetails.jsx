import React from "react";
import {getMatchDetails} from "../../redux/actions/GET/index.js"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BetsButton from '../BetsButton/BetsButton.jsx'
import { useParams } from "react-router-dom";
import "./MatchDetails.css"
 
export default function MatchDetails() {
  const dispatch = useDispatch();
  const {id} = useParams();
  
  const match = useSelector((state) => state.matchDetail)
  console.log(match)
  useEffect(() => {
    dispatch(getMatchDetails(id))
  }, [dispatch,id])

      
        return (
          <div className="matchdetail">
             <div className="container-detail">
                 <div className="cntdetail">
                     <h1>{match?.league}</h1>
                     <img className="imgleague" src={match?.logoLeague} alt="not found"/>
                     <img className="imghome" src={match?.logoHome} alt='not found'/>
                     <img className="imgaway" src={match?.logoAway} alt='not found'/>
                     <h3>Local team: {match?.homeTeam}</h3>
                     <h3>Visiting team: {match?.awayTeam}</h3>
                     <BetsButton/>    
                 </div>
             </div>
          </div>
        )
      
}