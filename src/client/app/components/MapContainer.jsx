// from https://www.fullstackreact.com/articles/how-to-write-a-google-maps-react-component/
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
//import apiKey from '../config.js'
import React from 'react';

const apiKey = 'AIzaSyDB7n3we8-peVEuxRWfoJf97c9KbcYU2lw';

export class MapContainer extends React.Component {

  constructor(props) {
    super(props);
    
  }

  render() {
    const style = {
      display: 'inline-block',
      margin: '3px',
      width: '75vw',
      height: '500px'
    }

    return (
      <div>
        <Map 
          google={this.props.google}
          style={style}
          zoom={16}
          initialCenter={this.props.location}
          onClick={this.props.onMapClicked}
          centerAroundCurrentLocation={true}
        >

          {this.props.restaurants.map((restaurant, ind) => {
            return (            
              <Marker
                onClick={this.props.onMarkerClick}
                label={{text: ind.toString(), color:'black'}}
                restaurant={restaurant}
                title={restaurant.name}
                name={restaurant.name}
                rating={restaurant.rating}
                address={restaurant.location.display_address}
                position={{lat: restaurant.coordinates.latitude, lng: restaurant.coordinates.longitude}} 
              />
            )
          }
          )}
          <Marker
                onClick={this.props.onMarkerClick}
                label={{text: 'S', color:'blue'}}
                restaurant={this.props.selectedRestaurant}
                title={this.props.selectedRestaurant.name}
                name={this.props.selectedRestaurant.name}
                rating={this.props.selectedRestaurant.rating}
                address={this.props.selectedRestaurant.location.display_address}
                position={{lat: this.props.selectedRestaurant.coordinates.latitude, lng: this.props.selectedRestaurant.coordinates.longitude}}
                zIndex={400}
          />

          <Marker
              onClick={this.props.onMarkerClick}
              name={'Current Location'}
              rating={5}
              address={'address=where u r now'}
              icon={{
                scaledSize: {height: 20, width: 20},
                url: "http://bluedot.ca/wp-content/themes/dsf-blue-dot-campaign-theme/src/images/marker-circle.png"
              }}
              zIndex={500}
              optimized={false}
              position={this.props.location} 
          />

          <InfoWindow
            marker={this.props.activeMarker}
            visible={this.props.showingInfoWindow}>
              <div>
                <h1>{this.props.selectedPlace.name}</h1>
                <div>{this.props.selectedPlace.rating + ' stars'}</div>
                <div>{this.props.selectedPlace.address}</div>
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