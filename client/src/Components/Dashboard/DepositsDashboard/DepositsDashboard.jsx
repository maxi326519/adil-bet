import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { getDeposits } from "../../../redux/actions/GET/index";
import SidebarDashboard from "../SidebarDashboard/SidebarDashboard";
import { Link, useNavigate } from "react-router-dom";
import { updateDeposit } from "../../../redux/actions/PATCH/index";

import style from "./DepositsDashboard.module.css";

export default function UserDashboard() {
  const columns = [
    { field: "id", headerName: "ID" },
    { field: "amount", headerName: "Cantidad", type: 'number', editable: true },
    { field: "userId", headerName: "Id Usuario" },
    // { field: "updateDeposit", headerName: "Actualizar" },
    {
      field: "CANTIDAD",
      renderCell: (cellValues) => {
        return (
          <>
            <button
              variant="contained"
              color="primary"
              onClick={(event) => {
                handleUpdateDeposit(event, cellValues);
              }}
            >
              Cambiar
            </button>
          </>
        );
      },
    },
  ];

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const deposits = useSelector((state) => state.deposits);

  useEffect(() => {
    dispatch(getDeposits());
  }, []);

  const handleUpdateDeposit = (event, cellValues) => {
    const id = cellValues.row.id;
    const amount = cellValues.row.amount;
    dispatch(updateDeposit({ id, amount }));
  };

  const handleCellClick = (param, event) => {
    event.stopPropagation();
  };

  const handleRowClick = (param, event) => {
    event.stopPropagation();
  }
    return (
      <div className={style.dashboard}>
        <div className={style.container}>
          <SidebarDashboard />
          {deposits?.length > 0 ? (
            <>
              <h1>DEPOSITOS</h1>
              <div style={{ height: 450, width: "100%" }}>
                <DataGrid
                  columns={columns}
                  rows={deposits}
                  onRowClick={() => navigate(`/dashboard/deposit`)}
                  // actions={[
                  //   {
                  //     icon: "edit",
                  //     onClick: (row) => handleUpdateDeposit(row.id, row.amount),
                  //   },
                  // ]}
                  onCellClick={handleCellClick}
                  //onRowClick={handleRowClick}
                />
              </div>
            </>
          ) : null}
        </div>
      </div>
    );
  };