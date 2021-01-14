import React from "react";
import { message, Dropdown, Menu, Button, Icon } from "antd";
import PDFMenu from "./PDFMenu";
import CSVMenu from "./CSVMenu";


class DataDownload extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            pdfVisible: false,
            pdfHistoricalCheckedVals: [],
            pdfRealTimeCheckedVals: [],
            pdfTime: [new Date(Date.now() - 3600000 - 28800000).toISOString(), new Date(Date.now() - 28800000).toISOString()],
            csvVisible: false,
            csvTime: [new Date(Date.now() - 3600000 - 28800000).toISOString(), new Date(Date.now() - 28800000).toISOString()],
            csvBinID: 'ZBin7'
        }

        this.handleMenuClick = this.handleMenuClick.bind(this);
        this.menu = (
            <Menu>
                <Menu.Item key="1" onClick={this.handleMenuClick}>
                    <Icon type="file-excel" /><span>    CSV</span>
                </Menu.Item>
                <Menu.Item key="2" onClick={this.handleMenuClick}>
                    <Icon type="file-pdf" /><span>    PDF</span>
                </Menu.Item>                
            </Menu>
        );

        this.handlePDFCancel = this.handlePDFCancel.bind(this);
        this.handlePDFOk = this.handlePDFOk.bind(this);
        this.handlePDFHistoricalSelections = this.handlePDFHistoricalSelections.bind(this);
        this.handlePDFRealtimeSelections = this.handlePDFRealtimeSelections.bind(this);
        this.handlePDFTimeChanges = this.handlePDFTimeChanges.bind(this);

        this.handleCSVTimeChanges = this.handleCSVTimeChanges.bind(this);
        this.handleCSVCancel = this.handleCSVCancel.bind(this);
        this.handleCSVOk = this.handleCSVOk.bind(this);
        this.handleCSVBinIDChanges = this.handleCSVBinIDChanges.bind(this);
    }

    handleMenuClick({ key }){
        if(key == 1){
            this.setState({
                csvVisible: true,
            });
        }
        if(key == 2){
            this.setState({
                pdfVisible: true,
            });
        }
    }

    handlePDFOk() {
        this.handlePDFCancel();
        //TODO: generate PDF here
        message.loading('Generating PDF file...', 2.5)
            .then(() => message.success('PDF file has been downloaded.', 2.5));
    }

    handlePDFCancel() {
        this.setState({ 
            pdfVisible: false,
        });
    }

    handlePDFHistoricalSelections(tempPDFCheckedVals){
        this.setState({
            pdfHistoricalCheckedVals: tempPDFCheckedVals
        });
        console.log('chosen historical options = ', tempPDFCheckedVals);
    }

    handlePDFRealtimeSelections(tempPDFCheckedVals){
        this.setState({
            pdfRealTimeCheckedVals: tempPDFCheckedVals
        });
        console.log('chosen realtime options = ', tempPDFCheckedVals);
    }

    handlePDFTimeChanges(i){
        this.setState({
            pdfTime: i
        });
        console.log('chosen PDF time frame = ', i);
    }
    
    /*########################################################*/

    handleCSVOk() {
        this.handleCSVCancel();
        //generates CSV file here
        this.props.getCSV(this.state.csvTime, this.state.csvBinID);
        message.loading('Generating CSV file...', 1.5)
            .then(() => message.success('CSV file has been downloaded.', 2.5));
    }

    handleCSVCancel() {
        this.setState({ 
            csvVisible: false,
        });
    }

    handleCSVTimeChanges(i){
        this.setState({
            csvTime: i
        });
        console.log('chosen CSV time frame = ', i);
    }

    handleCSVBinIDChanges(i){
        this.setState({
            csvBinID: i
        });
        console.log('chosen CSV bin ID = ', i);
    }

    render() { 
        return (
            <>
            <Dropdown overlay={this.menu} >
                <Button type="primary" size="large">Export<Icon type="download" /></Button>
            </Dropdown>
            <PDFMenu visible={this.state.pdfVisible} handleCancel={this.handlePDFCancel} handleOk={this.handlePDFOk} 
                handlePDFHistoricalSelections={this.handlePDFHistoricalSelections} handlePDFRealtimeSelections={this.handlePDFRealtimeSelections} 
                handlePDFTimeChanges = {this.handlePDFTimeChanges}/>
            <CSVMenu visible={this.state.csvVisible} handleCancel={this.handleCSVCancel} handleOk={this.handleCSVOk} 
                handleCSVTimeChanges = {this.handleCSVTimeChanges} handleCSVBinIDChanges={this.handleCSVBinIDChanges}/>
            </>
        );
    }
  }
  
  export default DataDownload;
