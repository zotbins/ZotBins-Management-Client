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
        <div style={{ display: "flex", flexDirection: "column", margin: "0 3rem"}}>
            <Row>
                <Col>
                    <h1 style={{margin: "2rem 2rem 0 2rem", fontSize: "40px", fontWeight: "300", color: "#43425D"}}>Overall Data</h1>
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