import React, { useEffect } from "react";
import { ResponsiveBar } from '@nivo/bar'
import { useDispatch, useSelector } from 'react-redux';
import { getDeposits } from "../../../redux/actions/GET/index.js"

export function BarChartDeposits() {

  const dispatch = useDispatch();
  useEffect(() =>
      dispatch(getDeposits()), [])
  const deposits = useSelector(state => state.deposits)

  const array = []
  const depositsData = []
  deposits.forEach(e => {
    if (!array.includes(e.userId)) {
      array.push(e.userId)
    }
  })
  array.forEach(e => {
    depositsData.push({
      userId: e,
      amount: 0
    })
  })
  deposits.forEach(e => {
    depositsData.forEach(a => {
      if (a.userId === e.userId) {
        a.amount= a.amount+Number(e.amount)
      }
    })
  })
  


  if(depositsData.length >0){
  return (
    <div style={{ height: 400, width: '100%' }}>
      <ResponsiveBar
        data={depositsData}
        keys={["amount"]}
        indexBy="userId"
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
export default BarChartDeposits