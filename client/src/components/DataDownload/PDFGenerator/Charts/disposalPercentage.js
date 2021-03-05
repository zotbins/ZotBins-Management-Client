import React from 'react'
import { StyleSheet, Image } from '@react-pdf/renderer'

const QuickChart = require('quickchart-js')

class DisposalPercentage extends React.Component {
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
      type: 'doughnut',
      data: {
        datasets: [
          {
            data: [15, 20, 30],
            backgroundColor: [
              'rgba(254, 247, 113, 0.53)',
              'rgba(213, 252, 112, 0.53)',
              'rgba(121, 214, 251, 0.53)',
            ],
            borderColor: [
              'rgba(254, 247, 113, 0.8)',
              'rgba(213, 252, 112, 0.8)',
              'rgba(121, 214, 251, 0.8)',
            ],
          },
        ],
        labels: ['Compost', 'Recycle', 'Landfill'],
      },
      options: {
        legend: {
          labels: { boxWidth: 25 },
          reverse: true,
          display: true,
          position: 'bottom',
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

export default DisposalPercentage
