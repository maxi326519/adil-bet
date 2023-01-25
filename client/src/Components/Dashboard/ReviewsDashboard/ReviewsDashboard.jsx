import React, { useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { getReviews } from '../../../redux/actions/GET/index.js';
import SidebarDashboard from "../SidebarDashboard/SidebarDashboard.jsx";
import { reviewActive } from '../../../redux/actions/PATCH/index.js'
import { Link, useNavigate } from 'react-router-dom'
import style from "./ReviewsDashboard.module.css";

export default function ReviewsDashboard() {

  const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'status', headerName: 'Estado'},
    { field: 'reviewData', headerName: 'Reseña' },
    { field: 'userId', headerName: 'Usuario Id' },
    { field: 'userName', headerName: 'Usuario' },
    { field: 'score', headerName: 'Puntuación' },
    {
      field: "Cambiar Estado",
      renderCell: (cellValues) => {
        if(cellValues.row.status === 'Pending'){
          return (
            <button
            variant="contained"
            color="primary"
            onClick={(event) => {
              handleClick(event, cellValues);
            }}
          >
            Aprobar
          </button>
          )
        }else {
          return (
            <button
            variant="contained"
            color="primary"
            onClick={(event) => {
              handleClick(event, cellValues);
            }}
          >
            Rechazar
          </button>
          )
        }          
      }
    },
  ];

  const dispatch = useDispatch()
  const { reviews } = useSelector((state) => state);
  useEffect(() => {
    dispatch(getReviews())}, []);

  const handleClick = (event, cellValues) => {
    console.log(cellValues.row)
    const id = cellValues.row.id
    const status = cellValues.row.status
    dispatch(reviewActive({ id, status }))
  }

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
        {reviews?.length > 0 ? (
          <>
            <h1>TODAS LAS RESEÑAS</h1>
            <div style={{ height: 450, width: '100%' }}>
              <DataGrid
                checkboxSelection
                onCellClick={handleCellClick}
                onRowClick={handleRowClick}
                //   getRowId={(row) => row.user_id}
                rows={reviews}
                columns={columns}
              />
            </div>
          </>
        ) : null}

      </div>
    </div>
  );
}
