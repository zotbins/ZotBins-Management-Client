import React from 'react'
import Chart from 'chart.js'
import { Card } from 'antd'

class Doughnut extends React.Component {
  chartRef = React.createRef()

  // TODO: Implement ZotBins Line Chart, edit code below - These are example data
  componentDidMount() {
    const myChartRef = this.chartRef.current.getContext('2d')

    new Chart(myChartRef, {
      type: 'doughnut',
      data: {
        //Bring in data

        datasets: [
          {
            data: [15, 20, 30],
            backgroundColor: ['#357B23', '#3876AC', '#616161'],
          },
        ],

        // These labels appear in the legend and in the tooltips when hovering different arcs
        labels: ['Compost', 'Recycle', 'Waste'],
      },
      options: {
        legend: {
          labels: { boxWidth: 25 },
          reverse: true,
          display: true,
          position: 'bottom',
        }, //Customize chart options
      },
    })
  }
  render() {
    return (
      <div>
        <Card id="doughnut-card">
          <h3>Disposable Percentage</h3>
          <canvas id="myChart" ref={this.chartRef} height={250} />
        </Card>
      </div>
    )
  }
}

export default Doughnut
