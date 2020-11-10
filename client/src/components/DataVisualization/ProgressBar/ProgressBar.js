import React from 'react'
import { Progress, Col, Row } from 'antd'

class ProgressBar extends React.Component {
  state = {
    percent: 20,
  }

  render() {
    return (
      <div>
        <Row gutter={[48, 24]}>
          <Col span={8}>
            <h3
              style={{
                color: '#616161',
                float: 'left',
                fontWeight: 'light',
                fontVariant: 'small-caps',
              }}
            >
              Rbin1
            </h3>
            <Progress strokeWidth={10} percent={25} strokeColor="#108ee9" />
          </Col>
          <Col span={8}>
            <h3
              style={{
                color: '#616161',
                float: 'left',
                fontWeight: 'light',
                fontVariant: 'small-caps',
              }}
            >
              Cbin1
            </h3>
            <Progress strokeWidth={10} percent={30} strokeColor="#87d068" />
          </Col>
          <Col span={8}>
            <h3
              style={{
                color: '#616161',
                float: 'left',
                fontWeight: 'light',
                fontVariant: 'small-caps',
              }}
            >
              Lbin1
            </h3>
            <Progress strokeWidth={10} percent={45} strokeColor="#616161" />
          </Col>
        </Row>
        <Row gutter={[48, 24]}>
          <Col span={8}>
            <h3
              style={{
                color: '#616161',
                float: 'left',
                fontWeight: 'light',
                fontVariant: 'small-caps',
              }}
            >
              Rbin2
            </h3>
            <Progress strokeWidth={10} percent={66} strokeColor="#108ee9" />
          </Col>
          <Col span={8}>
            <h3
              style={{
                color: '#616161',
                float: 'left',
                fontWeight: 'light',
                fontVariant: 'small-caps',
              }}
            >
              Cbin2
            </h3>
            <Progress strokeWidth={10} percent={50} strokeColor="#87d068" />
          </Col>
          <Col span={8}>
            <h3
              style={{
                color: '#616161',
                float: 'left',
                fontWeight: 'light',
                fontVariant: 'small-caps',
              }}
            >
              Lbin2
            </h3>
            <Progress strokeWidth={10} percent={76} strokeColor="#616161" />
          </Col>
        </Row>
        <Row gutter={[48, 24]}>
          <Col span={8}>
            <h3
              style={{
                color: '#616161',
                float: 'left',
                fontWeight: 'light',
                fontVariant: 'small-caps',
              }}
            >
              Rbin3
            </h3>
            <Progress strokeWidth={10} percent={48} strokeColor="#108ee9" />
          </Col>
          <Col span={8}>
            <h3
              style={{
                color: '#616161',
                float: 'left',
                fontWeight: 'light',
                fontVariant: 'small-caps',
              }}
            >
              Cbin3
            </h3>
            <Progress strokeWidth={10} percent={33} strokeColor="#87d068" />
          </Col>
          <Col span={8}>
            <h3
              style={{
                color: '#616161',
                float: 'left',
                fontWeight: 'light',
                fontVariant: 'small-caps',
              }}
            >
              Lbin3
            </h3>
            <Progress strokeWidth={10} percent={24} strokeColor="#616161" />
          </Col>
        </Row>
      </div>
    )
  }
}

export default ProgressBar
