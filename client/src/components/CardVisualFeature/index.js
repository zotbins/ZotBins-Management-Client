import React from 'react'
import { Card, Col, Row } from 'antd'
import RealtimeWeightCard from './RealtimeWeightCard'

var today = new Date()
var time =
  today.getHours() +
  ':' +
  today.getMinutes() +
  (today.getHours() >= 12 ? ' PM' : ' AM')
var day =
  today.getMonth() + 1 + '/' + today.getDate() + '/' + today.getFullYear()

class CardVisualFeature extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      collapsedPage: props.collapsedPage,
      middleVersion: props.middleVersion,
    }
  }

  render() {
    return (
      <Card id="cardVisualFeature">
        <Row>
          {this.state.collapsedPage && this.state.middleVersion ? (
            <div>
              <Row>
                <h2
                  style={{
                    color: 'black',
                    textTransform: 'uppercase',
                    textAlign: 'center',
                  }}
                >
                  Realtime Data
                </h2>
              </Row>
              <Row>
                <h5
                  style={{
                    color: 'grey',
                    fontVariant: 'small-caps',
                    textAlign: 'center',
                  }}
                >
                  as of {time} on {day}
                </h5>
              </Row>{' '}
            </div>
          ) : (
            <div>
              <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                <h2
                  style={{
                    color: 'black',
                    textTransform: 'uppercase',
                    paddingLeft: '20px',
                  }}
                >
                  Realtime Data
                </h2>
              </Col>

              <Col
                xs={2}
                sm={4}
                md={6}
                lg={8}
                xl={10}
                style={{ float: 'right' }}
              >
                <h3
                  style={{
                    float: 'right',
                    color: 'grey',
                    fontVariant: 'small-caps',
                  }}
                >
                  as of {time} on {day}
                </h3>
              </Col>
            </div>
          )}
        </Row>
        <div>
          <Row gutter={16}>
            {this.state.collapsedPage && this.state.middleVersion ? (
              <div>
                <Row span={8}>
                  <RealtimeWeightCard
                    typeBin={'Total Weight of Waste'}
                    weightOfBin={'120 lbs'}
                    percentChangeOfBin={'- 24.6%'}
                    percentChangeColor={'red'}
                  />
                </Row>
                <Row span={8}>
                  <RealtimeWeightCard
                    typeBin={'Total Weight of Recyclable'}
                    weightOfBin={'40 lbs'}
                    percentChangeOfBin={'+ 13.4%'}
                    percentChangeColor={'#42CE38'}
                  />
                </Row>
                <Row span={8}>
                  <RealtimeWeightCard
                    typeBin={'Total Weight of Compost'}
                    weightOfBin={'62 lbs'}
                    percentChangeOfBin={'- 11.3%'}
                    percentChangeColor={'red'}
                  />
                </Row>
              </div>
            ) : (
              <div>
                <Col span={8}>
                  <RealtimeWeightCard
                    typeBin={'Total Weight of Waste'}
                    weightOfBin={'120 lbs'}
                    percentChangeOfBin={'- 24.6%'}
                    percentChangeColor={'red'}
                  />
                </Col>
                <Col span={8}>
                  <RealtimeWeightCard
                    typeBin={'Total Weight of Recyclable'}
                    weightOfBin={'40 lbs'}
                    percentChangeOfBin={'+ 13.4%'}
                    percentChangeColor={'#42CE38'}
                  />
                </Col>
                <Col span={8}>
                  <RealtimeWeightCard
                    typeBin={'Total Weight of Compost'}
                    weightOfBin={'62 lbs'}
                    percentChangeOfBin={'- 11.3%'}
                    percentChangeColor={'red'}
                  />
                </Col>
              </div>
            )}
          </Row>
        </div>
      </Card>
    )
  }
}

export default CardVisualFeature
