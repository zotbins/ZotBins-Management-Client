import React from 'react';

import { Row, Col } from 'antd';



class DashboardPage extends React.Component {
    render() {
        return (
        <div>
            <Row>
                <Col span={18}>col-12</Col>
                <Col span={6}>col-12</Col>
            </Row>
        </div>
        )
    }
}

export default DashboardPage;