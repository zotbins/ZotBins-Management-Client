import React from 'react'
import { Card } from 'antd'
import { bins } from './BinMap-mock'
import Map from 'pigeon-maps'
import Overlay from 'pigeon-overlay'

const BinMap = () => {
  return (
    <Card id="bin-map-card">
      <Map
        center={[33.6404952, -117.8442962]}
        zoom={15}
        minZoom={14}
        height={250}
        style={{ width: '100%' }}
      >
        {bins.map((bin, index) => {
          return (
            <Overlay key={`overlay-${index}`} anchor={bin.location}>
              <Marker weight={bin.weight} />
            </Overlay>
          )
        })}
      </Map>
    </Card>
  )
}

const Marker = React.memo(({ weight }) => {
  return (
    <div
      style={{
        background:
          weight === -1 ? '#9b4538' : weight > 80 ? '#f9ba3c' : '#4b9f42',
        borderRadius: '50%',
        height: 12,
        width: 12,
      }}
    />
  )
})

export default BinMap
