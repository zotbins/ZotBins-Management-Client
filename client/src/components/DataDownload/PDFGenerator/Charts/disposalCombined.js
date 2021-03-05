import React from 'react'
import { StyleSheet, Image } from '@react-pdf/renderer'

const QuickChart = require('quickchart-js')

class DisposalCombined extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      myChart: new QuickChart(),
      myURL: '',
    }
  }

  styles = StyleSheet.create({
    chart: {
      marginTop: 5,
      width: '475px',
      height: '245px',
      alignSelf: 'center',
    },
  })

  componentDidMount() {
    this.state.myChart.setConfig({
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
        datasets: [
          {
            label: 'Landfill',
            data: [86, 27, 91, 60, 69, 85],
            backgroundColor: 'rgba(121, 214, 251, 0.53)',
            borderColor: 'rgba(121, 214, 251, 0.8)',
            lineTension: 0.4,
          },
          {
            label: 'Recycle',
            data: [30, 77, 51, 74, 58, 49],
            backgroundColor: 'rgba(213, 252, 112, 0.53)',
            borderColor: 'rgba(213, 252, 112, 0.8)',
            lineTension: 0.4,
          },
          {
            label: 'Compost',
            data: [60, 57, 25, 34, 43, 98],
            backgroundColor: 'rgba(254, 247, 113, 0.53)',
            borderColor: 'rgba(254, 247, 113, 0.8)',
            lineTension: 0.4,
          },
        ],
      },
      options: {
        plugins: {
          datalabels: {
            anchor: 'center',
            align: 'bottom',
            color: '#828282',
            font: {
              weight: 'bold',
            },
          },
        },
        legend: {
          position: 'top',
        },
        scales: {
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Weight (lbs)',
              },
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    })

    const tempURL = this.state.myChart.getUrl()
    this.setState({
      myURL: tempURL,
    })
  }

  render() {
    return <Image src={this.state.myURL} style={this.styles.chart}></Image>
  }
}

export default DisposalCombined
