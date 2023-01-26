import React from "react";
import SidebarDashboard from "./SidebarDashboard/SidebarDashboard.jsx";
import BarChartBets from "./Charts/BarChartBets.jsx";

import "./Dashboard.css";
import BarChartDeposits from "./Charts/BarChartDeposits.jsx";
import PieChart from "./Charts/PieChart.jsx";
import BarChartMatches from "./Charts/BarChartMatches.jsx";

export default function Dashboard() {
  return (
    <div className="dashboard">
      <SidebarDashboard />
      <div className="cnttables">
        <div className="chart__container">
          <h1 className="titletable">
            Gráfico Usuarios vs Apuestas Totales(dolares)
          </h1>
          <BarChartBets />
        </div>
        <div className="chart__container">
          <h1 className="titletable">
            Gráfico Usuarios vs Depositos Totales(dolares)
          </h1>
          <BarChartDeposits />
        </div>
        <div className="chart__container">
          <h1 className="titletable">
            Gráfico Partidos vs Apuestas Totales(dolares)
          </h1>
          <BarChartMatches />
        </div>
        <div className="chart__container">
          <h1 className="titletable">Gráfico Usuarios Activos</h1>
          <PieChart />
        </div>
      </div>
    </div>
  );
}
