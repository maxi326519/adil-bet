import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./BetsButtonInput.module.css";
import { addBet } from "../../redux/actions/POST";
import { Link } from "react-router-dom";

export default function BetsButtonInput({ id }) {
  const userDates = useSelector((state) => state.userDates);
  const jj = useSelector((state) => state.cart);
  const ff = useSelector((state) => state.items);
  const initialState = {
    homeBet: "",
    awayBet: "",
    tieBet: "",
    idUser: userDates.id,
    idMatch: id,
  };

  const [bet, setBet] = useState(initialState);
  const dispatch = useDispatch();
  const multiplier = {
    homebet: 1.8,
    awaybet: 2.5,
    tiebet: 3.0,
  };

  const handleChange = (evt) => {
    const { name, value } = evt.currentTarget;
    setBet({
      ...bet,
      [name]: value,
    });
  };

  useEffect(() => {
    localStorage.setItem("cartItem", JSON.stringify(jj));
  }, [jj]);

  const handleAddBet = () => {
    dispatch(addBet(bet));
  };

  if (Object.entries(userDates).length > 0) {
    return (
      <div className={styles.bttmcontainer}>
        <div className={styles.cntbuttons}>
          <input
            placeholder="Cuánto apuestas..."
            name="homeBet"
            onChange={handleChange}
            value={bet.homeBet}
            type="text"
            className={styles.inputbet}
          />
          <button onClick={handleAddBet} className={styles.buttonbet}>
            <span className="team-name">Apuesta local: </span>
            <span>{multiplier.homebet}</span>
          </button>
        </div>

        <div className={styles.cntbuttons}>
          <input
            placeholder="Cuánto apuestas..."
            name="awayBet"
            onChange={handleChange}
            value={bet.awayBet}
            type="text"
            className={styles.inputbet}
          />
          <button onClick={handleAddBet} className={styles.buttonbet}>
            <span className="team-name">Apuesta Visitante: </span>
            <span>{multiplier.awaybet}</span>
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.bttmcontainer}>
        <Link to="/login" className={styles.login}>
          <button onClick={handleAddBet} className={styles.buttonbetout}>
            <span className="team-name">Apuesta local: </span>
            <span>{multiplier.homebet}</span>
          </button>
        </Link>

        <Link to="/login" className={styles.login}>
          <button onClick={handleAddBet} className={styles.buttonbetout}>
            <span className="team-name">Apuesta Visitante: </span>
            <span>{multiplier.awaybet}</span>
          </button>
        </Link>
      </div>
    );
  }
}