import React from "react";

import NavDashboard from "../NavDashboard/NavDashboard";
import SidebarDashboard from "../SidebarDashboard/SidebarDashboard";

import style from "./MatchesDashboard.module.css";

export default function MatchesDashboard() {
  return (
    <div>
      <div className={style.dashboard}>
        <div className={style.container}>
          <SidebarDashboard />
          <div className={style.matches}>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
