import React from 'react'
import { Card } from 'antd'
import Map from 'pigeon-maps'

class BinMap extends React.Component {
  render() {
    return (
      <Card id="bin-map-card">
        <Map
          center={[33.6404952, -117.8442962]}
          zoom={14}
          height={250}
          id="bin-map-card-mainmap"
        ></Map>
      </Card>
    )
  }
}

export default BinMap
