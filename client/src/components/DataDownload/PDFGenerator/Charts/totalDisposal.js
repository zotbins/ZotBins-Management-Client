import React from 'react'
import { StyleSheet, Image } from '@react-pdf/renderer'

const QuickChart = require('quickchart-js')

class TotalDisposal extends React.Component {
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
      width: '465px',
      height: '255px',
      alignSelf: 'center',
    },
  })

  componentDidMount() {
    this.state.myChart.setConfig({
      type: 'bar',
      data: {
        datasets: [
          {
            label: 'Landfill',
            data: [120],
            backgroundColor: 'rgba(121, 214, 251, 0.53)',
            borderColor: 'rgba(121, 214, 251, 0.8)',
          },
          {
            label: 'Recycle',
            data: [40],
            backgroundColor: 'rgba(213, 252, 112, 0.53)',
            borderColor: 'rgba(213, 252, 112, 0.8)',
          },
          {
            label: 'Compost',
            data: [62],
            backgroundColor: 'rgba(254, 247, 113, 0.53)',
            borderColor: 'rgba(254, 247, 113, 0.8)',
          },
        ],
      },
      options: {
        plugins: {
          datalabels: {
            anchor: 'center',
            align: 'center',
            color: '#828282',
            font: {
              weight: 'bold',
            },
            formatter: (value) => {
              return value + ' lbs'
            },
          },
        },
        scales: {
          xAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Type of Waste',
              },
            },
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: true,
                labelString: 'Total Weight (lbs)',
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

export default TotalDisposal
