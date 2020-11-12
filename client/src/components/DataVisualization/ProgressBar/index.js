import React from 'react';
import { Progress, Col, Row } from 'antd';


class ProgressBar extends React.Component {
    state ={
        percent: 20,
    };

    render() {
        return (
            <div>
                <Row gutter={[48, 24]}>
                    <Col span={8}>
                        <h3 id = "bin-progressbar-style">Rbin1</h3>
                        <Progress strokeWidth={10} percent={25} strokeColor="#CBFF47" />
                    </Col>
                    <Col span={8}>
                        <h3 id = "bin-progressbar-style">Cbin1</h3>
                        <Progress strokeWidth={10} percent={30} strokeColor="#FFF64D" />
                    </Col>
                    <Col span={8}>
                        <h3 id = "bin-progressbar-style">Lbin1</h3>
                        <Progress strokeWidth={10} percent={45} strokeColor="#79D6FB" />
                    </Col>
                </Row>
                <Row gutter={[48, 24]}>
                <Col span={8}>
                        <h3 id = "bin-progressbar-style">Rbin2</h3>
                        <Progress strokeWidth={10} percent={66} strokeColor="#CBFF47" />
                    </Col>
                    <Col span={8}>
                        <h3 id = "bin-progressbar-style">Cbin2</h3>
                        <Progress strokeWidth={10} percent={50} strokeColor="#FFF64D" />
                    </Col>
                    <Col span={8}>
                        <h3 id = "bin-progressbar-style">Lbin2</h3>
                        <Progress strokeWidth={10} percent={76} strokeColor="#79D6FB" />
                    </Col>
                </Row>                
                <Row gutter={[48, 24]}>
                <Col span={8}>
                        <h3 id = "bin-progressbar-style">Rbin3</h3>
                        <Progress strokeWidth={10} percent={48} strokeColor="#CBFF47" />
                    </Col>
                    <Col span={8}>
                        <h3 id = "bin-progressbar-style">Cbin3</h3>
                        <Progress strokeWidth={10} percent={33} strokeColor="#FFF64D" />
                    </Col>
                    <Col span={8}>
                        <h3 id = "bin-progressbar-style">Lbin3</h3>
                        <Progress strokeWidth={10} percent={24} strokeColor="#79D6FB" />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default ProgressBar;