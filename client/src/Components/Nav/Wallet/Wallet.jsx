import React, { useState } from "react";
import { useSelector } from "react-redux";
import  { Link } from 'react-router-dom';

import "./Wallet.css";
import wallet from '../../../Assets/svg/Nav/wallet.svg';

export default function Wallet() {
  const walletStatus = useSelector((state) => state.userDates.wallet);
  const userName = useSelector((state) => state.userDates.userName);
  const [style, setStyle] = useState(true);

  function HandleStyle() {
    setStyle(!style);
  }

  return (
    <nav className="wallet">
      { console.log() }
      <button className="btn btn-primary btn-color" onClick={HandleStyle}><img src={ wallet } alt='wallet' className="logo-wallet"/></button>
      <div className={`${style ? "container-style" : ""}`}>
        <div className={`container-all-info`}>
          <div className="container-wallet-title">
            <p className="wallet-title">BILLETERA</p>
          </div>
          <div className="wwalet">
            <span className="dates">Hola! {userName}</span>
            <span className="dates">Tu saldo actual es: $ {walletStatus}</span>
            <Link to='/payment' className="button-cash"> RECARGAR BILLETERA </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
