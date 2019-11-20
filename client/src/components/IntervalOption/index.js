import React from 'react';

import {  Menu, Icon, Dropdown, Button, DatePicker } from 'antd';

const { RangePicker } = DatePicker;

class IntervalOption extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            interval: "4",
            mode: "period"
        }

        this.handleMenuClick = this.handleMenuClick.bind(this);
        this.handleModeChange = this.handleModeChange.bind(this);
        this.onOk = this.onOk.bind(this);
        this.onChange = this.onChange.bind(this);
        

        this.menu = (
            <Menu onClick={this.handleMenuClick}>
            <Menu.Item key="1">
                Last 6 Months
            </Menu.Item>
            <Menu.Item key="2">
                Last Month
            </Menu.Item>
            <Menu.Item key="3">
                Last Week
            </Menu.Item>
            <Menu.Item key="4">
                Last Hour
            </Menu.Item>
            </Menu>
        );
    }

    handleMenuClick(e) {
        this.setState({interval: e.key});
    }

    handleModeChange(e) {
        console.log(e);
        if(this.state.mode === "period"){
            this.setState({mode: "time"});
        }
        else {
            this.setState({mode: "period"});
        }
    }

    onChange(value, dateString) {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
      }
      
    onOk(value) {
        console.log('onOk: ', value);
      }

    render() { 

        if (this.state.interval === "1") {
            var title = "Last 6 Months"
        }
        else if (this.state.interval === "2") {
            var title = "Last Month"
        }
        else if (this.state.interval === "3") {
            var title = "Last Week"
        }
        else if (this.state.interval === "4") {
            var title = "Last Hour"
        }

        if (this.state.mode === "period") {
            return (
                <div>
                    <Dropdown overlay={this.menu}>
                        <Button style={{marginTop: "2rem"}} >
                            {title} <Icon type="down" />
                        </Button>
                    </Dropdown>

                    <Button style={{margin: "2rem 0 0 1rem"}} onClick={this.handleModeChange} shape="circle" icon="calendar" />
                </div>
            )
        }
        else if (this.state.mode === "time") {
            return (
            <div>
                    <RangePicker
                        showTime={{ format: 'HH:mm' }}
                        format="YYYY-MM-DD HH:mm"
                        placeholder={['Start Time', 'End Time']}
                        onChange={this.onChange}
                        onOk={this.onOk}
                        style={{marginTop: "2rem"}}
                        />

                <Button style={{margin: "2rem 0 0 1rem"}} onClick={this.handleModeChange} shape="circle" icon="calendar" />
            </div>

            
            )
        }
    }
}

export default IntervalOption;