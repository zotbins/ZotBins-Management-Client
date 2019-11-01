import React from 'react';

import { Row, Col } from 'antd';
import LineChart from "../LineChart";
import Doughnut from "../Doughnut";
import BinMap from "../BinMap";


class DashboardPage extends React.Component {
    render() {
        return (
        <div style={{display: "flex", flexDirection: "row", width: "100%"}}>
            <div style={{width: "65%"}}>
            <h1 style={{margin: "1rem", fontWeight: "400"}}>Overall Data</h1>
                <LineChart />

            </div>
            <div style={{width: "35%"}}>
                <Doughnut />
                {/* <BinMap /> // Work in progress */}
            </div>
        </div>
        )
    }
}

export default DashboardPage;