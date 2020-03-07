import React from "react";
import { Ring } from '@antv/g2plot';
import { Doughnut } from "react-chartjs-2";
import { Card } from "antd";
import "./doughnut.scss";

var data = [{type: 'Landfill', value: 0}, {type: 'Recycle', value: 0}, {type:'Compost', value: 0}]

class DoughnutGraph extends React.Component {
  constructor(props) {
    super(props);
   
    this.state = {
      data: [0,0,0]
    }
    this.chartRef = React.createRef();
  }
  

  static getDerivedStateFromProps(nextProps, prevState) {
    return {
     data: nextProps.data,
    };
   }

// componentDidUpdate() {
//   this.getData();
// }


  render() {
    // if (this.state.data_loaded) {
      // this.getData();

      return (
        <div>
          <Card style={{ margin: "1rem" }}>
            {/* <div id={"container"}></div> */}
            <h3
            style={{
              fontWeight: 300,
              color: "#43425D",
              marginBottom: "1.5rem"
            }}
          >
            Disposable Count
          </h3>
            <Doughnut
            height={300}
            data={{
              labels: ["Recycle", "Landfill", "Compost"],
              datasets: [
                {
                  data: this.state.data,
                  backgroundColor: ["#3876AC88", "#61616188", "#357B2388"],
                  hoverBackgroundColor: ["#3876AC", "#616161", "#357B23"]
                }
              ]
            }}
          />
            
          </Card>
        </div>
      );
    // }
    // else {
    //     return (<div><img src={loading}></img></div>)
    // }
  }
}

export default DoughnutGraph;
