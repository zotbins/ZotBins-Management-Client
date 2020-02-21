import React from 'react';
import Chart from "chart.js";
import { Card } from 'antd';

class LineChart extends React.Component {
    chartRef = React.createRef();
    
    // TODO: Implement ZotBins Line Chart, edit code below - These are example data
    componentDidMount() {
        const myChartRef = this.chartRef.current.getContext("2d");
        
        new Chart(myChartRef, {
            type: "line",
            data: {
                //Bring in data
                labels: ["Jan", "Feb", "March"],
                datasets: [
                    {
                        label: "Waste",
                        data: [86, 27, 91],
                        backgroundColor: "#61616188",
                    },
                    {
                        label: "Recycle",
                        data: [30, 77, 51],
                        backgroundColor: "#3876AC88",
                    },
                    {
                        label: "Compost",
                        data: [60, 57, 25],
                        backgroundColor: "#357B2388",
                    },

                ]
            },
            options: {
                //Customize chart options
            }
        });
    }
    render() {
        return (
            <div>
                <Card id="line-chart-card">
                <canvas
                    height="110px"
                    id="myChart"
                    ref={this.chartRef}
                />
                </Card>
            </div>
        )
    }
}

export default LineChart;