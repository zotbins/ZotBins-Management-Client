import React from 'react'
import { Card, Tabs } from 'antd'
import LineChart from '../LineChart'
import ProgressBar from '../ProgressBar'
import DiversionChart from '../DiversionChart'

const { TabPane } = Tabs

class ChartTabs extends React.Component {
  state = {
    activeTab: '1',
  }

  changeTab = (activeKey) => {
    this.setState({
      activeTab: activeKey,
    })
  }

  render() {
    return (
      <div>
        <Card style={{ margin: '1rem' }}>
          <Tabs activeKey={this.state.activeTab} onChange={this.changeTab}>
            <TabPane tab="Weight" key="1"></TabPane>
            <TabPane tab="Fullness" key="2"></TabPane>
            <TabPane tab="Diversion" key="3"></TabPane>
          </Tabs>

          {this.state.activeTab == 2 ? (
            <ProgressBar />
          ) : this.state.activeTab == 1 ? (
            <LineChart />
          ) : (
            <DiversionChart />
          )}
        </Card>
      </div>
    )
  }
}

export default ChartTabs
