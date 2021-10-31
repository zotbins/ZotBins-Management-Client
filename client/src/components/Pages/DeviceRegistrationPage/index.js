import React from 'react'
import {
  Form,
  Input,
  Button,
  Checkbox,
  Menu,
  Dropdown,
  Tooltip,
  Icon,
  Row,
  Col,
  Card,
} from 'antd'

class BinRegistrationPage extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      checkedValues: [],
      bin_type: 'Bin Type',
      bin_id: 'Bin ID',
      bin_name: '',
      location_name: '',
      latitude: '',
      longitude: '',
    }
  }

  menu = () => {
    return (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key="1">
          <Icon type="user" />
          Recycle
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="user" />
          Landfill
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="user" />
          Compost
        </Menu.Item>
      </Menu>
    )
  }

  handleMenuClick = (e) => {
    if (e.key == 1) {
      this.setState({ bin_type: 'Recycle' }, this.generateBinID)
    } else if (e.key == 2) {
      this.setState({ bin_type: 'Landfill' }, this.generateBinID)
    } else if (e.key == 3) {
      this.setState({ bin_type: 'Compost' }, this.generateBinID)
    }
  }

  handleNameChange = (e) => {
    this.setState({ bin_name: e.target.value }, this.generateBinID)
  }

  handleLocationNameChange = (e) => {
    this.setState({ location_name: e.target.value })
  }

  handleLatitudeChange = (e) => {
    this.setState({ latitude: e.target.value })
  }

  handleLongitudeChange = (e) => {
    this.setState({ longitude: e.target.value })
  }

  handleSubmit = (e) => {
    console.log(this.state)
  }

  generateBinID() {
    if (this.state.bin_type != 'Bin Type') {
      this.setState({
        bin_id: this.state.bin_type[0] + '-' + this.state.bin_name,
      })
    } else {
      this.setState({ bin_id: 'Bin ID' })
    }
  }

  render() {
    return (
      <div>
        <Row id="bin-registration-header">
          {/* <Col> */}
          <h1>Bin Registration</h1>
          {/* </Col> */}
        </Row>

        <div id="bin-registration-page">
          <Card>
            <Row>
              <Col>
                <Row gutter={[16, 48]}>
                  <Col>
                    <Row>
                      <h2>Bin Information</h2>
                    </Row>
                    <Row>
                      <Col span={2}>
                        <Dropdown
                          // className="registration-input"
                          overlay={this.menu}
                        >
                          <Button>
                            {this.state.bin_type} <Icon type="down" />
                          </Button>
                        </Dropdown>
                      </Col>

                      <Col span={4}>
                        <Input
                          // className="registration-input"
                          onChange={this.handleNameChange}
                          placeholder="Bin Name"
                          suffix={
                            <Tooltip title="You can use ZBin1 through ZBin36, but don’t use a ZBin thats already being used.">
                              <Icon type="info-circle" id="x-tooltip-style" />
                            </Tooltip>
                          }
                        />
                      </Col>
                      <Col span={4}>
                        <Input
                          // className="registration-input"
                          placeholder="Bin ID"
                          value={this.state.bin_id}
                          disabled
                        />
                      </Col>
                    </Row>
                  </Col>
                </Row>

                <Row gutter={[16, 48]}>
                  <Col>
                    <Row>
                      <h2>Location Information</h2>
                    </Row>

                    <Row>
                      <Col span={4}>
                        <Input
                          className="registration-input"
                          placeholder="Location Name"
                          onChange={this.handleLocationNameChange}
                        />
                      </Col>

                      <Col span={4}>
                        <Input
                          className="registration-input"
                          placeholder="Latitude"
                          onChange={this.handleLatitudeChange}
                          suffix={
                            <Tooltip title="You can use ZBin1 through ZBin36, but don’t use a ZBin thats already being used.">
                              <Icon type="info-circle" id="x-tooltip-style" />
                            </Tooltip>
                          }
                        />
                      </Col>

                      <Col span={4}>
                        <Input
                          className="registration-input"
                          placeholder="Longitude"
                          onChange={this.handleLongitudeChange}
                          suffix={
                            <Tooltip title="You can use ZBin1 through ZBin36, but don’t use a ZBin thats already being used.">
                              <Icon type="info-circle" id="x-tooltip-style" />
                            </Tooltip>
                          }
                        />
                      </Col>
                    </Row>
                  </Col>
                </Row>

                <Row gutter={[24, 48]}>
                  <Col span={8}>
                    <h2>Sensors</h2>
                    <Row>
                      {/* <Button
                    type="primary"
                    shape="round"
                    icon= "upload"
                    size={'small'}
                  >
                    Config File
                  </Button> */}
                      <Checkbox>Weight</Checkbox>
                    </Row>

                    <Row>
                      {/* <Button
                    type="primary"
                    shape="round"
                    icon= "upload"
                    size={'small'}
                  >
                    Config File
                  </Button> */}
                      <Checkbox>Distance</Checkbox>
                    </Row>

                    {/* <Checkbox>Distance</Checkbox> */}
                  </Col>
                  {/* <Col>
                <h2>Verify weight sensors configuration</h2>
                <h2>Verify distance sensors configuration</h2>
              </Col> */}
                </Row>

                <Row>
                  <Col>
                    <Button onClick={this.handleSubmit} type="primary">
                      Register New Bin
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>
        </div>
      </div>
    )
  }
}

export default BinRegistrationPage
