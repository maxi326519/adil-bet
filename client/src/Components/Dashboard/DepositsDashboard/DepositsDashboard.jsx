import React from 'react'
import NavDashboard from "../NavDashboard/NavDashboard";
import SidebarDashboard from "../SidebarDashboard/SidebarDashboard";

import style from "./DepositsDashboard.module.css";

export default function DepositsDashboard () {
    return (
        <div className={style.dashboard}>
        <div className={style.container}>
          <SidebarDashboard />
          <div className={style.deposits}>
            <div>
            </div>
          </div>
        </div>
      </div>
    )
}