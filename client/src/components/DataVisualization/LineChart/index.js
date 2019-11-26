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
                        label: "Sales",
                        data: [86, 67, 91],
                    }
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
                    height="100px"
                    id="myChart"
                    ref={this.chartRef}
                />
                </Card>
            </div>
        )
    }
}

export default LineChart;