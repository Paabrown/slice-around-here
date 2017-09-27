// from https://www.fullstackreact.com/articles/how-to-write-a-google-maps-react-component/
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import apiKey from '../config.js'
import React from 'react';

export class MapContainer extends React.Component {

  render() {

    const style = {
      width: '100vw',
      height: '100vh'
    }

    return (
        <Map 
          google={this.props.google}
          style={style}
          zoom={14} 
          initialCenter={{
            lat: 40.854885,
            lng: -88.081807
          }}
        />
    );
  }
}

var thing = GoogleApiWrapper({
  apiKey: apiKey
})(MapContainer)

export default thing;