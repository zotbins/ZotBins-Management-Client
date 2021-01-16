import React from "react";
import { Button, Divider, Col, Row, Select, Drawer, Card} from "antd";
import IntervalOption from "../../IntervalOption"; 
import csvPreview from "../../../images/csv_preview.png";

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
                width="45%"
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
                </Card>

                <Divider></Divider>

                <div className="header">
                    <Col span={12}>
                    <h2 style={{color: 'black', fontSize:'x-large'}}>Report Preview</h2>
                    </Col>
                    <div style={{float:'right'}}>
                        <Button key="submit" type="primary" size="large" onClick={this.props.handleOk}>
                            Download Report
                        </Button>
                    </div>
                </div>
                <div className="content">
                    <img style={{boxShadow: '0 0 11px rgba(0,0,0,0.15)', marginTop:'85px', marginLeft:'auto', marginRight:'auto', display:'block'}} src={csvPreview} width="75%" height="75%"></img>
                </div>
            </Drawer>
        );
    }
  }
  
  export default CSVMenu;
