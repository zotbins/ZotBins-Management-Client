import React from 'react';
import Chart from "chart.js";

class DiversionChart extends React.Component {
    chartRef = React.createRef();
    
    componentDidMount() {
      const myChartRef = this.chartRef.current.getContext("2d");
      
      new Chart(myChartRef, {
          type: "line",
          options: {  
              legend: {
                display: false
              },
              scales: {
                xAxes: [{
                    offset: true,
                    scaleLabel: {
                        display: true,
                        labelString: 'Month',
                        fontSize: 20,
                        fontFamily: "'Quicksand', sans-serif"
                    }
                }],
                yAxes: [
                {
                    scaleLabel: {
                        display: true,
                        labelString: 'Diversion Rate (%)',
                        fontSize: 20,
                        fontFamily: "'Quicksand', sans-serif"
                    },
                    ticks: {
                        beginAtZero: true,
                    }
                }]
              }
          },
          data: {
              //Bring in data
              labels: ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
              datasets: [
                  {
                      label: "Diversion Rate",
                      data: [3, 47, 52, 34, 76, 53, 25, 85, 79, 91, 58, 83],
                      borderColor: 'rgba(53, 123, 35, 0.53)',
                      fill: false,
                      pointStyle: 'rectRounded',
                      borderWidth: 6,
                      lineTension: 0      
                  }
              ]
            }}
            ) 
    }
    render() {
        return (
            <div>
                    <canvas
                        height="110px"
                        id="myDivChart"
                        ref={this.chartRef}
                    />
            </div>
        )
    }
}

export default DiversionChart;