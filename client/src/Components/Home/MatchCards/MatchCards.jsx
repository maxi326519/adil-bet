import { useSelector } from "react-redux";

import styles from "./MatchCards.module.css";

export default function MatchCards() {
  const matches = useSelector((state) => state.matches);

  return (
    <div className={styles.container}>
      {matches.map((match) => (
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
        />
      ))}
    </div>
  );
}
