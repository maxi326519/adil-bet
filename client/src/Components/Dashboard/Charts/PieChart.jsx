import React, { useEffect } from "react";
import { ResponsivePie } from '@nivo/pie'
import { useDispatch, useSelector } from 'react-redux';
import { getUsers } from "../../../redux/actions/GET/index.js"

export function PieChart() {

  const dispatch = useDispatch();
  useEffect(() =>{
      dispatch(getUsers())
    }, [])
  const users = useSelector(state => state.users)

  const usersData = []
  usersData.push({
    id: true,
    value: 0,
  })
 usersData.push({
    id: false,
    value: 0,
  })
  users.forEach(e => {
    usersData.forEach(a => {
      if (a.id === e.isActive) {
        a.value= a.value+1
      }
    })
  })
  


  if(usersData.length >0){
  return (
    <div style={{ height: 400, width: '100%' }}>
      <ResponsivePie
        data={usersData}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        padAngle={0.7}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{ from: 'color', modifiers: [ [ 'darker', 0.2 ] ] }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#7eda55"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color' }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{ from: 'color', modifiers: [ [ 'darker', 2 ] ] }}
        legends={[
            {
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#7eda55',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#7eda55'
                        }
                    }
                ]
            }
        ]}
      />
    </div>
  )
  }
}
export default PieChart