import React from 'react'
import { Chart } from 'react-charts'
 
function MyChart(props) {
  const weatherData = props.hourlyWeatherInfo
  // const data = React.useMemo(
  //   () => [
  //     {
  //       label: 'Series 1',
  //       data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
  //     }
  //   ],
  //   []
  // )

  const data = () => [
    {
      label: 'Series 1',
      data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
    }
  ]
 
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ],
    []
  )
 
  const lineChart = (
    // A react-chart hyper-responsively and continuously fills the available
    // space of its parent element automatically
    <div
      style={{
        width: '400px',
        height: '300px'
      }}
    >
      <Chart data={data} axes={axes} />
    </div>
  )

  return lineChart
}

export default MyChart;