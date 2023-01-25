import React, { useEffect } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from '../../../redux/actions/GET/index';
import SidebarDashboard from "../SidebarDashboard/SidebarDashboard";
import { Link, useNavigate } from 'react-router-dom'
import { userActive, userAdmin } from '../../../redux/actions/PATCH/index'
import styles from './UsersDashboard.module.css'


import style from "./UsersDashboard.module.css";

export default function UserDashboard() {

  const columns = [
    { field: 'id', headerName: 'ID' },
    { field: 'email', headerName: 'Email' },
    { field: 'name', headerName: 'Nombre' },
    { field: 'phone', headerName: 'Telefono' },
    { field: 'wallet', headerName: 'Billetera' },
    { field: 'isActive', headerName: 'Activo' },
    { field: 'isAdmin', headerName: 'Es administrador' },
    {
      field: "Usuario Activo",
      renderCell: (cellValues) => {
        if(cellValues.row.isActive == true){
          return (
            <button
            variant="contained"
            color="primary"
            onClick={(event) => {
              handleClick(event, cellValues);
            }}
          >
            Desactivar
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
            Activar
          </button>
          )
        }          
      }
    },
    {
      field: "Admin",
      renderCell: (cellValues) => {
        if(cellValues.row.isAdmin == true){
          return (
            <button
            variant="contained"
            color="primary"
            onClick={(event) => {
              handleClickAdmin(event, cellValues);
            }}
          >
            Desactivar
          </button>
          )
        }else {
          return (
            <button
            variant="contained"
            color="primary"
            onClick={(event) => {
              handleClickAdmin(event, cellValues);
            }}
          >
            Activar
          </button>
          )
        }          
      }
    },
  ];

  const dispatch = useDispatch();
  // const navigate = useNavigate()
  const handleClick = (event, cellValues) => {
    console.log(cellValues.row)
    const userId = cellValues.row.id
    const isActive = cellValues.row.isActive
    dispatch(userActive({ userId, isActive }))

  }
  const handleClickAdmin = (event, cellValues) => {
    console.log(cellValues.row)
    const userId = cellValues.row.id
    const isAdmin = cellValues.row.isAdmin
    dispatch(userAdmin({ userId, isAdmin }))
    // navigate("/dashboard/users")
  }
  const handleCellClick = (param, event) => {
    event.stopPropagation();
  };

  const handleRowClick = (param, event) => {
    event.stopPropagation();
  };

  const { users } = useSelector((state) => state);
  useEffect(() => {
    dispatch(getUsers())}, []);


  return (
    <div className={style.dashboard}>
      <div className={style.container}>
        <SidebarDashboard />
        {users?.length > 0 ? (
          <div className={styles.cntall}>
            <h1>USUARIOS REGISTRADOS</h1>
            <div style={{ height: 450, width: '100%' }}>
              <DataGrid
                onCellClick={handleCellClick}
                onRowClick={handleRowClick}
                checkboxSelection
                //   getRowId={(row) => row.user_id}
                rows={users}
                columns={columns}
              />
            </div>
          </div>
        ) : null}

      </div>
    </div>
  );
}
