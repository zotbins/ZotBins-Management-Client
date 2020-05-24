import React from 'react';
import { Progress, Col, Row, Card } from 'antd';


class ProgressBar extends React.Component {
    state ={
        percent: 20,
    };

    render() {
        return (
            <div>
                <Row>
                    <Col span={2}>
                        <h3 style={{color: '#616161', float: 'left', fontWeight:'light', fontVariant: 'small-caps'}}>Bin #1</h3>
                    </Col>
                    <Col span={20}>
                        <Progress strokeWidth={13} percent={this.state.percent} strokeColor={{'0%': '#108ee9', '100%': '#87d068',}} />
                    </Col>
                </Row>
                <Row>
                    <Col span={2}>
                        <h3 style={{color: '#616161', float: 'left', fontWeight:'light', fontVariant: 'small-caps'}}>Bin #2</h3>
                    </Col>
                    <Col span={20}>
                        <Progress strokeWidth={13} percent={95} strokeColor={{'0%': '#108ee9', '100%': '#87d068',}} />
                    </Col>
                </Row>                
                <Row>
                    <Col span={2}>
                        <h3 style={{color: '#616161', float: 'left', fontWeight:'light', fontVariant: 'small-caps'}}>Bin #3</h3>
                    </Col>
                    <Col span={20}>
                        <Progress strokeWidth={13} percent={45} strokeColor={{'0%': '#108ee9', '100%': '#87d068',}}/>
                    </Col>
                </Row>
                <Row>
                    <Col span={2}>
                        <h3 style={{color: '#616161', float: 'left', fontWeight:'light', fontVariant: 'small-caps'}}>Bin #4</h3>
                    </Col>
                    <Col span={20}>
                        <Progress strokeWidth={13} percent={100} strokeColor={{'0%': '#108ee9', '100%': '#87d068',}}/>
                    </Col>
                </Row> 
            </div>
        )
    }
}

export default ProgressBar;