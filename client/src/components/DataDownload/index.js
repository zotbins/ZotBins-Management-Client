import React from "react";

import { message, Dropdown, Menu, Button, Icon } from "antd";
//import { DownOutlined, FilePdfOutlined, FileExcelOutlined } from "@ant-design/icons";


class DataDownload extends React.Component {
    constructor(props){
        super(props);

        this.handleMenuClick = this.handleMenuClick.bind(this);
        this.menu = (
            <Menu onClick={this.handleMenuClick}>
                <Menu.Item key="1" >
                    <Icon type="file-excel" /><span>    CSV</span>
                </Menu.Item>
                <Menu.Item key="2" >
                    <Icon type="file-pdf" /><span>    PDF</span>
                </Menu.Item>                
            </Menu>
        );
    }

    handleMenuClick({ key }){
        if(key == 1){
            this.props.getCSV();
            message.info("CSV file has been downloaded.");
        }
        if(key == 2){
            message.info("PDF file has been downloaded.");
        }
    }
    
    render() { 
        return (
        <Dropdown overlay={this.menu} >
            <Button type="primary">Export<Icon type="download" /></Button>
        </Dropdown>
        );
    }
  }
  
  export default DataDownload;
