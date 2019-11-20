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
                <div style={{width: "100vw", zIndex: 2, display: "flex", flexDirection: "column", height: 60, position: "fixed"}}>
                    <TopBar />
                    <div style={{width: "18%"}}>
                    <Navigation />
                    </div>  
                </div>
                <div style={{float: "right", position: "relative", width: "82%", top: 60}}>
                        <Route exact path={ROUTES.DASHBOARD} component={DashboardPage} />
                        <Route path={ROUTES.BIN_STATUS} component={BinStatusPage} />
                        <Route path={ROUTES.BIN_REGISTRATION} component={DeviceRegistrationPage} />
                    

                  
                </div>
                
            </Router>
        );
    }
}

export default App;