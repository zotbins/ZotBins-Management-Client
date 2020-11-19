import React, { useState } from 'react'
import { Card, Modal } from 'antd'
import { bins } from './BinMap-mock'
import Map from 'pigeon-maps'
import Overlay from 'pigeon-overlay'

const BinMap = () => {
  const [modal, setModal] = useState({
    visible: false,
    binData: {
      id: null,
      weight: null,
      location: null,
    },
  })

  const handleOpenModal = (binData) => {
    setModal({
      visible: true,
      binData: {
        id: binData.id,
        weight: binData.weight,
        location: binData.location,
      },
    })
  }

  const handleCloseModal = () => {
    setModal({
      visible: false,
      binData: {
        id: null,
        weight: null,
        location: null,
      },
    })
  }

  return (
    <Card id="bin-map-card">
      <Map
        center={[33.6404952, -117.8442962]}
        zoom={15}
        minZoom={14}
        height={250}
      >
        {bins.map((bin, index) => {
          return (
            <Overlay key={`binmap-overlay-${index}`} anchor={bin.location}>
              <Marker bin={bin} onClickHandler={handleOpenModal} />
            </Overlay>
          )
        })}
      </Map>
      <Modal
        title={`Bin #${modal.binData.id}`}
        visible={modal.visible}
        onOk={handleCloseModal}
        onCancel={handleCloseModal}
      >
        <p>Bin Id: {modal.binData.id} </p>
        <p>Weight: {modal.binData.weight} </p>
        <p>Location: {modal.binData.location}</p>
      </Modal>
    </Card>
  )
}

const Marker = ({ bin, onClickHandler }) => {
  const { weight } = bin
  return (
    <div
      className="bin-map-marker"
      id={
        weight === -1
          ? 'bin-map-marker-error'
          : weight > 80
          ? 'bin-map-marker-full'
          : 'bin-map-marker-normal'
      }
      onClick={() => onClickHandler(bin)}
    />
  )
}

export default BinMap
