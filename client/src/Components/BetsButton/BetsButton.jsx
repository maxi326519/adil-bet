import React from "react";
import styles from "./BetsButton.css";
import { Link } from "react-router-dom";

export default function BetsButton() {
  const multiplier = {
    homebet: 1.8,
    awaybet: 2.5,
    tiebet: 3.0,
  };

  return (
    <div className={styles.bttmcontainer}>
      <Link className="text-button-bet">
        <button className="Button-bet">
          <span className="team-name">Apuesta local: </span>
          <span>{multiplier.homebet}</span>
        </button>
      </Link>

      <Link className="text-button-bet">
        <button className="Button-bet">
          <span className="team-name">Apuesta Visitante: </span>
          <span>{multiplier.awaybet}</span>
        </button>
      </Link>
    </div>
  );
}
