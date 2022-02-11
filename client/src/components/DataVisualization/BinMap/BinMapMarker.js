import React from 'react'
import { Button, Typography, Badge, Icon } from 'antd'
import { Map, ZoomControl, Overlay } from 'pigeon-maps'
// import zotbinsImage from '../../../images/ZotBins_Icon.png'
import zotbinsImage from '../../../images/new_zbox_marker.png'

// import zotbinsImage from '../../../images/z_box_marker_one_color.png'
// import zotbinsImage from '../../../images/green_z_marker.png'

import { CaretDownOutlined } from '@ant-design/icons'
import { openNotification } from '../../Notifications/notification'

const { Title } = Typography

class BinMapMarker extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Button
        style={{ margin: '0px', padding: '0px', marginTop: '-35px' }}
        onClick={() => {
          this.props.showModal(this.props.binIds, this.props.binCoordinate)
          // openNotification("name", this.props.binIds[0])
        }}
        type="link"
      >
        {/* <Badge count={3} offset={[-12, -12]}> */}
        {/* <Badge
                count={<CaretDownOutlined  style={{ color: '#f5222d' }} />}
                offset={[-12.5, 30]}
                size="default"
              > */}

        <img
          style={{ margin: '0px', padding: '0px' }}
          src={zotbinsImage}
          width={50}
          // height={24}
          alt=""
        />

        {/* </Badge> */}
        {/* </Badge> */}
      </Button>
    )
  }
}

export default BinMapMarker
