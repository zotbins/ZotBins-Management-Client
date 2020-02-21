import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Card } from "antd";

class DoughnutGraph extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      usageCount: null
    };
    this.chartRef = React.createRef();
  }

  getData() {
    fetch(
      "http://localhost:9000/bin_breakbeam_count/2020-02-01+00%3A00%3A00/2020-02-03+23%3A59%3A59",
      { method: "GET" }
    )
      .then(res => res.json())
      .then(data =>
        this.setState({
          usageCount: [data.recycle, data.landfill, data.compost]
        })
      );
  }

  componentDidMount() {
    this.getData();
  }
  render() {
    // if (this.state.usageCount != null) {
    return (
      <div>
        <Card style={{ margin: "1rem" }}>
          <h3
            style={{
              fontWeight: 300,
              color: "#43425D",
              marginBottom: "1.5rem"
            }}
          >
            Disposable Percentage
          </h3>
          <Doughnut
            data={{
              labels: ["Red", "Green", "Yellow"],
              datasets: [
                {
                  data: [300, 50, 100],
                  backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
                  hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
                }
              ]
            }}
          />
        </Card>
      </div>
    );
    // }
    // else {
    //     return (<div><h2>Loading...</h2></div>)
    // }
  }
}

export default DoughnutGraph;
