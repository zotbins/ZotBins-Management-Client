import React from 'react';
import Chart from "chart.js";
import { Card } from 'antd';

class Doughnut extends React.Component {
    
    
    constructor(props){
        super(props);

        this.state = {
            usageCount: null
        }
        this.chartRef = React.createRef();
    }

    
    
    getData() {
        fetch("http://localhost:9000/bin_breakbeam_count/2020-02-01+00%3A00%3A00/2020-02-03+23%3A59%3A59", 
        {method: 'GET'}).then(res => res.json()).then(data => this.setState({usageCount: [data.recycle, data.landfill, data.compost]}))
    }

    componentDidMount() {
        this.getData()
    

    }
    render() {
        // if (this.state.usageCount != null) {
            return (
                <div>
                    <Card style={{margin: "1rem"}}>
                        <h3 style={{fontWeight: 300, color: "#43425D", marginBottom: "1.5rem"}}>Disposable Percentage</h3>
                        <Doughnut ref={this.chartReference} data={[10,10,10]}    />
                    </Card>
                </div>
            )      
        // }
        // else {
        //     return (<div><h2>Loading...</h2></div>)
        // }
        
    }
}

export default Doughnut;