// from https://www.fullstackreact.com/articles/how-to-write-a-google-maps-react-component/
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import apiKey from '../config.js'
import React from 'react';

export class MapContainer extends React.Component {

  render() {
    console.log('edwdw', this.props.restaurants)

    const style = {
      width: '50vw',
      height: '50vh'
    }

    return (
      <div>
        <Map 
          google={this.props.google}
          style={style}
          zoom={15} 
          initialCenter={{
            lat: 40.750284,
            lng: -73.976885
          }}
        >
          {this.props.restaurants.map(restaurant => {
            console.log('at least this is running')

            return (            
            <Marker
              title={restaurant.name}
              name={restaurant.name}
              position={{lat: restaurant.coordinates.latitude, lng: restaurant.coordinates.longitude}} />
            )
          }
          )}
        </Map>
      </div>
    );
  }
}

var thing = GoogleApiWrapper({
  apiKey: apiKey
})(MapContainer)

export default thing;