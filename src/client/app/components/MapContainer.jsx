import {Map, InfoWindow, Marker, GoogleApiWrapper} from '../google-maps-react/index.js';
import React from 'react';

// This google maps key is meant to be in index.html and does not need to be hidden
const apiKey = 'AIzaSyDB7n3we8-peVEuxRWfoJf97c9KbcYU2lw';

export class MapContainer extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const style = {
      width: '75vw',
      height: '500px'
    }

    const selectedRestaurant = this.props.selectedRestaurant

    return (
      <div>
        <Map
          google={this.props.google}
          style={style}
          zoom={16}
          center={this.props.currentCenter}
          onClick={this.props.onMapClick}
          centerAroundCurrentLocation={true}
        >

          {this.props.restaurants ? this.props.restaurants.map((restaurant, ind) => {
            return (            
              <Marker
                key={restaurant.id + '-marker'}
                onClick={this.props.onMarkerClick}
                label={{text: (ind + 1).toString(), color:'black'}}
                restaurant={restaurant}
                title={restaurant.name}
                name={restaurant.name}
                rating={restaurant.rating}
                address={restaurant.location.display_address}
                position={{lat: restaurant.coordinates.latitude, lng: restaurant.coordinates.longitude}} 
              />
            )
          }
          ) : null}
          
          <Marker
                onRecenter={this.props.onMarkerClick}
                label={{text: 'S', color:'blue'}}
                visible={(!!selectedRestaurant)}
                restaurant={selectedRestaurant}
                title={selectedRestaurant ? this.props.selectedRestaurant.name : null}
                name={selectedRestaurant ? this.props.selectedRestaurant.name : null}
                rating={selectedRestaurant ? this.props.selectedRestaurant.rating : null}
                address={selectedRestaurant ? this.props.selectedRestaurant.location.display_address : null}
                position={selectedRestaurant ? {lat: this.props.selectedRestaurant.coordinates.latitude, lng: this.props.selectedRestaurant.coordinates.longitude} : null}
                zIndex={400}
          />

          <Marker
              onClick={this.props.onMarkerClick}
              name={'Current Location'}
              rating={5}
              address={''}
              icon={{
                scaledSize: {height: 20, width: 20},
                url: "/assets/marker-circle.png"/*"http://bluedot.ca/wp-content/themes/dsf-blue-dot-campaign-theme/src/images/marker-circle.png"*/
              }}
              zIndex={500}
              optimized={false}
              position={this.props.userLocation} 
          />

          <InfoWindow
            position={this.props.currentCenter}
            pixelOffset={{height: -30, width: 0}}
            visible={this.props.showingInfoWindow}>
              <div>
                <div className={'restaurant-title'}>{selectedRestaurant ? this.props.selectedRestaurant.name : null}</div>
                <div>{selectedRestaurant ? this.props.selectedRestaurant.rating + ' stars' : null}</div>
                <div>{selectedRestaurant ? this.props.selectedRestaurant.location.display_address.join(', ') : null}</div>
              </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

const Container = GoogleApiWrapper({
  apiKey: apiKey
})(MapContainer)

export default Container;