import React from 'react'

import { Dropdown, Icon, Menu, Tabs, Row, Col, Typography } from 'antd'

const { TabPane } = Tabs
// const { Text, Link } = Typography
const { Title } = Typography

const getDateString = (date) => {
  //   console.log(date)
  //   const dateNow = new Date()
  //   const monthDiff = dateNow.getMonth() - date.getMonth()
  //   const dayDiff = dateNow.getDate() - date.getDate()
  //   const hourDiff = dateNow.getHours() - date.getHours()
  //   const minuteDiff = dateNow.getMinutes() - date.getMinutes()
  //   console.log(monthDiff)

  //   if (monthDiff > 0) {
  //     return monthDiff + " month" + (monthDiff > 1 ? 's' : '') + " ago"
  //   } else if (dayDiff > 0) {
  //     return dayDiff + " day" + (dayDiff > 1 ? 's' : '') + " ago"
  //   } else if (hourDiff > 0) {
  //     return hourDiff + " hour" + (hourDiff > 1 ? 's' : '') + " ago"
  //   } else if (minuteDiff > 0) {
  //     return minuteDiff + " minute" + (minuteDiff > 1 ? 's' : '') + " ago"
  //   } else {
  //     return 'Just now'
  //   }
  // }

  const dateNow = new Date()
  const diff = dateNow - date
  const minuteDiff = diff / 1000 / 60
  const adjustedMinuteDiff = Math.round(minuteDiff)
  const hourDiff = minuteDiff / 60
  const adjustedHourDiff = Math.round(hourDiff)
  const dayDiff = hourDiff / 24
  const adjustedDayDiff = Math.round(dayDiff)
  const adjustedWeekDiff = Math.round(dayDiff / 7)
  const adjustedMonthDiff = Math.round(dayDiff / 30)

  if (adjustedMonthDiff >= 1) {
    return (
      adjustedMonthDiff + ' month' + (adjustedMonthDiff > 1 ? 's' : '') + ' ago'
    )
  } else if (adjustedWeekDiff >= 1) {
    return (
      adjustedWeekDiff + ' week' + (adjustedWeekDiff > 1 ? 's' : '') + ' ago'
    )
  } else if (adjustedDayDiff >= 1) {
    return adjustedDayDiff + ' day' + (adjustedDayDiff > 1 ? 's' : '') + ' ago'
  } else if (adjustedHourDiff >= 1) {
    return (
      adjustedHourDiff + ' hour' + (adjustedHourDiff > 1 ? 's' : '') + ' ago'
    )
  } else if (adjustedMinuteDiff >= 1) {
    return (
      adjustedMinuteDiff +
      ' minute' +
      (adjustedMinuteDiff > 1 ? 's' : '') +
      ' ago'
    )
  } else {
    return 'Just now'
  }
}

class NotificationMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      notifs: this.props.notifs,
    }
  }

  render() {
    return (
      <Menu
        style={{
          padding: '10px',
          paddingTop: '30px',
          boxShadow: '5px 10px;',
          backgroundColor: '#F9F9F9',
        }}
      >
        <h2>Notifications</h2>
        <Tabs defaultActiveKey="1">
          <TabPane tab="All" key="1">
            {this.state.notifs.map((notif, i) => {
              return (
                <Row style={{ marginBottom: '20px' }}>
                  <Col span={22}>
                    <Row>
                      <h3
                        style={{
                          color: notif.viewed ? 'grey' : 'black',
                          marginBottom: '0px',
                        }}
                      >
                        {notif.text}
                      </h3>
                    </Row>
                    <Row>
                      <h4
                        style={{
                          paddingLeft: '18px',
                          color: notif.viewed ? 'grey' : 'blue',
                          marginBottom: '0px',
                          marginTop: '0px',
                        }}
                      >
                        {/* {notif.time + ' ' +  notif.timeUnit + (notif.time > 1 ? 's' : '') + ' ago'}  */}
                        {getDateString(notif.dateCreated)}
                      </h4>
                    </Row>
                  </Col>
                  <Col span={2}>
                    <Icon
                      type="exclamation-circle"
                      style={{ color: notif.priority }}
                      onClick={() =>
                        this.setState((state) => {
                          state.notifs[i].viewed = true
                          return state
                        })
                      }
                    />
                  </Col>
                </Row>
              )
            })}
          </TabPane>
          <TabPane tab="Unread" key="2">
            {this.state.notifs.map((notif, i) => {
              return (
                !notif.viewed && (
                  <Row style={{ marginBottom: '20px' }}>
                    <Col span={22}>
                      <Row>
                        <h3 style={{ color: notif.viewed ? 'grey' : 'black' }}>
                          {notif.text}
                        </h3>
                      </Row>
                      <Row>
                        <h4
                          style={{
                            paddingLeft: '18px',
                            color: notif.viewed ? 'grey' : 'blue',
                            marginBottom: '0px',
                            marginTop: '0px',
                          }}
                        >
                          {getDateString(notif.dateCreated)}
                        </h4>
                      </Row>
                    </Col>
                    <Col span={2}>
                      <Icon
                        type="exclamation-circle"
                        style={{ color: notif.priority }}
                        onClick={() =>
                          this.setState((state) => {
                            state.notifs[i].viewed = true
                            return state
                          })
                        }
                      />
                    </Col>
                  </Row>
                )
              )
            })}
          </TabPane>
          <TabPane tab="Priority" key="3">
            {this.state.notifs.map((notif, i) => {
              return (
                notif.priority === 'red' && (
                  <Row style={{ marginBottom: '20px' }}>
                    <Col span={22}>
                      <Row>
                        <h3 style={{ color: notif.viewed ? 'grey' : 'black' }}>
                          {notif.text}
                        </h3>
                      </Row>
                      <Row>
                        <h4
                          style={{
                            paddingLeft: '18px',
                            color: notif.viewed ? 'grey' : 'blue',
                            marginBottom: '0px',
                            marginTop: '0px',
                          }}
                        >
                          {getDateString(notif.dateCreated)}
                        </h4>
                      </Row>
                    </Col>
                    <Col span={2}>
                      <Icon
                        type="exclamation-circle"
                        style={{ color: notif.priority }}
                        onClick={() =>
                          this.setState((state) => {
                            state.notifs[i].viewed = true
                            return state
                          })
                        }
                      />
                    </Col>
                  </Row>
                )
              )
            })}
          </TabPane>
        </Tabs>
      </Menu>
    )
  }
}

export default NotificationMenu
