import React from 'react';
import Chart from "chart.js";
import { Card } from 'antd';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: "88%",
  height: "250px"
};

class BinMap extends React.Component {

    render() {
        return (
          <Card style={{margin: "1rem"}}>
            <div>
            <Map
              google={this.props.google}
              zoom={8}
              style={mapStyles}
              initialCenter={{ lat: 47.444, lng: -122.176}}
            />
            </div>
          </Card>
        );
      }
}

export default GoogleApiWrapper({
    apiKey: process.env.GOOGLE_MAPS_API
  })(BinMap);