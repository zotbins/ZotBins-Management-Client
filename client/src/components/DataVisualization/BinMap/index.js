import React from 'react'
import { Card, Modal, Button, Row, Col, Tabs } from 'antd'
import ChartTabs from '../ChartTabs'
import CardVisualFeature from '../../CardVisualFeature'
import BinMapContent from './BinMapContent'

const { TabPane } = Tabs

class BinMap extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isModalVisible: false,
      isMapVisible: false,
      binIds: [],
      binCoordinate: [],
    }
  }

  showModal = (binIds, binCoordinate) => {
    console.log('binids')
    console.log(binIds)
    this.setState({ isModalVisible: true, binIds, binCoordinate })
  }

  showMap = () => {
    this.setState({ isMapVisible: true })
  }

  closeModal = () => {
    this.setState({ isModalVisible: false })
  }

  closeMap = () => {
    this.setState({ isMapVisible: false })
  }

  render() {
    return (
      <Card id="bin-map-card">
        <BinMapContent
          showModal={this.showModal}
          height={250}
          defaultZoom={15}
          binIds={[
            ['bin-1', 'bin-2'],
            ['bin-3', 'bin-4', 'bin-5'],
          ]}
          binCoordinates={[
            [33.6457958, -117.844],
            [33.6487958, -117.842],
          ]}
          showMap={this.showMap}
          isSmall={true}
        />

        <Modal
          title={
            this.state.binCoordinate[0] + ', ' + this.state.binCoordinate[1]
          }
          visible={this.state.isModalVisible}
          width="80%"
          onCancel={this.closeModal}
          style={{ top: 20 }}
          bodyStyle={{ paddingTop: 0 }}
          footer={
            <Button type="primary" onClick={this.closeModal}>
              Close{' '}
            </Button>
          }
          zIndex={51}
        >
          <Tabs defaultActiveKey="1" animated={false}>
            {this.state.binIds.map((id) => {
              return (
                <TabPane tab={id} key={id}>
                  <Row>
                    <Col>
                      <ChartTabs />
                      <CardVisualFeature />
                    </Col>
                  </Row>
                </TabPane>
              )
            })}
          </Tabs>
        </Modal>

        <Modal
          // title="Building Name"
          visible={this.state.isMapVisible}
          width="100%"
          onCancel={this.closeMap}
          style={{ top: 0 }}
          footer={null}
          zIndex={50}
          // <Button type="primary" onClick={this.closeMap}>
          //   Close{' '}
          // </Button>
          // }
        >
          <BinMapContent
            showModal={this.showModal}
            height={750}
            defaultZoom={17}
            binIds={[
              ['bin-1', 'bin-2'],
              ['bin-3', 'bin-4', 'bin-5'],
            ]}
            binCoordinates={[
              [33.6457958, -117.844],
              [33.6487958, -117.842],
            ]}
          />
        </Modal>

        {/* <Button type="primary" onClick={this.showMap}>
          Full Screen
        </Button> */}
      </Card>
    )
  }
}

export default BinMap
