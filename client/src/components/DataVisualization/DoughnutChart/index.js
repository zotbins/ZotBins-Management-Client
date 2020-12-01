import React from 'react'
import { Ring } from '@antv/g2plot'
import { Doughnut } from 'react-chartjs-2'
import { Card } from 'antd'
import './doughnut.scss'

var data = [
  { type: 'Landfill', value: 0 },
  { type: 'Recycle', value: 0 },
  { type: 'Compost', value: 0 },
]

class DoughnutGraph extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: [0, 0, 0],
    }
    this.chartRef = React.createRef()
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
      data: nextProps.data,
    }
  }

  // componentDidUpdate() {
  //   this.getData();
  // }

  render() {
    // if (this.state.data_loaded) {
    // this.getData();

    return (
      <div>
        <Card id="doughtnut-card">
          {/* <div id={"container"}></div> */}
          <h3 id="doughtnut-text-style">Disposable Count</h3>
          <Doughnut
            height={300}
            data={{
              labels: ['Recycle', 'Landfill', 'Compost'],
              datasets: [
                {
                  data: this.state.data,
                  backgroundColor: [
                    'rgba(213, 252, 112)',
                    'rgba(121, 214, 251)',
                    'rgba(254, 247, 113)',
                  ],
                  hoverBackgroundColor: [
                    'rgba(213, 252, 112)',
                    'rgba(121, 214, 251)',
                    'rgba(254, 247, 113)',
                  ],
                },
              ],
            }}
          />

          <h4>
            Recycle: {this.state.data[0]}
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {parseInt(
                (this.state.data[0] /
                  (this.state.data[0] +
                    this.state.data[1] +
                    this.state.data[2])) *
                  100
              )}
              %
            </span>
          </h4>
          <h4>
            Waste: {this.state.data[1]}
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {parseInt(
                (this.state.data[1] /
                  (this.state.data[0] +
                    this.state.data[1] +
                    this.state.data[2])) *
                  100
              )}
              %
            </span>
          </h4>
          <h4>
            Compost: {this.state.data[2]}
            <span>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              {parseInt(
                (this.state.data[2] /
                  (this.state.data[0] +
                    this.state.data[1] +
                    this.state.data[2])) *
                  100
              )}
              %
            </span>
          </h4>
          <h4>
            Total:{' '}
            {this.state.data[0] + this.state.data[1] + this.state.data[2]}
          </h4>
        </Card>
      </div>
    )
    // }
    // else {
    //     return (<div><img src={loading}></img></div>)
    // }
  }
}

export default DoughnutGraph
