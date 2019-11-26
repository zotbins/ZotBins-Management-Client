import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';
import { Menu, Icon, Switch } from 'antd';

class Navigation extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            current: 1,
        }
    }

    handleClick = e => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
      };
    
      render() {
        return (
          <div id="navigation-div"> 
            <Menu
              id="navigation-menu"
              theme={"dark"}
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode="inline"
            >
            
            <Menu.Item key="1">
              <Icon type="bar-chart" /><span>Dashboard</span>
              <Link to={ROUTES.DASHBOARD}></Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="api" /><span>Bin Status</span>
              <Link to={ROUTES.BIN_STATUS}></Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="pie-chart" /><span>Bin Registration</span>
              <Link to={ROUTES.BIN_REGISTRATION}></Link>
            </Menu.Item>
            
            </Menu>
          </div>
        );
      }
    }

export default Navigation;