import React, { useEffect } from "react";
import { ResponsiveBar } from '@nivo/bar'
import { useDispatch, useSelector } from 'react-redux';
import { getBets } from "../../../redux/actions/GET/index.js"

import style from './BarChart.module.css';

export function BarChartBets() {

  const dispatch = useDispatch();
  useEffect(() =>{
      dispatch(getBets())
    }, [])
  const bets = useSelector(state => state.bets)

  const array = []
  const betsData = []
  bets.forEach(e => {
    if (!array.includes(e.userId)) {
      array.push(e.userId)
    }
  })
  array.forEach(e => {
    betsData.push({
      userId: e,
      amount: 0
    })
  })
  bets.forEach(e => {
    betsData.forEach(a => {
      if (a.userId === e.userId) {
        a.amount= a.amount+Number(e.amount)
      }
    })
  })
  


  if(bets.length >0){
  return (
    <div  className={style.char}>
      <ResponsiveBar
        classname={style.table}
        data={betsData}
        keys={["amount"]}
        indexBy="userId"
        margin={{ top: 50, right: 40, bottom: 30, left: 60 }}
        padding={0.4}
        valueScale={{ type: "linear" }}
        colors="var(--primary-color)"
        animate={true}
        enableLabel={false}
        axisTop={null}
        axisRight={null}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Cantidad dolares",
          legendPosition: "middle",
          legendOffset: -40
        }}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "Id Usuarios",
          legendPosition: "middle",
          legendOffset: -40
        }}
      />
    </div>
  )
  }
}
export default BarChartBets