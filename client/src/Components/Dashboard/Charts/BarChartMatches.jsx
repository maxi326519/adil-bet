import React, { useEffect } from "react";
import { ResponsiveBar } from '@nivo/bar'
import { useDispatch, useSelector } from 'react-redux';
import { getMatchs } from "../../../redux/actions/GET/index.js"

import style from './BarChart.module.css';

export function BarChartMatches() {

  const dispatch = useDispatch();
  useEffect(() =>{
      dispatch(getMatchs())
    }, [])
  const matches = useSelector(state => state.matches)

  const array = []
  const matchesData = []
  const matchesDatainfo = []
  matches.forEach(e => {
    if (!array.includes(e.id)) {
      array.push(e.id)
    }
  })
  array.forEach(e => {
    matchesData.push({
      id: e,
      amount: 0
    })
  })
  matches.forEach(e => {
    matchesData.forEach(a => {
      if (a.id === e.id) {
        if(e.bets[0]){
          a.amount= a.amount+Number(e.bets[0].amount)
        }
      }
    })
  })
  matchesData.forEach(e =>{
    if (e.amount !== 0){
      matchesDatainfo.push(e)
    }
  })



  if(matches.length >0){
  return (
    <div className={style.char}>
      <ResponsiveBar
        data={matchesDatainfo}
        keys={["amount"]}
        indexBy="id"
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
export default BarChartMatches