import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getActivity } from "../../redux/actions/GET/index";

import "./userActivity.css";

export default function UserActivity() {
  const initialState = {
    id: 1,
    page: 1,
    activity: "bets",
  };
  const [data, setData] = useState(initialState);
  const dispatch = useDispatch();

  const handleOnSelect = (e) => {
    setData({ ...data, activity: e.target.value });
    console.log(data);
  };
  const handleOnClick = (e) => {
    console.log(data);
    dispatch(getActivity(data));
  };

  return (
    <div className="cntall">
      <h3 className="title-history">Historial</h3>
      <div className="container">
        <div className="history">
          <div >
            <select className="select" onChange={(e) => handleOnSelect(e)}>
              <option value="bet">apuestas</option>
              <option value="deposit">depósitos</option>
              <option value="all">todas</option>
            </select>
          </div>
          <div >
            <button className="buscar" onClick={handleOnClick}>buscar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
