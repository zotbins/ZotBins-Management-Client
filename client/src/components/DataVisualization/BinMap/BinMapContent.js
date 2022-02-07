import React from 'react'
import { Button, Typography, Badge, Icon } from 'antd'
import { Map, ZoomControl, Overlay } from 'pigeon-maps'
import zotbinsImage from '../../../images/ZotBins_Icon.png'
import {
  CaretDownOutlined,
  FullscreenOutlined,
  SearchOutlined,
} from '@ant-design/icons'
import BinMapMarker from './BinMapMarker'

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
        {/* <Overlay anchor={[33.6457958, -117.844]}>
          <BinMapMarker showModal={this.props.showModal} binIds = {this.props.binIds[0]}/>
        </Overlay> */}

        {/* <Overlay offset={[100, 100]}> style={{position: "absolute"}} */}
        {/* <BinMapMarker showModal={this.props.showModal} binIds = {this.props.binIds[1]}/> */}
        {/* <img
                  style={{ margin: '0px', padding: '0px', position: 'absolute', top: this.props.height * 0.9, left:10 }}
                  src={zotbinsImage}
                  width={20}
                  height={24}
                  alt=""
                /> */}

        {this.props.isSmall && (
          <Button
            // type="primary"
            // size="large"
            type="link"
            onClick={this.props.showMap}
            // className="pigeon-drag-block"
            style={{
              marginBottom: '50px',
              // padding: '5px',
              // paddingBottom:'1px',
              // marginBottom:'0px',
              // paddingTop:'0px',
              // marginTop:'0px',
              position: 'absolute',
              top: this.props.height - 35,
              // left: ,
            }}
          >
            <Icon
              //
              style={{
                width: 28,
                height: 28,
                borderRadius: 2,
                boxShadow: '0 1px 4px -1px rgba(0,0,0,.3)',
                background: 'white',
                lineHeight: '26px',
                fontSize: '20px',
                fontWeight: 700,
                color: '#666',
                marginBottom: 1,
                cursor: 'pointer',
                border: 'none',
                display: 'block',
                outline: 'none',
                paddingTop: 4,
              }}
              type="fullscreen"
            />
          </Button>
        )}
        {/* </Overlay> */}
        {/* <Button type="primary" shape="circle" ico> */}
        {this.props.binIds.map((ids, i) => {
          return (
            <Overlay anchor={this.props.binCoordinates[i]}>
              <BinMapMarker
                showModal={this.props.showModal}
                binIds={ids}
                binCoordinate={this.props.binCoordinates[i]}
              />
            </Overlay>
          )
        })}

        <ZoomControl />
      </Map>
    )
  }
}

export default BinMapContent
