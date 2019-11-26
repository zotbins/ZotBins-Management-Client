import React from 'react';

import { Input, Avatar, Divider, Icon } from 'antd';
import zotbins from '../../images/ZotBins_Icon.png';

class TopBar extends React.Component {
    render() {
        return (
            <div id="topbar-div">
            
                <div id="topbar-div__zotbins">
                    <img id="topbar-div__zotbins-img" src={zotbins}/>
                    <h3>ZOTBINS</h3>
                </div>
            
                <div id="topbar-div__search-icon">
                    <Icon type="search" />
                </div>
            
                <div id="topbar-div__search-bar">
                    <Input placeholder="Enter Bin ID, Building Name, or Location" />
                </div>
            
                <div id="topbar-div__info">
                    <div id="topbar-div__info-container">
                        <Icon id="topbar-div__info-container--question" type="question-circle"/>
                        <Icon id="topbar-div__info-container--bell" type="bell" />
                        <Divider id="topbar-div__info-container--divider" type="vertical"/>
                        <h3>Peter Anteater</h3>
                        <Icon id="topbar-div__info-container--caret" type="caret-down" />
                        <Avatar id="topbar-div__info-container--avatar" size="large" icon="user" />
                    </div>
                </div>
            
            </div>
        )
    }
}

export default TopBar;