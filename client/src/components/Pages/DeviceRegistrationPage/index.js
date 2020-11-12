import React from 'react';
import { Form, Input, Button, Checkbox, Menu, Dropdown, Tooltip, Icon } from 'antd';



class BinStatusPage extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            checkedValues: [],
            bin_type: "Bin Type",
            bin_id: "",
            bin_name: "Bin Name"
        }
        this.menu = this.menu.bind(this);
        this.handleMenuClick = this.handleMenuClick.bind(this);


    }

    menu(){
        return(
        <Menu onClick={this.handleMenuClick}>
          <Menu.Item key="1">
            <Icon type="user" />
            Recycle
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="user" />
            Landfill
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="user" />
            Compost
          </Menu.Item>
        </Menu>
      );
    }

    async handleMenuClick(e) {
        if (e.key == 1) {
            this.setState({bin_type: "Recycle"}, this.generateBinName())
        }
        else if (e.key == 2){
            this.setState({bin_type: "Landfill"}, this.generateBinName())
        }
        else if (e.key == 3){
            this.setState({bin_type: "Compost"}, this.generateBinName())
        }
        await this.generateBinName()
            
    }

    async handleIDChange(e) {
        this.setState({bin_id: e.target.value}, this.generateBinName()); 
        
            
    }

    generateBinName() {
        if(this.state.bin_type != "Bin Type" && this.state.bin_id != "") {
            this.setState({bin_name: this.state.bin_type[0] + this.state.bin_id})
        }
        else {
            this.setState({bin_name: "Bin Name"})
        }
    }

    render() {
        return (
            <div>
            <h1>Bin registration</h1>
            <h2>Bin information</h2>
            <div id = "registration-input__bintype-style">
            <Dropdown className="registration-input" overlay={this.menu}>
                <Button>
                    {this.state.bin_type} <Icon type="down" />
                </Button>
            </Dropdown>

            <Input className="registration-input"
                onChange={e => this.handleIDChange(e)}
                placeholder="Bin ID"
                suffix={
                    <Tooltip title="You can use ZBin1 through ZBin36, but don’t use a ZBin thats already being used.">
                        <Icon type="info-circle" id = "x-tooltip-style"/>
                    </Tooltip>
                }
                />

            <Input className="registration-input"
                placeholder="Bin Name"
                value={this.state.bin_name}
                disabled
                />
            </div>

            <div id = "registration-input__bintype-style">
            <Input className="registration-input"
                placeholder="Location Name"
  
                />
            <Input className="registration-input"
                placeholder="x"
                suffix={
                    <Tooltip title="You can use ZBin1 through ZBin36, but don’t use a ZBin thats already being used.">
                        <Icon type="info-circle" id = "x-tooltip-style" />
                    </Tooltip>
                }
                />
            <Input className="registration-input"
                placeholder="y"
                suffix={
                    <Tooltip title="You can use ZBin1 through ZBin36, but don’t use a ZBin thats already being used.">
                        <Icon type="info-circle" id = "x-tooltip-style" />
                    </Tooltip>
                }
                />
            <Input className="registration-input"
                placeholder="z"
                suffix={
                    <Tooltip title="You can use ZBin1 through ZBin36, but don’t use a ZBin thats already being used.">
                        <Icon type="info-circle" id = "x-tooltip-style" />
                    </Tooltip>
                }
                />
            </div>
            <h2>Select your bin sensors</h2>
                <Button type="primary" shape="round" icon="download" size={'large'}>Weight</Button>
                <Button type="primary" shape="round" icon="download" size={'large'}>Distance</Button>
            <h2>Verify weight sensors configuration</h2>
            <h2>Verify distance sensors configuration</h2>
            </div>

        )
    }
}

export default BinStatusPage;