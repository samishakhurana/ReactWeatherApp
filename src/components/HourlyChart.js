import React from 'react'
import { Chart } from 'react-charts'
 
function MyChart(props) {
  const data = React.useMemo(
    () => {
      var temp = [
        {
          label: 'Series 1',
          data: props.hourlyWeatherInfo
        }
      ]
      return temp
    },
    [props]
  )
 
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ],
    []
  )
 
  const lineChart = (
    <div
      style={{
        width: '400px',
        height: '300px'
      }}
    >
     {props.hourlyWeatherInfo && props.hourlyWeatherInfo.length > 0 && <Chart data={data} axes={axes} />}
    </div>
  )

  return lineChart
}

export default MyChart;