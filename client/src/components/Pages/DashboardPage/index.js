    import React from 'react';

    import { Row, Col, Menu, Icon, Dropdown, Button } from 'antd';
    import LineChart from "../../DataVisualization/LineChart";
    import Doughnut from "../../DataVisualization/Doughnut";
    import BinMap from "../../DataVisualization/BinMap";
    import Table from "../../DataVisualization/BinTable";
    import IntervalOption from "../../IntervalOption";
    // TODO: import tippersRequest.js functions here, to pass to components

    class DashboardPage extends React.Component {
        constructor(props) {
            super(props);


        }


        render() { 

            return (
            <div style={{ display: "flex", flexDirection: "column", margin: "0 1rem"}}>
                <Row>
                    <div style={{ display: "flex", flexDirection: "row"}}>

                        <h1 style={{margin: "1rem 2rem 0 2rem", fontSize: "40px", fontWeight: "300", color: "#616161"}}>Overall Data</h1>

                        <IntervalOption />

                        

                    </div>

                </Row>

                <Row>

                <Col l={10} xl={16}>
                    <LineChart />
                    <Table />

                </Col>

                <Col l={10} xl={8}>
                    <Doughnut />
                    <BinMap />
                </Col>

                </Row>
            </div>
            )
        }
    }

    export default DashboardPage;