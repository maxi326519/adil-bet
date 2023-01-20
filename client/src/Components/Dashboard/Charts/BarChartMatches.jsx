import React, { useEffect } from "react";
import { ResponsiveBar } from '@nivo/bar'
import { useDispatch, useSelector } from 'react-redux';
import { getMatchs } from "../../../redux/actions/GET/index.js"

export function BarChartMatches() {

  const dispatch = useDispatch();
  useEffect(() =>
      dispatch(getMatchs()), [])
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

  console.log(matchesDatainfo)
  // console.log(matchesData)


  if(matches.length >0){
  return (
    <div style={{ height: 400, width: '100%' }}>
      <ResponsiveBar
        data={matchesDatainfo}
        keys={["amount"]}
        indexBy="id"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.4}
        valueScale={{ type: "linear" }}
        colors="#7eda55"
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