import React from 'react';

import { Input, Avatar, Divider, Icon } from 'antd';

class TopBar extends React.Component {
    render() {
        return (
            <div style={{display: "flex", flexDirection: "row", width: "100vw"}}>
                <div style={{minWidth: '256px', height: 60, backgroundColor: "#454545"}}>
                    <h1> ZotBins</h1>
                </div>
                <div style={{width: "100%"}}>
                    <Input style={{height: "100%", width: "100%", border: 0}} placeholder="Enter Bin ID, Building Name, or Location" />
                </div>
                <div style={{padding: "0.6rem", minWidth: 356}}>
                    <div style={{display: "flex", flexDirection: "row", margin: "auto", width: "fit-content", alignItems: "center" }}>
                        <Divider type="vertical" style={{height: "1.5rem", margin: "0 1rem"}}/>
                        <h3 style={{marginBottom: 0, margin: "0 1rem"}}>Peter Anteater</h3>
                        <Icon style={{marginRight: "1rem"}} type="caret-down" />
                        <Avatar size="large" icon="user" />
                    </div>
                </div>
            </div>
        )
    }
}

export default TopBar;