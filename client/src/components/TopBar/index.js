import React from 'react'

import { Input, Avatar, Divider, Icon } from 'antd'
import zotbins from '../../images/ZotBins_Icon.png'

import NotificationMenuButton from '../Notifications/NotificationMenuButton'

class TopBar extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      windowWidth: 0,
      windowHeight: 0,
    }
  }

  componentDidMount() {
    this.updateDimensions()
    window.addEventListener('resize', this.updateDimensions.bind(this))
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions.bind(this))
  }

  updateDimensions() {
    let windowWidth = typeof window !== 'undefined' ? window.innerWidth : 0
    let windowHeight = typeof window !== 'undefined' ? window.innerHeight : 0

    this.setState({ windowWidth, windowHeight })
  }

  render() {
    const { windowWidth } = this.state
    const collapsedTopBar = windowWidth < 1200
    const imageID = collapsedTopBar
      ? 'topbar-div__zotbins-img-collapsed'
      : 'topbar-div__zotbins-img'
    const zotbinsID = collapsedTopBar
      ? 'topbar-div__zotbins-collapsed'
      : 'topbar-div__zotbins'

    return (
      <div id="topbar-div">
        {collapsedTopBar ? (
          <div id={zotbinsID}>
            <img id={imageID} src={zotbins} />
          </div>
        ) : (
          <div id={zotbinsID}>
            <img id={imageID} src={zotbins} />
            <h3>ZOTBINS</h3>
          </div>
        )}

        <div id="topbar-div__search-icon">
          <Icon type="search" />
        </div>

        <div id="topbar-div__search-bar">
          <Input placeholder="Enter Bin ID, Building Name, or Location" />
        </div>

        <div id="topbar-div__info">
          <div id="topbar-div__info-container">
            <Icon
              id="topbar-div__info-container--question"
              type="question-circle"
            />
            {/* <Icon id="topbar-div__info-container--bell" type="bell" /> */}
            <NotificationMenuButton />
            <Divider id="topbar-div__info-container--divider" type="vertical" />
            <h3>Peter Anteater</h3>
            <Icon id="topbar-div__info-container--caret" type="caret-down" />
            <Avatar
              id="topbar-div__info-container--avatar"
              size="large"
              icon="user"
            />
          </div>
        </div>
      </div>
    )
  }
}

export default TopBar
