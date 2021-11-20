import React from 'react'
import { Button, Typography } from 'antd'
import { Map, ZoomControl, Overlay } from 'pigeon-maps'
import zotbinsImage from '../../../images/ZotBins_Icon.png'

const { Title } = Typography

class BinMapContent extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Map
        defaultCenter={[33.6457958, -117.844]}
        defaultZoom={this.props.defaultZoom}
        height={this.props.height}
        id="bin-map-card-mainmap"
      >
        <Overlay anchor={[33.6457958, -117.844]}>
          <Button
            style={{ margin: '0px', padding: '0px', marginTop: '-35px' }}
            onClick={this.props.showModal}
            type="link"
          >
            <div>
              <Title
                style={{ margin: '0px', padding: '0px', marginLeft: '-6px' }}
                level={4}
              >
                3
              </Title>
              <img
                style={{ margin: '0px', padding: '0px' }}
                src={zotbinsImage}
                width={20}
                height={24}
                alt=""
              />
            </div>
          </Button>
        </Overlay>

        <ZoomControl />
      </Map>
    )
  }
}

export default BinMapContent
