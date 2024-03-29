import React from 'react'

import { Row, Col } from 'antd'
import ChartTabs from '../../DataVisualization/ChartTabs'
import Doughnut from '../../DataVisualization/Doughnut'
import BinMap from '../../DataVisualization/BinMap'
import CardVisualFeature from '../../CardVisualFeature'
import IntervalOption from '../../IntervalOption'
import DataDownload from '../../DataDownload'

class DashboardPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      windowWidth: 0,
      windowHeight: 0,
      time: [
        new Date(Date.now() - 3600000 - 28800000).toISOString(),
        new Date(Date.now() - 28800000).toISOString(),
      ],
      usage_count: [0, 0, 0],
    }

    this.handleTimeChanges = this.handleTimeChanges.bind(this)
    this.getCSV = this.getCSV.bind(this)
  }

  handleTimeChanges(i) {
    this.setState({ time: i })
    this.getCountData(i)
    console.log(i)
  }

  async getCountData(time) {
    fetch(
      'http://localhost:9000/bin_breakbeam_count/' + time[0] + '/' + time[1],
      { method: 'GET' }
    )
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          usage_count: [res.recycle, res.landfill, res.compost],
        })
      })
  }

  getCSV(csvTime, binID) {
    let a = document.createElement('a')
    a.href =
      'http://localhost:9000/csv/' +
      binID +
      '/' +
      csvTime[0].substring(0, 10) +
      '(' +
      csvTime[0].substring(11, 19) +
      ')/' +
      csvTime[1].substring(0, 10) +
      '(' +
      csvTime[1].substring(11, 19) +
      ')'
    a.download = 'data.csv'
    a.click()
  }

  componentDidMount() {
    this.getCountData(this.state.time)
    this.updateDimensions()
    window.addEventListener('resize', this.updateDimensions.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions.bind(this))
  }

  updateDimensions() {
    let windowWidth = typeof window !== 'undefined' ? window.innerWidth : 0
    let windowHeight = typeof window !== 'undefined' ? window.innerHeight : 0

    this.setState({ windowWidth, windowHeight })
  }

  render() {
    const { windowWidth } = this.state
    const collapsedPage = windowWidth < 1200
    const middleVersion = windowWidth < 1200 && windowWidth > 800
    const pageID = collapsedPage ? 'dashboard-page-collapsed' : 'dashboard-page'

    return (
      <div id={pageID}>
        {!collapsedPage ? (
          <div>
            <Row>
              <div id="select-date-container">
                <h1>Overall Data</h1>
                <div id="select-date">
                  <IntervalOption updateDates={this.handleTimeChanges} />
                </div>
                <div id="export-button">
                  <DataDownload getCSV={this.getCSV} />
                </div>
              </div>
            </Row>
            <Row gutter={32}>
              <Col span={17}>
                <ChartTabs />
                <CardVisualFeature />
              </Col>
              <Col span={7}>
                <Doughnut />
                <BinMap />
              </Col>
            </Row>
          </div>
        ) : (
          <div>
            <Row>
              <div id="select-date-container">
                <h1>Overall Data</h1>
                <div id="select-date">
                  <IntervalOption updateDates={this.handleTimeChanges} />
                </div>
                <div id="export-button">
                  <DataDownload getCSV={this.getCSV} />
                </div>
              </div>
            </Row>
            <Row>
              <ChartTabs />
            </Row>
            {middleVersion ? (
              <Row>
                <Col span={17}>
                  <Doughnut />
                </Col>
                <Col span={7}>
                  <CardVisualFeature
                    collapsedPage={collapsedPage}
                    middleVersion={middleVersion}
                  />
                </Col>
              </Row>
            ) : (
              <Row>
                <Row>
                  <CardVisualFeature
                    collapsedPage={collapsedPage}
                    middleVersion={middleVersion}
                  />
                </Row>
                <Row>
                  <Doughnut />
                </Row>
              </Row>
            )}

            <Row>
              <BinMap />
            </Row>
          </div>
        )}
      </div>
    )
  }
}

export default DashboardPage
