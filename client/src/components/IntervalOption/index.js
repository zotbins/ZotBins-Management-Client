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
        this.disabledDate = this.disabledDate.bind(this);

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
        if (e.key == 1) {
            this.props.updateDates([new Date(Date.now() - 15552000000 - 28800000).toISOString(), new Date(Date.now() - 28800000).toISOString()])
        }
        if (e.key == 2) {
            this.props.updateDates([new Date(Date.now() - 2592000000 - 28800000).toISOString(), new Date(Date.now() - 28800000).toISOString()])
        }
        if (e.key == 3) {
            this.props.updateDates([new Date(Date.now() - 604800000  - 28800000).toISOString(), new Date(Date.now() - 28800000).toISOString()])
        }
        if (e.key == 4) {
            this.props.updateDates([new Date(Date.now() - 3600000 - 28800000).toISOString(), new Date(Date.now() - 28800000).toISOString()])
        }
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
        this.props.updateDates([new Date(value[0]._d - 28800000).toISOString(), new Date(value[1]._d - 28800000).toISOString()])
      }

    disabledDate(current){
        return current && current.valueOf() > Date.now();
    }

    render() { 
        var title = null;
        if (this.state.interval === "1") {
            title = "Last 6 Months"
        }
        else if (this.state.interval === "2") {
            title = "Last Month"
        }
        else if (this.state.interval === "3") {
            title = "Last Week"
        }
        else if (this.state.interval === "4") {
            title = "Last Hour"
        }

        if (this.state.mode === "period") {
            return (
                <div>
                    <Dropdown overlay={this.menu} >
                        <Button>
                            {title} <Icon type="down" />
                        </Button>
                    </Dropdown>

                    <Button style={{margin: "0 0 0 1rem"}} onClick={this.handleModeChange} shape="circle" icon="calendar" />
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
                        disabledDate={this.disabledDate}
                        />

                <Button style={{margin: "0 0 0 1rem"}} onClick={this.handleModeChange} shape="circle" icon="calendar" />
            </div>

            
            )
        }
    }
}

export default IntervalOption;