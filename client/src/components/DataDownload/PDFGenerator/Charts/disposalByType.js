import React from 'react'
import { StyleSheet, Image, View } from '@react-pdf/renderer'

const QuickChart = require('quickchart-js')

class DisposalByType extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      myLChart: new QuickChart(),
      myRChart: new QuickChart(),
      myCChart: new QuickChart(),
      myLURL: '',
      myRURL: '',
      myCURL: '',
    }
  }

  styles = StyleSheet.create({
    chart: {
      marginTop: 5,
      marginLeft: 15,
      width: '160px',
      height: '80px',
    },
    row: {
      marginLeft: 10,
      marginTop: 10,
      flexDirection: 'row',
      justifyContent: 'center',
    },
  })

  componentDidMount() {
    this.state.myLChart.setConfig({
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
          position: 'bottom',
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

    this.state.myRChart.setConfig({
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
        datasets: [
          {
            label: 'Recycle',
            data: [30, 77, 51, 74, 58, 49],
            backgroundColor: 'rgba(213, 252, 112, 0.53)',
            borderColor: 'rgba(213, 252, 112, 0.8)',
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
          position: 'bottom',
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

    this.state.myCChart.setConfig({
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
        datasets: [
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
          position: 'bottom',
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

    const tempLURL = this.state.myLChart.getUrl()
    const tempRURL = this.state.myRChart.getUrl()
    const tempCURL = this.state.myCChart.getUrl()

    this.setState({
      myLURL: tempLURL,
      myRURL: tempRURL,
      myCURL: tempCURL,
    })
  }

  render() {
    return (
      <View style={this.styles.row}>
        <Image src={this.state.myLURL} style={this.styles.chart}></Image>
        <Image src={this.state.myRURL} style={this.styles.chart}></Image>
        <Image src={this.state.myCURL} style={this.styles.chart}></Image>
      </View>
    )
  }
}

export default DisposalByType
