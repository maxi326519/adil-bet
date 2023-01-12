import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Wallet.css";

export default function Wallet() {
  const walletStatus = useSelector((state) => state.userDates.wallet);
  const userName = useSelector((state) => state.userDates.userName);

  return userName ? (
    <nav className="wallet">
      <nav className="wwalet">
        <span className="dates">{userName}</span>
        <span className="dates">Saldo actual: {walletStatus}</span>
        <button className="dates"> Ingresar Dinero </button>
      </nav>
    </nav>
  ) : null;
}
