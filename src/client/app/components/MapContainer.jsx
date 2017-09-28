// from https://www.fullstackreact.com/articles/how-to-write-a-google-maps-react-component/
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import apiKey from '../config.js'
import React from 'react';

export class MapContainer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
    }

    // binding this to event-handler functions 
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
  }

  onMarkerClick (props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  onMapClicked (props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }

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
          onClick={this.onMapClicked}
        >
          {this.props.restaurants.map(restaurant => {
            console.log('at least this is running')

            return (            
            <Marker
              onClick={this.onMarkerClick}
              title={restaurant.name}
              name={restaurant.name}
              position={{lat: restaurant.coordinates.latitude, lng: restaurant.coordinates.longitude}} />
            )
          }
          )}

          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

var thing = GoogleApiWrapper({
  apiKey: apiKey
})(MapContainer)

export default thing;