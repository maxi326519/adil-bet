import React from "react";

import style from "./UserCard.module.css";

export default function UserCard({ name, email, wallet, bets }) {
  return (
    <div className={style.card}>
      <div>
        <h2>{name}</h2>
        <p>Email: {email}</p>
      </div>
      <p>wallet: {wallet}</p>
      <p>Bets: {bets}</p>
      <button>Ver mas</button>
      <button>X</button>
    </div>
  );
}
