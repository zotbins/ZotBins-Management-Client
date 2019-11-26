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
    render() {
        return (
            <Router>
                <div id="app-router__topbar-and-nav">
                    <TopBar />
                    <div id="app-router__nav-column">
                    <Navigation />
                    </div>  
                </div>
                <div id="app-router__dashboard-column">
                        <Route exact path={ROUTES.DASHBOARD} component={DashboardPage} />
                        <Route path={ROUTES.BIN_STATUS} component={BinStatusPage} />
                        <Route path={ROUTES.BIN_REGISTRATION} component={DeviceRegistrationPage} />
                </div>
            </Router>
        );
    }
}

export default App;