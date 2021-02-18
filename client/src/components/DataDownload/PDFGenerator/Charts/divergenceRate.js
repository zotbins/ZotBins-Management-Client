import React from 'react'
import { StyleSheet, Image } from '@react-pdf/renderer'

const QuickChart = require('quickchart-js')

class DivergenceRate extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      myChart: new QuickChart(),
      myURL: '',
    }
  }

  styles = StyleSheet.create({
    chart: {
      marginTop: 15,
      width: '465px',
      height: '255px',
      alignSelf: 'center',
    },
  })

  componentDidMount() {
    this.state.myChart.setConfig({
      type: 'line',
      data: {
        labels: [
          'Jan',
          'Feb',
          'Mar',
          'April',
          'May',
          'June',
          'July',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
        datasets: [
          {
            label: 'Diversion Rate',
            data: [3, 47, 52, 34, 76, 53, 25, 85, 79, 91, 58, 83],
            borderColor: 'rgba(213, 252, 112, 0.8)',
            fill: false,
            pointStyle: 'rectRounded',
            borderWidth: 6,
          },
        ],
      },
      options: {
        legend: {
          display: false,
        },
        plugins: {
          datalabels: {
            anchor: 'center',
            align: 'bottom',
            color: '#828282',
            font: {
              weight: 'bold',
            },
            formatter: (value) => {
              return value + '%'
            },
          },
        },
        scales: {
          xAxes: [
            {
              display: true,
              offset: true,
              scaleLabel: {
                display: true,
                labelString: 'Month',
              },
            },
          ],
          yAxes: [
            {
              display: true,
              offset: true,
              scaleLabel: {
                display: true,
                labelString: 'Divergence Rate (Percent)',
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

export default DivergenceRate
