import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import SidebarDashboard from "../SidebarDashboard/SidebarDashboard";
import {
  betStatus,
  betMult,
  betAmount,
} from "../../../redux/actions/PATCH/index";

import style from "./BetsDashboard.module.css";
import { getBets } from "../../../redux/actions/GET";

export default function BetsDashboard() {
  const bets = useSelector((state) => state.bets);
  useEffect(() => {
    dispatch(getBets());
  }, []);

  const columns = [
    { field: "id", headerName: "ID" },
    { field: "status", headerName: "Estado" },
    { field: "amount", headerName: "Cantidad", type: "number", editable: true },
    { field: "betTo", headerName: "Apuesta a:" },
    {
      field: "multiplier",
      headerName: "Multiplicador",
      type: "number",
      editable: true,
    },
    { field: "userId", headerName: "Id Usuario" },
    { field: "matchId", headerName: "Id Partido" },
    {
      field: "CAMBIAR ESTADO",
      // width: 200,
      renderCell: (cellValues) => {
        if (cellValues.row.status === "Active") {
          return (
            <button
              variant="contained"
              color="primary"
              onClick={(event) => {
                handleClick(event, cellValues);
              }}
            >
              Completada
            </button>
          );
        } else {
          return (
            <button
              variant="contained"
              color="primary"
              onClick={(event) => {
                handleClick(event, cellValues);
              }}
            >
              Activar
            </button>
          );
        }
      },
    },
    {
      field: "Actualizar Info",
      renderCell: (cellValues) => {
        return (
          <>
            <button
              variant="contained"
              color="primary"
              onClick={(event) => {
                console.log(cellValues);
                handleClickMult(event, cellValues);
                handleClickAmount(event, cellValues);
              }}
            >
              Guardar Info
            </button>
          </>
        );
      },
    },
  ];

  const dispatch = useDispatch();

  const handleClick = (event, cellValues) => {
    console.log(cellValues.row);
    const id = cellValues.row.id;
    const status = cellValues.row.status;
    dispatch(betStatus({ id, status }));
  };
  const handleClickMult = (event, cellValues) => {
    const id = cellValues.row.id;
    const multiplier = cellValues.row.multiplier;
    dispatch(betMult({ id, multiplier }));
  };
  const handleClickAmount = (event, cellValues) => {
    const id = cellValues.row.id;
    const amount = cellValues.row.amount;
    dispatch(betAmount({ id, amount }));
  };
  const handleCellClick = (param, event) => {
    event.stopPropagation();
  };

  const handleRowClick = (param, event) => {
    event.stopPropagation();
  };

  return (
    <div className={style.dashboard}>
      <SidebarDashboard />
      {bets?.length > 0 ? (
        <div className={style.container}>
          <h1>APUESTAS REGISTRADAS</h1>
          <div className={style.grid}>
            <DataGrid
              onCellClick={handleCellClick}
              onRowClick={handleRowClick}
              checkboxSelection
              //   getRowId={(row) => row.user_id}
              rows={bets}
              columns={columns}
            />
          </div>
        </div>
      ) : null}
    </div>
  );
}
