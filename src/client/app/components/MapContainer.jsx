import {Map, InfoWindow, Marker, GoogleApiWrapper} from '../google-maps-react/index.js';
import React from 'react';

console.log('Map', Map);

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

    const rest = this.props.selectedRestaurant
    console.log('selres', rest)

    return (
      <div>
        <Map 
          google={this.props.google}
          style={style}
          zoom={16}
          center={this.props.currentCenter}
          onClick={this.props.onMapClicked}
          centerAroundCurrentLocation={true}
        >

          {this.props.restaurants.map((restaurant, ind) => {
            return (            
              <Marker
                key={ind + 1}
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
          )}
          
          <Marker
                onRecenter={this.props.onMarkerClick}
                label={{text: 'S', color:'blue'}}
                restaurant={this.props.selectedRestaurant}
                title={rest ? this.props.selectedRestaurant.name : null}
                name={rest ? this.props.selectedRestaurant.name : null}
                rating={rest ? this.props.selectedRestaurant.rating : null}
                address={rest ? this.props.selectedRestaurant.location.display_address : null}
                position={rest ? {lat: this.props.selectedRestaurant.coordinates.latitude, lng: this.props.selectedRestaurant.coordinates.longitude} : null}
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
            position={this.props.currentCenter}
            pixelOffset={{height: -30, width: 0}}
            visible={this.props.showingInfoWindow}>
              <div>
                <h1>{rest ? this.props.selectedRestaurant.name : null}</h1>
                <div>{rest ? this.props.selectedRestaurant.rating + ' stars' : null}</div>
                <div>{rest ? this.props.selectedRestaurant.location.display_address.join(', ') : null}</div>
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