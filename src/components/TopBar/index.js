import React from 'react';

import { Input, Avatar, Divider, Icon } from 'antd';
import zotbins from '../../images/ZotBins_Icon.png';

class TopBar extends React.Component {
    render() {
        return (
            <div style={{display: "flex", flexDirection: "row", width: "100vw", boxShadow: "5px 5px 15px 5px rgba(0,0,0,0.05)"}}>
                <div style={{display: "flex", flexDirection: "row", minWidth: '256px', height: 60, backgroundColor: "#454545"}}>
                    <img src={zotbins} style={{ margin: "0.5rem 0.5rem 1rem 1rem", height: "35px "}}/>
                    <h3 style={{color: "white", margin: "1rem 0", letterSpacing: "3px", fontWeight: "600"}}>ZOTBINS</h3>
                </div>
                <div style={{display: "flex", alignItems:"center", margin: "0 1rem 0 1.5rem"}}>
                    <Icon type="search" />
                </div>
                <div style={{width: "100%"}}>
                    
                    <Input style={{height: "100%", width: "100%", border: 0}} placeholder="Enter Bin ID, Building Name, or Location" />
                </div>
                <div style={{padding: "0.6rem", minWidth: 356}}>
                    <div style={{display: "flex", flexDirection: "row", margin: "auto", width: "fit-content", alignItems: "center" }}>
                        <Icon type="question-circle" style={{marginRight: "1rem"}} />
                        <Icon type="bell" />
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