import React from 'react'

import { Dropdown, Icon, Menu, Badge } from 'antd'
import NotificationMenu from './NotificationMenu'

// const menu = <NotificationMenu />

class NotificationMenuButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notifs: [
        {
          text: 'ZotBin "Building Name 111" has reached 95% capacity.',
          priority: 'red',
          viewed: false,
          dateCreated: new Date(2022, 2, 16, 9, 30),
        },
        {
          text: 'ZotBin "Building Name" has reached 75% capacity.',
          priority: 'orange',
          viewed: false,
          dateCreated: new Date(2022, 0, 4, 9, 30),
        },

        {
          text: 'ZotBin "Building Name 2" has reached 50% capacity.',
          priority: 'orange',
          viewed: false,
          time: 2,
          timeUnit: 'hour',
          dateCreated: new Date(2022, 2, 18, 0, 30),
        },
        {
          text: 'Cannot detect sensor on "Building Name 3".',
          priority: 'red',
          viewed: false,
          dateCreated: new Date(2022, 2, 5, 4, 30),
        },
        {
          text: 'ZotBin "Building Name" has reached 95% capacity.',
          priority: 'red',
          viewed: false,
          dateCreated: new Date(2022, 2, 5, 5, 39),
        },
      ],
    }
  }

  render() {
    return (
      <Dropdown
        overlay={
          <NotificationMenu
            notifs={this.state.notifs.sort(
              (a, b) => b.dateCreated.valueOf() - a.dateCreated.valueOf()
            )}
          />
        }
        trigger={['click']}
        placement="bottomCenter"
      >
        <Badge count={this.state.notifs.length} size="small">
          <Icon onClick={(e) => e.preventDefault()} type="bell" />
          {/* <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
      Click me */}
          {/* </a> */}
        </Badge>
      </Dropdown>
      //     <Dropdown overlay={menu} trigger={['click']}>
      //     <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
      //       Hover me
      //     </a>
      //   </Dropdown>
    )
  }
}

export default NotificationMenuButton
