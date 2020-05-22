import React from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';
import { Menu, Icon } from 'antd';

class Navigation extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            current: 1,
            windowWidth: 0,
            windowHeight: 0
        }
    }

    handleClick = e => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
      };

    componentDidMount(){
        this.updateDimensions();
        window.addEventListener("resize", this.updateDimensions.bind(this));
    }

    componentWillUnmount(){
        window.removeEventListener("resize", this.updateDimensions.bind(this));
    }

    updateDimensions() {
        let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
        let windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;
        let current = this.state.current;

        this.setState({current, windowWidth, windowHeight});
    }
    
      render() {
        const { windowWidth } = this.state;
        const collapsedNavigationBar = windowWidth < 1200;

        return (
          <div id="navigation-div"> 
            <Menu
              id="navigation-menu"
              theme={"dark"}
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode="inline"
              inlineCollapsed={collapsedNavigationBar}
            >
            
            <Menu.Item key="1">
              <Icon type="bar-chart" /><span>Dashboard</span>
              <Link to={ROUTES.DASHBOARD}></Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="api" /><span> Bin Status</span>
              <Link to={ROUTES.BIN_STATUS}></Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="pie-chart" /><span>Bin Registration</span>
              <Link to={ROUTES.BIN_REGISTRATION}></Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Icon type="picture" /><span>Gallery</span>
              <Link to={ROUTES.GALLERY}></Link>
            </Menu.Item>

            </Menu>
          </div>
        );
      }
    }

export default Navigation;