import React from 'react';

import { Row, Col } from 'antd';
import LineChart from "../../DataVisualization/LineChart";
import Doughnut from "../../DataVisualization/Doughnut";
import BinMap from "../../DataVisualization/BinMap";
import Table from "../../DataVisualization/BinTable";
// TODO: import tippersRequest.js functions here, to pass to components

class DashboardPage extends React.Component {
    render() { 
        return (
        <div id="dashboard-page">
            <Row>
                <Col>
                    <h1>Overall Data</h1>
                </Col>
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
        )
    }
}

export default DashboardPage;
