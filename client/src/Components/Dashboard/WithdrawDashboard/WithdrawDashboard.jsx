import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import SidebarDashboard from "../SidebarDashboard/SidebarDashboard";
import { updateWithdraw } from "../../../redux/actions/PATCH/index";

import style from "./WithdrawDashboard.module.css";
import { getWithdras } from "../../../redux/actions/GET";

export default function WithdrawDashboard() {


  const withdraws = useSelector((state) => state.withdraws);
  useEffect(() => {
    dispatch(getWithdras())}, []);

  const columns = [
    { field: "id", headerName: "ID" },
    { field: "amount", headerName: "Cantidad" },
    { field: "document", headerName: "N° documento:" },
    { field: "phone", headerName: "Telefono" },
    { field: "userId", headerName: "Id Usuario" },
    { field: "card", headerName: "Tarjeta" },
    { field: "status", headerName: "Estado" },
    {
      field: "Cambiar Estado",
      // width: 200,
      renderCell: (cellValues) => {
        if (cellValues.row.status === "Pending") {
          return (
            <button
              variant="contained"
              color="primary"
              onClick={(event) => {
                handleClick(event, cellValues);
              }}
            >
              Pagada
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
              Pendiente
            </button>
          );
        }
      },
    },
  ];

  const dispatch = useDispatch();

  const handleClick = (event, cellValues) => {
    console.log(cellValues.row);
    const id = cellValues.row.id;
    const status = cellValues.row.status;
    dispatch(updateWithdraw({ id, status }));
  };
  const handleCellClick = (param, event) => {
    event.stopPropagation();
  };

  const handleRowClick = (param, event) => {
    event.stopPropagation();
  };


  return (
    <div className={style.dashboard}>
      <div className={style.container}>
        <SidebarDashboard />
        {withdraws?.length > 0 ? (
          <>
            <h1>RETIROS</h1>
            <div style={{ height: 450, width: "100%" }}>
              <DataGrid
                onCellClick={handleCellClick}
                onRowClick={handleRowClick}
                checkboxSelection
                //   getRowId={(row) => row.user_id}
                rows={withdraws}
                columns={columns}
              />
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}