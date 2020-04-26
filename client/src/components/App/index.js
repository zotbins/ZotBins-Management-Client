import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'antd/dist/antd.css'; 
import Navigation from '../Navigation';
import TopBar from '../TopBar';
import DashboardPage from '../Pages/DashboardPage';
import BinStatusPage from '../Pages/BinStatusPage';
import DeviceRegistrationPage from '../Pages/DeviceRegistrationPage';

import * as ROUTES from '../../constants/routes';

class App extends Component {
    constructor(props){
        super(props); 

        this.state = {
            windowWidth: 0,
            windowHeight: 0
        }
    }

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

        this.setState({windowWidth, windowHeight});
    }

    render() {
        const { windowWidth } = this.state;
        const collapsedPage = windowWidth < 1200;
        var pageID = collapsedPage ? "app-router__dashboard-column-collapsed" : "app-router__dashboard-column"; 

        return (
            <Router>
                <div id="app-router__topbar-and-nav">
                    <TopBar />
                    <div id="app-router__nav-column">
                    <Navigation />
                    </div>  
                </div>
                <div id={pageID}>
                        <Route exact path={ROUTES.DASHBOARD} component={DashboardPage} />
                        <Route path={ROUTES.BIN_STATUS} component={BinStatusPage} />
                        <Route path={ROUTES.BIN_REGISTRATION} component={DeviceRegistrationPage} />
                </div>
            </Router>
        );
    }
}

export default App;