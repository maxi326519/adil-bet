
import styles from './Card.module.css';

export default function Card({ league, homeTeam, awayTeam, date, logoLeague, logoHome, logoAway, scoreHome, scoreAway }){
    return (
        <div className={styles.card}>
          <span className={styles.league}>{league}</span>
          <div className={styles.teams}>
            <span className={styles.homeTeam}>
              <img src={logoHome} alt={`Logo del equipo ${homeTeam}`} />
              {homeTeam}
            </span>
            <span className={styles.awayTeam}>
              <img src={logoAway} alt={`Logo del equipo ${awayTeam}`} />
              {awayTeam}
            </span>
          </div>
          <span className={styles.date}>{date}</span>
          <span className={styles.score}>
            {scoreHome} - {scoreAway}
          </span>
        </div>
      );
};