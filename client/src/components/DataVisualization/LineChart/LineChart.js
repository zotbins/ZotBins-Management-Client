import React from 'react'
import { StackArea } from '@antv/g2plot'
import Chart from 'chart.js'

class LineChart extends React.Component {
  chartRef = React.createRef()

  // TODO: Implement ZotBins Line Chart, edit code below - These are example data
  componentDidMount() {
    const myChartRef = this.chartRef.current.getContext('2d')

    new Chart(myChartRef, {
      type: 'line',
      data: {
        //Bring in data
        labels: ['Jan', 'Feb', 'March'],
        datasets: [
          {
            label: 'Waste',
            data: [86, 27, 91],
            backgroundColor: 'rgba(97, 97, 97, 0.53)',
          },
          {
            label: 'Recycle',
            data: [30, 77, 51],
            backgroundColor: 'rgba(56, 118, 172, 0.53)',
          },
          {
            label: 'Compost',
            data: [60, 57, 25],
            backgroundColor: 'rgba(53, 123, 35, 0.53)',
          },
        ],
      },
    })
  }
  render() {
    return (
      <div>
        <canvas height="110px" id="myChart" ref={this.chartRef} />
      </div>
    )
  }
}

export default LineChart
