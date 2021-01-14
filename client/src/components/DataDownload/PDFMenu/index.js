import React from "react";
import { Button, Divider, Col, Row, Checkbox, Drawer} from "antd";
import IntervalOption from "../../IntervalOption"; 
import pdfPreview from "../../../images/pdfPreview.png";

class PDFMenu extends React.Component {
    constructor(props){
        super(props);
    }
    
    render() { 
        const defaultHistoricalOptions = [];
        const defaultRealtimeOptions = [];

        return (
            <Drawer
                visible={this.props.visible}
                title="Export to PDF"
                onClose={this.props.handleCancel}
                width="44%"
                headerStyle={{backgroundColor: '#4E4E4E', WebkitTextFillColor:'white'}}
                destroyOnClose={true}
            >
                    <div className="header">
                        <Row>
                            <Col span={12}>
                                <h2 style={{color: 'black', fontSize:'x-large'}}>Historical Data</h2>
                            </Col>
                            <div style={{margin: "auto auto 1rem auto", float:'right'}}>
                                <IntervalOption updateDates={this.props.handlePDFTimeChanges}/>
                            </div>
                        </Row>
                    </div>

                <div className="content">
                    <Checkbox.Group style={{width:'100%'}} defaultValue={defaultHistoricalOptions} onChange={this.props.handlePDFHistoricalSelections}>
                        <Row>
                            <Col span={8} >
                                <Checkbox value="avgDisposalCombined" style={{fontSize: 'medium'}}>Average Disposal Combined</Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="avgDisposalType" style={{fontSize: 'medium'}}>Average Disposal by Type</Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="disposalPercent" style={{fontSize: 'medium'}}>Disposal Percentage</Checkbox>
                            </Col>
                        </Row>
                        <br/>
                        <Row>
                            <Col span={8}>
                                <Checkbox value="disposalTotal" style={{fontSize: 'medium'}}>Total Disposal</Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="divergenceRateCombined" style={{fontSize: 'medium'}}>Divergence Rate Combined</Checkbox>
                            </Col>
                            <Col span={8}>
                                <Checkbox value="divergenceRateType" style={{fontSize: 'medium'}}>Divergence Rate by Type</Checkbox>
                            </Col>
                        </Row>
                    </Checkbox.Group>          
                </div>

                <br/>

                <div className="header">
                    <h2 style={{color: 'black', fontSize:'x-large'}}>Realtime Data</h2>
                </div>
                <div className="content">
                    <Checkbox.Group style={{width:'100%'}} defaultValue={defaultRealtimeOptions} onChange={this.props.handlePDFRealtimeSelections}>
                        <Col span={8}>
                            <Checkbox value="binStatus" style={{fontSize: 'medium'}}>Bin Status</Checkbox>
                        </Col>
                        <Col span={8}>
                            <Checkbox value="binLocation" style={{fontSize: 'medium'}}>Bin Location</Checkbox>
                        </Col>
                    </Checkbox.Group>
                </div>

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
                    <img style={{boxShadow: '0 0 11px rgba(0,0,0,0.15)', marginTop:'85px', marginLeft:'auto', marginRight:'auto', display:'block'}} src={pdfPreview} width="75%" height="75%"></img>
                </div>
            </Drawer>
        );
    }
  }
  
  export default PDFMenu;
