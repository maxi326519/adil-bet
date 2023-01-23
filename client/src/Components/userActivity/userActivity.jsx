import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { getActivity } from "../../redux/actions/GET/index";
import { Link } from "react-router-dom";

import "./userActivity.css";

export default function UserActivity() {

  const userId = useSelector(state => state.userDates[0].id)

  const initialState = {
    id: null,
    page: 1,
    activity: "bets",
  };
  const [data, setData] = useState(initialState);
  const dispatch = useDispatch();

  useEffect(()=>{
    if(!data.id) setData({ ...data, id: userId });
  },[data]);

  const handleOnSelect = (e) => {
    setData({ ...data, activity: e.target.value });
  };
  const handleOnClick = (e) => {
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
          <Link to="/useractivities">
            <button className="buscar" onClick={handleOnClick}>buscar</button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
