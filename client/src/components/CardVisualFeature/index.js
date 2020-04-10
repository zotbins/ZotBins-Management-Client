import React from 'react';
import { Card, Col, Row } from 'antd';

var today = new Date();
var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds() + ((today.getHours() >= 12) ? " PM" : " AM");
var day = today.getMonth() + '/' + today.getDate() + '/' + today.getFullYear();

class CardVisualFeature extends React.Component{
    render(){
        return(
            <Card id="cardVisualFeature">
                <Row>
                    <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                        <h2 style={{color: 'black', textTransform: 'uppercase', paddingLeft: '20px'}}>Realtime Data</h2>
                    </Col>

                    <Col xs={2} sm={4} md={6} lg={8} xl={10} style={{float: 'right'}}>
                        <h3 style={{float: 'right', color: 'grey', fontVariant: 'small-caps'}}>
                            as of {time} on {day}
                        </h3>
                    </Col>
                </Row>
                <div>
                <Row gutter={16}>
                        <Col span={8}>
                            <Card title={<span style={{color: 'grey', fontSize: '90%'}}>Total Weight of Waste</span>} bordered={false}>
                                <Row>
                                    <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                                        <Row>
                                            <h2 style={{color: '#616161', float: 'left', fontWeight:'bold'}}>
                                            120 lbs
                                            </h2>
                                        </Row>
                                        <Row align="top">
                                            <h6 style={{color: 'red', float: 'left', fontWeight:'bold', fontVariant: 'small-caps'}}>
                                            - 24.6%
                                            </h6>
                                        </Row>
                                    </Col>
                                    <Col xs={2} sm={4} md={6} lg={8} xl={10} style={{float: 'right'}}>
                                        <img src="https://library.kissclipart.com/20180827/sqe/kissclipart-bar-chart-clipart-bar-chart-clip-art-76882c69095eb289.png" width="150" height="100"></img>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title={<span style={{color: 'grey', fontSize: '90%'}}>Total Weight of Recyclable</span>} bordered={false}>
                                <Row>
                                    <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                                        <Row>
                                            <h2 style={{color: '#616161', float: 'left', fontWeight:'bold'}}>
                                            40 lbs
                                            </h2>
                                        </Row>
                                        <Row align="top">
                                            <h6 style={{color: '#42CE38', float: 'left', fontWeight:'bold', fontVariant: 'small-caps'}}>
                                            + 13.4%
                                            </h6>
                                        </Row>
                                    </Col>
                                    <Col xs={2} sm={4} md={6} lg={8} xl={10} style={{float: 'right'}}>
                                        <img src="https://library.kissclipart.com/20180827/sqe/kissclipart-bar-chart-clipart-bar-chart-clip-art-76882c69095eb289.png" width="150" height="100"></img>
                                    </Col>
                                </Row>                            
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title={<span style={{color: 'grey', fontSize: '90%'}}>Total Weight of Compost</span>} bordered={false}>
                                <Row>
                                    <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                                        <Row>
                                            <h2 style={{color: '#616161', float: 'left', fontWeight:'bold'}}>
                                            62 lbs
                                            </h2>
                                        </Row>
                                        <Row align="top">
                                            <h6 style={{color: 'red', float: 'left', fontWeight:'bold', fontVariant: 'small-caps'}}>
                                            - 11.3%
                                            </h6>
                                        </Row>
                                    </Col>
                                    <Col xs={2} sm={4} md={6} lg={8} xl={10} style={{float: 'right'}}>
                                        <img src="https://library.kissclipart.com/20180827/sqe/kissclipart-bar-chart-clipart-bar-chart-clip-art-76882c69095eb289.png" width="150" height="100"></img>
                                    </Col>
                                </Row>                            
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Card>
        )
    }
}

export default CardVisualFeature;