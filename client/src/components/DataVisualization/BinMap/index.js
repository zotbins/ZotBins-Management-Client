import React from 'react'
import { Card, Modal, Button, Row, Col } from 'antd'
import ChartTabs from '../ChartTabs'
import CardVisualFeature from '../../CardVisualFeature'
import BinMapContent from './BinMapContent'

class BinMap extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isModalVisible: false,
      isMapVisible: false,
    }
  }

  showModal = () => {
    this.setState({ isModalVisible: true })
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
        />

        <Modal
          title="Bin Name"
          visible={this.state.isModalVisible}
          width="80%"
          onCancel={this.closeModal}
          style={{ top: 20 }}
          footer={
            <Button type="primary" onClick={this.closeModal}>
              Close{' '}
            </Button>
          }
        >
          <Row>
            <Col>
              <ChartTabs />
              <CardVisualFeature />
            </Col>
          </Row>
        </Modal>

        <Modal
          title="Bin Name"
          visible={this.state.isMapVisible}
          width="80%"
          onCancel={this.closeMap}
          style={{ top: 0 }}
          footer={
            <Button type="primary" onClick={this.closeMap}>
              Close{' '}
            </Button>
          }
        >
          <BinMapContent
            showModal={this.showModal}
            height={750}
            defaultZoom={17}
          />
        </Modal>

        <Button type="primary" onClick={this.showMap}>
          Full Screen
        </Button>
      </Card>
    )
  }
}

export default BinMap
