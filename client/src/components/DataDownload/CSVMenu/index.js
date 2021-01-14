import React from "react";
import { Button, Divider, Col, Row, Select, Drawer, Card} from "antd";
import IntervalOption from "../../IntervalOption"; 

const { Option } = Select;

class CSVMenu extends React.Component {
    constructor(props){
        super(props);
    }
    
    render() { 
        return (
            <Drawer
                visible={this.props.visible}
                title="Export to CSV"
                onClose={this.props.handleCancel}
                width="500px"
                headerStyle={{backgroundColor: '#4E4E4E', WebkitTextFillColor:'white'}}
                destroyOnClose={true}
            >
                <Card>
                <div>
                    <Row>
                        <Col span={10}>
                            <h2 style={{color: 'black', float:'right', marginRight:'1rem'}}>Data Type: </h2>
                        </Col>
                        <div style={{margin: "auto auto 1rem auto"}}>
                            <Select defaultValue="WeightDistance" style={{ width: '40%' }}>
                                <Option value="WeightDistance">Weight Distance</Option>
                            </Select>
                        </div>
                    </Row>
                </div>

                <div>
                    <Row>
                        <Col span={10}>
                            <h2 style={{color: 'black', float:'right', marginRight:'1rem'}}>Bin ID: </h2>
                        </Col>
                        <div style={{margin: "auto auto 1rem auto"}}>
                            <Select defaultValue="ZBin7" style={{ width: '40%' }} onChange={this.props.handleCSVBinIDChanges}>
                                <Option value="ZBin1">ZBin1</Option>
                                <Option value="ZBin4">ZBin4</Option>
                                <Option value="ZBin7">ZBin7</Option>
                            </Select>
                        </div>
                    </Row>
                </div>

                <div>
                    <Row>
                        <Col span={10}>
                            <h2 style={{color: 'black', float:'right', marginRight:'1rem'}}>Time Range: </h2>
                        </Col>
                        <div style={{margin: "auto auto 1rem auto"}}>
                            <IntervalOption updateDates={this.props.handleCSVTimeChanges}/>
                        </div>
                    </Row>
                </div>
                <br/>
                <div style={{float: 'right', width:'75%', border: '0px solid green'}}>
                    <Button key="submit" type="primary" onClick={this.props.handleOk} size="large" style={{width:'200px'}}>
                        Download Report
                    </Button>
                </div>
                <br/><br/>
                </Card>
            </Drawer>
        );
    }
  }
  
  export default CSVMenu;
