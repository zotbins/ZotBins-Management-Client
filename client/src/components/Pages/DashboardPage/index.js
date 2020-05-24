import React from "react";

import { Row, Col, Modal, Button} from "antd";
import LineChart from "../../DataVisualization/LineChart";
import DoughnutChart from "../../DataVisualization/DoughnutChart";
import BinMap from "../../DataVisualization/BinMap";
import Table from "../../DataVisualization/BinTable";
import IntervalOption from "../../IntervalOption";
// TODO: import tippersRequest.js functions here, to pass to components

class DashboardPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: [new Date(Date.now() - 3600000 - 28800000).toISOString(), new Date(Date.now() - 28800000).toISOString()],
      usage_count: [0,0,0], 
    }

    this.handleTimeChanges = this.handleTimeChanges.bind(this);
  }


  handleTimeChanges(i) {
    this.setState({time: i});
    this.getCountData(i);
    console.log(i);
  }

  async getCountData(time) {
    fetch(
      "http://localhost:9000/bin_breakbeam_count/" + time[0] + "/" + time[1],
      { method: "GET" }
    )
      .then(res => res.json())
      .then(res =>
       {
        this.setState({
          usage_count: [res.recycle, res.landfill, res.compost]
        });
       }
      );
  }

  getCSV() {
    let a = document.createElement('a');
    a.href = "http://localhost:9000/csv/ZBin3B/2020-02-04/2020-02-05";
    a.download = 'data.csv';
    a.click();
  }

  componentDidMount() {
    this.getCountData(this.state.time);

  }

  render() {
    return (
      <div
        style={{ display: "flex", flexDirection: "column", margin: "0 1rem" }}
      >
        <Row>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <h1
              style={{
                margin: "1rem 2rem 0 2rem",
                fontSize: "40px",
                fontWeight: "300",
                color: "#616161"
              }}
            >
              Overall Data
            </h1>

            <IntervalOption updateDates={this.handleTimeChanges}/>

            <div style={{display: "flex", margin:"2rem 1rem auto auto"}}>
              <Button type="primary" onClick={this.getCSV}>
                Export CSV
              </Button>
            </div>
      
          </div>
        </Row>

        <Row>
          <Col l={10} xl={16}>
            <LineChart />
            <Table />
          </Col>

          <Col l={10} xl={8}>
            <DoughnutChart data={this.state.usage_count} />
            <BinMap />
          </Col>
        </Row>
      </div>
    );
  }
}

export default DashboardPage;
