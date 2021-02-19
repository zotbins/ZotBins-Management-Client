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
                        <h4 id ="cardVisualFeature__collapsed-realtime-data">Realtime Data</h4>
                    </Row>

                    <Row>
                        <h4 style={{color: 'grey', fontVariant: 'small-caps'}}>
                            as of {time} on {day}
                        </h4>
                    </Row> </div>
                :<div>
                    <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                        <h2 id="cardVisualFeature__uncollapsed-realtime-data">Realtime Data</h2>
                    </Col>

                    <Col xs={2} sm={4} md={6} lg={8} xl={10} id="cardVisualFeature__column-time-day">
                        <h3 id = "cardVisualFeature__text-time-day">
                            as of {time} on {day}
                        </h3>
                    </Col></div>
                }
                </Row>
                <div>
                <Row gutter={16}>
                    {this.state.collapsedPage && this.state.middleVersion
                        ? <div><Row span={8}>
                            <Card title={<span id = "cardVisualFeature__card-collapsed-title-text">Total Weight of Waste</span>} bordered={false}>
                                <Row>
                                    <Col span={16}>
                                        <Row>
                                            <h2 id = "cardVisualFeature__card-weight-text">
                                            120 lbs
                                            </h2>
                                        </Row>
                                        <Row align="top">
                                            <h6 id = "cardVisualFeature__card-percentage-text">
                                            - 24.6%
                                            </h6>
                                        </Row>
                                    </Col>
                                    <Col span={8} id = "cardVisualFeature__card-column">
                                        <img id = "cardVisualFeature__card-graph-img" src="https://library.kissclipart.com/20180827/sqe/kissclipart-bar-chart-clipart-bar-chart-clip-art-76882c69095eb289.png" width="90" height="70"></img>
                                    </Col>
                                </Row>
                            </Card>
                        </Row>
                        <Row span={8}>
                            <Card title={<span id = "cardVisualFeature__card-collapsed-title-text">Total Weight of Recycling</span>} bordered={false}>
                                <Row>
                                    <Col span={16}>
                                        <Row>
                                        <h2 id = "cardVisualFeature__card-weight-text">
                                            40 lbs
                                            </h2>
                                        </Row>
                                        <Row align="top">
                                        <h6 id = "cardVisualFeature__card-percentage-text">
                                            + 13.4%
                                            </h6>
                                        </Row>
                                    </Col>
                                    <Col span={8} id = "cardVisualFeature__card-column">
                                        <img id = "cardVisualFeature__card-graph-img" src="https://library.kissclipart.com/20180827/sqe/kissclipart-bar-chart-clipart-bar-chart-clip-art-76882c69095eb289.png" width="90" height="70" ></img>
                                    </Col>
                                </Row>                            
                            </Card>
                        </Row>
                        <Row span={8}>
                            <Card title={<span id = "cardVisualFeature__card-collapsed-title-text">Total Weight of Compost</span>} bordered={false}>
                                <Row>
                                    <Col span={16}>
                                        <Row>
                                        <h2 id = "cardVisualFeature__card-weight-text">
                                            62 lbs
                                            </h2>
                                        </Row>
                                        <Row align="top">
                                        <h6 id = "cardVisualFeature__card-percentage-text">
                                            - 11.3%
                                            </h6>
                                        </Row>
                                    </Col>
                                    <Col span={8} id = "cardVisualFeature__card-column">
                                        <img id = "cardVisualFeature__card-graph-img" src="https://library.kissclipart.com/20180827/sqe/kissclipart-bar-chart-clipart-bar-chart-clip-art-76882c69095eb289.png" width="90" height="70"></img>
                                    </Col>
                                </Row>                            
                            </Card>
                        </Row>
                        </div>

                        :<div><Col span={8}>
                            <Card title={<span id = "cardVisualFeature__card-uncollapsed-title-text">Total Weight of Waste</span>} bordered={false}>
                                <Row>
                                    <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                                        <Row>
                                            <h2 id = "cardVisualFeature__card-weight-text">
                                            120 lbs
                                            </h2>
                                        </Row>
                                        <Row align="top">
                                            <h6 id = "cardVisualFeature__card-percentage-text">
                                            - 24.6%
                                            </h6>
                                        </Row>
                                    </Col>
                                    <Col xs={2} sm={4} md={6} lg={8} xl={10} id = "cardVisualFeature__card-column">
                                        <img id = "cardVisualFeature__card-graph-img" src="https://library.kissclipart.com/20180827/sqe/kissclipart-bar-chart-clipart-bar-chart-clip-art-76882c69095eb289.png" width="150" height="100"></img>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title={<span id = "cardVisualFeature__card-uncollapsed-title-text">Total Weight of Recycling</span>} bordered={false}>
                                <Row>
                                    <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                                        <Row>
                                            <h2 id = "cardVisualFeature__card-weight-text">
                                            40 lbs
                                            </h2>
                                        </Row>
                                        <Row align="top">
                                            <h6 id = "cardVisualFeature__card-positive-percentage-text">
                                            + 13.4%
                                            </h6>
                                        </Row>
                                    </Col>
                                    <Col xs={2} sm={4} md={6} lg={8} xl={10} id = "cardVisualFeature__card-column">
                                        <img id = "cardVisualFeature__card-graph-img" src="https://library.kissclipart.com/20180827/sqe/kissclipart-bar-chart-clipart-bar-chart-clip-art-76882c69095eb289.png" width="150" height="100"></img>
                                    </Col>
                                </Row>                            
                            </Card>
                        </Col>
                        <Col span={8}>
                            <Card title={<span id = "cardVisualFeature__card-uncollapsed-title-text">Total Weight of Compost</span>} bordered={false}>
                                <Row>
                                    <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                                        <Row>
                                            <h2 id = "cardVisualFeature__card-weight-text">
                                            62 lbs
                                            </h2>
                                        </Row>
                                        <Row align="top">
                                            <h6 id = "cardVisualFeature__card-percentage-text">
                                            - 11.3%
                                            </h6>
                                        </Row>
                                    </Col>
                                    <Col xs={2} sm={4} md={6} lg={8} xl={10} id = "cardVisualFeature__card-column">
                                        <img id = "cardVisualFeature__card-graph-img" src="https://library.kissclipart.com/20180827/sqe/kissclipart-bar-chart-clipart-bar-chart-clip-art-76882c69095eb289.png" width="150" height="100"></img>
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