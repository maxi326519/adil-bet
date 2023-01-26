import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { getMatchs } from "../../../redux/actions/GET/index.js";
import SidebarDashboard from "../SidebarDashboard/SidebarDashboard.jsx";
import { Link, useNavigate } from "react-router-dom";

import style from "./MatchesDashboard.module.css";

export default function MatchesDashboard() {
  const columns = [
    { field: "id", headerName: "ID" },
    { field: "game", headerName: "Juego" },
    { field: "country", headerName: "Pais" },
    { field: "league", headerName: "Liga" },
    { field: "homeTeam", headerName: "Equipo Local" },
    { field: "awayTeam", headerName: "Equipo visitante" },
    { field: "scoreHome", headerName: "Resultado Local" },
    { field: "scoreAway", headerName: "Resultado visitante" },
  ];

  const dispatch = useDispatch();
  const { matches } = useSelector((state) => state);
  useEffect(() => {
    dispatch(getMatchs());
  }, []);

  return (
    <div className={style.dashboard}>
      <SidebarDashboard />
      {matches?.length > 0 ? (
        <div className={style.container}>
          <h1>TODOS LOS PARTIDOS</h1>
          <div className={style.grid}>
            <DataGrid
              checkboxSelection
              //   getRowId={(row) => row.user_id}
              rows={matches}
              columns={columns}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}
