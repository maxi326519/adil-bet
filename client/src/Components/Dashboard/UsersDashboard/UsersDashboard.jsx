import React from "react";
import SidebarDashboard from "../SidebarDashboard/SidebarDashboard";
import UserList from "./UserList/UserList.jsx";
import Search from "./Search/Search.jsx";

import style from "./UsersDashboard.module.css";

export default function UserDashboard() {
  return (
    <div className={style.dashboard}>
      <div className={style.container}>
        <SidebarDashboard />
        <div className={style.user}>
          <h2>USUARIOS</h2>
          <div className={style.graphics}>
            <div className={style.graph1}>Grafico 1</div>
            <div className={style.graph2}>Grafico 2</div>
            <div className={style.graph1}>Grafico 3</div>
          </div>
          <div className={style.data}>
            <Search />
            <UserList />
          </div>
        </div>
      </div>
    </div>
  );
}
