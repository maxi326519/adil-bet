import React from "react";
import { useDispatch } from "react-redux";
import styles from "./BetsButton.module.css";
import { addOrder } from "../../redux/actions/POST";

export default function BetsButtonDetails() {
  const dispatch = useDispatch();
  const multiplier = {
    homebet: 1.8,
    awaybet: 2.5,
    tiebet: 3.0,
  };

  function handleAddOrder() {
    dispatch(addOrder);
  }

  return (
    <div className={styles.bttmcontainer}>
      <button onClick={handleAddOrder} className={styles.Buttonbet}>
        <span className={styles.teamname}>Apuesta local: </span>
        <span>{multiplier.homebet}</span>
      </button>

      <button onClick={handleAddOrder} className={styles.Buttonbet}>
        <span className={styles.teamname}>Apuesta Visitante: </span>
        <span>{multiplier.awaybet}</span>
      </button>
    </div>
  );
}
