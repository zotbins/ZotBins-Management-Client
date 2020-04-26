import React from 'react';

import { Row, Col } from 'antd';
import LineChart from "../../DataVisualization/LineChart";
import Doughnut from "../../DataVisualization/Doughnut";
import BinMap from "../../DataVisualization/BinMap";
import Table from "../../DataVisualization/BinTable";
import CardVisualFeature from "../../CardVisualFeature"
// TODO: import tippersRequest.js functions here, to pass to components

class DashboardPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            windowWidth: 0,
            windowHeight: 0
        }
    }

    componentDidMount(){
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }

    componentWillUnmount(){
        window.removeEventListener("resize", this.updateDimensions.bind(this));
    }

    updateDimensions() {
        let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
        let windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;

        this.setState({windowWidth, windowHeight});
    }
    render() { 
        const { windowWidth } = this.state;
        const collapsedPage = windowWidth < 1200;
        const middleVersion = windowWidth < 1200 && windowWidth > 800;
        const pageID = collapsedPage ? "dashboard-page-collapsed" : "dashboard-page";

        return (
            <div id={pageID}>
                {!collapsedPage
                ?<div>
                    <Row>
                        <Col>
                            <h1>Overall Data</h1>
                        </Col>
                    </Row>
                    <Row>
                        <CardVisualFeature />
                    </Row>
                    <Row>
                        <Col span={17}>
                            <LineChart />
                            <Table />
                        </Col>
                        <Col span={7}>
                            <Doughnut />
                            <BinMap />
                        </Col>
                    </Row>
                </div>
                :<div>
                    <Row>
                        <Col>
                            <h1>Overall Data</h1>
                        </Col>
                    </Row>
                    <Row>
                        <LineChart />
                    </Row>
                    {middleVersion
                    ? <Row>
                        <Col span={17}>
                            <Doughnut />
                        </Col>
                        <Col span={7}>
                            <CardVisualFeature collapsedPage={collapsedPage} middleVersion={middleVersion}/>
                        </Col>
                    </Row>
                    :<Row>
                        <Row>
                            <CardVisualFeature collapsedPage={collapsedPage} middleVersion={middleVersion}/>
                        </Row>
                        <Row>
                            <Doughnut />
                        </Row>
                    </Row>
                    }
                    
                    <Row>
                        <BinMap />
                    </Row>
                    <Row>
                        <Table />
                    </Row>
                </div>
                }
            </div>
        )
    }
}

export default DashboardPage;
