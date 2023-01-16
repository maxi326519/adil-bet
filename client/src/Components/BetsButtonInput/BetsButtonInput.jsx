import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./BetsButtonInput.css";
import {addBet} from '../../redux/actions/POST'
import { Link } from "react-router-dom";

export default function BetsButtonInput({id}) {
  const userDates = useSelector(state => state.userDates)
  const jj = useSelector(state => state.cart)
  const ff = useSelector(state => state.items)
  const initialState = {
     homeBet: "",
     awayBet: "",
     tieBet: "",
     idUser:userDates.id,
     idMatch: id
   };
  const [bet, setBet] = useState(initialState)
  const dispatch = useDispatch();
  const multiplier = {
    homebet: 1.8,
    awaybet: 2.5,
    tiebet: 3.0,
  };

  const handleChange = (evt) => {
    const { name, value } = evt.currentTarget;
    console.log(bet)
    setBet({
      ...bet,
      [name]: value,
    });
  };

  useEffect(() => { localStorage.setItem("cartItem", JSON.stringify(jj) ) }, [jj]);
  console.log('es esto',ff )
  console.log('cart = ', jj)

 const handleAddBet = () => {
  dispatch(addBet(bet))
 }

 if (Object.entries(userDates).length > 0){
  return (
     <div className={styles.bttmcontainer}>
        
        <input
          placeholder=""
          name="homeBet"
          onChange={handleChange}
          value={bet.homeBet}
          type="text"
        />
        <button onClick={handleAddBet} className="Button-bet">
        <span className="team-name">Apuesta local: </span>
        <span>{multiplier.homebet}</span>
      </button>
 
        <input
          placeholder=""
          name="awayBet"
          onChange={handleChange}
          value={bet.awayBet}
          type="text"
        />
        <button onClick={handleAddBet} className="Button-bet">
        <span className="team-name">Apuesta Visitante: </span>
        <span>{multiplier.awaybet}</span>
      </button>
     
     </div>
    )
} else {
  return (
     <div className={styles.bttmcontainer}>
        <Link to="/login">
        <button onClick={handleAddBet} className="Button-bet">
        <span className="team-name">Apuesta local: </span>
        <span>{multiplier.homebet}</span>
      </button>
        </Link>

        <Link to="/login">
        <button onClick={handleAddBet} className="Button-bet">
        <span className="team-name">Apuesta Visitante: </span>
        <span>{multiplier.awaybet}</span>
      </button>
        </Link>
        
     </div>
  )
}
}
