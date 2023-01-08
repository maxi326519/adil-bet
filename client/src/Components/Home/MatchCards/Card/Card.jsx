import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import BetsButton from "../../../BetsButton/BetsButton";
import logo from "../../../../Assets/Images/favicon.png";

export default function Card({
  league,
  homeTeam,
  awayTeam,
  date,
  matchId,
  logoLeague,
  logoHome,
  logoAway,
  scoreHome,
  scoreAway,
}) {
  return (
    <div className={styles.card}>
      <Link to={`/details/${matchId}`} className={styles.Link}>
        <div className={styles.cntlogo}>
          <img src={logo} alt="Logo mlb" className={styles.logo} />
          <span className={styles.league}>{league}</span>
        </div>
        <div className={styles.teams}>
          <div className={styles.cntteams}>
            <span className={styles.homeTeam}>{homeTeam}</span>
            <span> vs </span>
            <span className={styles.awayTeam}>{awayTeam}</span>
          </div>
          <span className={styles.date}>{date}</span>
        </div>
      </Link>
      <div className={styles.buttons}>
        <BetsButton />
      </div>
    </div>
  );
}
