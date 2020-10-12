import React from 'react';
import { Card, Col, Row } from 'antd';
import Chart from "chart.js";

var today = new Date();
var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds() + ((today.getHours() >= 12) ? " PM" : " AM");
var day = today.getMonth() + '/' + today.getDate() + '/' + today.getFullYear();

class CardVisualFeature extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            collapsedPage: props.collapsedPage,
            middleVersion: props.middleVersion
        }
    }

    render(){
        return(
            <Card id="cardVisualFeature">
                <Row>
                {this.state.collapsedPage && this.state.middleVersion
                ?<div>
                    <Row>
                        <h4 style={{color: 'black', textTransform: 'uppercase'}}>Realtime Data</h4>
                    </Row>

                    <Row>
                        <h4 style={{color: 'grey', fontVariant: 'small-caps'}}>
                            as of {time} on {day}
                        </h4>
                    </Row> </div>
                :<div>
                    <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                        <h2 style={{color: 'black', textTransform: 'uppercase', paddingLeft: '20px'}}>Realtime Data</h2>
                    </Col>

                    <Col xs={2} sm={4} md={6} lg={8} xl={10} style={{float: 'right'}}>
                        <h3 style={{float: 'right', color: 'grey', fontVariant: 'small-caps'}}>
                            as of {time} on {day}
                        </h3>
                    </Col></div>
                }
                </Row>
                <div>
                <Row gutter={16}>
                    {this.state.collapsedPage && this.state.middleVersion
                        ? <div><Row span={8}>
                            <Card title={<span style={{color: 'grey', fontSize: '75%'}}>Total Weight of Waste</span>} bordered={false}>
                                <Row>
                                    <Col span={16}>
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
                                    <Col span={8} style={{float: 'right'}}>
                                        <img style={{opacity: '0.75'}} src="https://library.kissclipart.com/20180827/sqe/kissclipart-bar-chart-clipart-bar-chart-clip-art-76882c69095eb289.png" width="90" height="70"></img>
                                    </Col>
                                </Row>
                            </Card>
                        </Row>
                        <Row span={8}>
                            <Card title={<span style={{color: 'grey', fontSize: '75%'}}>Total Weight of Recyclable</span>} bordered={false}>
                                <Row>
                                    <Col span={16}>
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
                                    <Col span={8} style={{float: 'right'}}>
                                        <img style={{opacity: '0.75'}} src="https://library.kissclipart.com/20180827/sqe/kissclipart-bar-chart-clipart-bar-chart-clip-art-76882c69095eb289.png" width="90" height="70" ></img>
                                    </Col>
                                </Row>                            
                            </Card>
                        </Row>
                        <Row span={8}>
                            <Card title={<span style={{color: 'grey', fontSize: '75%'}}>Total Weight of Compost</span>} bordered={false}>
                                <Row>
                                    <Col span={16}>
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
                                    <Col span={8} style={{float: 'right'}}>
                                        <img style={{opacity: '0.75'}} src="https://library.kissclipart.com/20180827/sqe/kissclipart-bar-chart-clipart-bar-chart-clip-art-76882c69095eb289.png" width="90" height="70"></img>
                                    </Col>
                                </Row>                            
                            </Card>
                        </Row>
                        </div>

                        :<div><Col span={8}>
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
                                        <img style={{opacity: '0.75'}} src="https://library.kissclipart.com/20180827/sqe/kissclipart-bar-chart-clipart-bar-chart-clip-art-76882c69095eb289.png" width="150" height="100"></img>
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
                                        <img style={{opacity: '0.75'}} src="https://library.kissclipart.com/20180827/sqe/kissclipart-bar-chart-clipart-bar-chart-clip-art-76882c69095eb289.png" width="150" height="100"></img>
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
                                        <img style={{opacity: '0.75'}} src="https://library.kissclipart.com/20180827/sqe/kissclipart-bar-chart-clipart-bar-chart-clip-art-76882c69095eb289.png" width="150" height="100"></img>
                                    </Col>
                                </Row>                            
                            </Card>
                        </Col>
                        </div>  
                    }
                    </Row>
                </div>
            </Card>
        )
    }
}

export default CardVisualFeature;