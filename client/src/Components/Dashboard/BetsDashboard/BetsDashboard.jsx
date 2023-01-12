import React from 'react'
import NavDashboard from "../NavDashboard/NavDashboard";
import SidebarDashboard from "../SidebarDashboard/SidebarDashboard";

import style from "./BetsDashboard.module.css";

export default function BetsDashboard () {
    return (
        <div className={style.dashboard}>
        <div className={style.container}>
          <SidebarDashboard />
          <div className={style.bets}>
            <div>
            </div>
          </div>
        </div>
      </div>
    )
}