import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getActivity } from "../../../redux/actions/GET/index";

import BetsDepositUser from './BetsDepositUser/BetsDepositUser';
import { useSelector } from "react-redux";

import styles from "./userActivity.module.css";

export default function UserActivity() {

  const userData = useSelector(state=>state.userDates)
  const initialState = {
    id: userData?.id,
    page: 1,
    activity: "bets",
  };
  console.log(initialState)
  const [data, setData] = useState(initialState);
  const dispatch = useDispatch();

  const handleOnSelect = (e) => {
    setData({ ...data, activity: e.target.value });
  };
  
  const handleOnClick = (e) => {
    dispatch(getActivity(data));
  };
  console.log(data)

  return (
    <>
      <div className={ styles.activity }>
      <h3>Historial</h3>
        <div className="history">
          <div >
            <select className="select" onChange={(e) => handleOnSelect(e)}>
              <option value="bets">apuestas</option>
              <option value="deposit">depósitos</option>
              <option value="withdraw">retiros</option>
              <option value="all">todas</option>
            </select>
          </div>
          <div >
            <button className="buscar" onClick={handleOnClick}>buscar</button>
          </div>
        </div>
      <BetsDepositUser/>
      </div>
    </>
  );
}
