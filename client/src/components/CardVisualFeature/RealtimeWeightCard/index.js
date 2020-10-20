import React from 'react';
import { Card, Col, Row } from 'antd';

class RealtimeWeightCard extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            typeBin: props.typeBin,
            weightOfBin: props.weightOfBin,
            percentChangeOfBin: props.percentChangeOfBin,
            percentChangeColor: props.percentChangeColor
        }
    }

    render() {
        return (
            <Card title={<span style={{color: 'grey', fontSize: '90%'}}>{this.state.typeBin}</span>} bordered={false}>
                <Row>
                    <Col span={16}>
                        <Row>
                            <h2 style={{color: '#616161', float: 'left', fontWeight:'bold'}}>
                            {this.state.weightOfBin}
                            </h2>
                        </Row>
                        <Row align="top">
                            <h5 style={{color: this.state.percentChangeColor, float: 'left', fontWeight:'bold', fontVariant: 'small-caps'}}>
                            {this.state.percentChangeOfBin}
                            </h5>
                        </Row>
                    </Col>
                    <Col span={8} style={{float: 'right'}}>
                        <img style={{opacity: '0.75'}} src="https://library.kissclipart.com/20180827/sqe/kissclipart-bar-chart-clipart-bar-chart-clip-art-76882c69095eb289.png" width="90" height="70"></img>
                    </Col>
                </Row>
            </Card>
        )
    }
}

export default RealtimeWeightCard;