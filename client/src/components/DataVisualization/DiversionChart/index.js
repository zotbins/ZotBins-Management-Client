import React from 'react';
import Chart from "chart.js";

class DiversionChart extends React.Component {
    chartRef = React.createRef();
    
    componentDidMount() {
      const myChartRef = this.chartRef.current.getContext("2d");
        
      var tempChart = new Chart(myChartRef, {
          type: "line",
          options: {  
              legend: {
                onClick: function(event, legnItem){
                    var i = legnItem.datasetIndex;
                    tempChart.data.datasets[i].hidden = !tempChart.data.datasets[i].hidden;
                    tempChart.options.scales.yAxes[i].display = !tempChart.options.scales.yAxes[i].display;
                    tempChart.update();
                }
              },
              scales: {
                xAxes: [{
                    offset: false,
                    scaleLabel: {
                        display: true,
                        labelString: 'MONTH',
                        fontSize: 15,
                        fontFamily: 'georgia',
                        fontStyle: 'bold'
                    }
                }],
                yAxes: [
                {
                    id: 'A',
                    type: 'linear',
                    position: 'left',
                    gridLines: {
                        display: false,
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'LANDFILL WEIGHT (TONS)',
                        fontSize: 14,
                        fontFamily: 'georgia',
                        fontStyle: 'bold'
                    },
                    ticks: {
                        beginAtZero: true,
                    }
                },
                {
                    id: 'B',
                    type: 'linear',
                    position: 'right',
                    gridLines: {
                        display: false
                    },
                    scaleLabel: {
                        display: true,
                        labelString: 'DIVERSION RATE (%)',
                        fontSize: 14,
                        fontFamily: 'georgia',
                        fontStyle: 'bold'
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }]
              }
          },
          data: {
              //Bring in data
              labels: ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
              datasets: [
                  {
                      label: "Landfill Weight",
                      data: [11056, 8340, 9991, 4304, 7600, 5300, 2567, 3999, 7940, 9110, 10580, 8345],
                      yAxisID: 'A',
                      borderColor: 'rgba(56, 118, 172, 0.53)',
                      fill: false,
                      pointStyle: 'rectRounded',
                      borderWidth: 2,
                      lineTension: 0      
                  },
                  {
                      label: "Diversion Rate",
                      data: [3, 47, 52, 34, 76, 53, 25, 85, 79, 91, 58, 83],
                      yAxisID: 'B',
                      borderColor: 'rgba(53, 123, 35, 0.53)',
                      fill: false,
                      pointStyle: 'rectRounded',
                      borderWidth: 2,
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