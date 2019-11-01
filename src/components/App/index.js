import React, { Fragment, Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'antd/dist/antd.css'; 
import Navigation from '../Navigation';
import TopBar from '../TopBar';
import DashboardPage from '../DashboardPage';
import BinStatusPage from '../BinStatusPage';
import DeviceRegistrationPage from '../DeviceRegistrationPage';

import * as ROUTES from '../../constants/routes';

class App extends Component {
    render() {
        return (
            <Router>
                <TopBar />
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <div style={{height: '100vh'}}>
                        
                        <Navigation />
                        
                    </div>
                        <Route exact path={ROUTES.DASHBOARD} component={DashboardPage} />
                        <Route path={ROUTES.BIN_STATUS} component={BinStatusPage} />
                        <Route path={ROUTES.BIN_REGISTRATION} component={DeviceRegistrationPage} />
                    

                  
                </div>
            </Router>
        );
    }
}

export default App;