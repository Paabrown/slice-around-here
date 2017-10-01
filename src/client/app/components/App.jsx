import React from 'react';

import SliceList from './SliceList.jsx';
import Container from './MapContainer.jsx';
import CurrentRestaurant from './CurrentRestaurant.jsx';

import handlers from './../handlers.js';
import updateLocationAndRestaurants from './../helpers.js';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      google: props.google,
      currentRestaurants: null,
      selectedRestaurant: null,
      userLocation: {
        lat: null,
        lng: null
      },
      currentCenter: {
        lat: null,
        lng: null
      },
      showingInfoWindow: false,
    }

    this.onMarkerClick = handlers.onMarkerClick.bind(this);
    this.onMapClick = handlers.onMapClick.bind(this);
    this.onListClick = handlers.onListClick.bind(this);

    this.updateLocationAndRestaurants = updateLocationAndRestaurants.bind(this);
  }

  // LifeCycle Functions
  componentDidMount () {
    this.updateLocationAndRestaurants();
  }

  render () {
    return (
      <div>
        <div className={'app-container'}>
          <div className={'heading'}> 
            <h2 className="tagline">Find a Slice Around Here!</h2>
            <button className={'refresh'} onClick={this.updateLocationAndRestaurants}>Refresh</button>
          </div>
          <Container
            google={this.state.google}
            restaurants={this.state.currentRestaurants}
            userLocation={this.state.userLocation}
            showingInfoWindow={this.state.showingInfoWindow}
            selectedRestaurant={this.state.selectedRestaurant}
            currentCenter={this.state.currentCenter}
            onMarkerClick={this.onMarkerClick}
            onMapClick={this.onMapClick}
          />

          <CurrentRestaurant selectedRestaurant={this.state.selectedRestaurant} />

          <SliceList currentRestaurants={this.state.currentRestaurants} onListClick={this.onListClick} />
        </div>
      </div>
    );
  }
}

export default App;