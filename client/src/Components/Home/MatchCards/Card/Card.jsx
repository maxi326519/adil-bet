
import styles from './Card.module.css';

export default function Card({ league, homeTeam, awayTeam, date, logoLeague, logoHome, logoAway, scoreHome, scoreAway }){
    return (
        <div className={styles.card}>
          <span className={styles.league}>{league}</span>
          <div className={styles.teams}>
            <span className={styles.homeTeam}>{homeTeam}</span>
            <span> vs</span>
            <span className={styles.awayTeam}>{awayTeam}</span>
          </div>
          <span className={styles.date}>{date}</span>
          <span className={styles.score}>
            {scoreHome} - {scoreAway}
          </span>
        </div>
      );
};