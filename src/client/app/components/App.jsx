import React from 'react';
import SliceList from './SliceList.jsx'
import Container from './MapContainer.jsx'
import CurrentRestaurant from './CurrentRestaurant.jsx'
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentRestaurants: props.exampleData.businesses,
      currentLocation: {
        lat: 40.750284,
        lng: -73.976885
      },
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      selectedRestaurant: props.exampleData.businesses[0]
    }

    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
  }

  // Event handlers

  onMarkerClick (props, marker, e) {
    console.log('props', props)
    console.log('marker', marker)
    console.log('e', e)
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
      selectedRestaurant: props.restaurant
    });
    console.log('state is now', this.state);
  }

  onMapClicked (props) {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }

  // LifeCycle Functions
  componentDidMount () {
    var geo = navigator.geolocation;
    console.log('geo', geo);
    geo.getCurrentPosition((pos) => {
      console.log('pos', pos);
      const coords = pos.coords;
      this.setState({
        currentLocation: {
          lat: coords.latitude,
          lng: coords.longitude
        }
      })

      axios.get('/api/slices?lat=' + coords.latitude + '&lng=' + coords.longitude)
      .then(results => {
        console.log('this.state', this.state)
        console.log('results', results);
        this.setState({
          currentRestaurants: results.data.businesses,
          selectedRestaurant: results.data.businesses[0]
        });
        console.log('get succeeded!!', this.state.currentRestaurants)
      })
      .catch(err => console.log('getting err', err))

    })
  }

  render () {

    return (
      <div>
        <div className={'apply'}>
          <p> Find a Slice Around Here! </p>
          <Container
            restaurants={this.state.currentRestaurants}
            location={this.state.currentLocation}
            google={this.state.google}
            showingInfoWindow={this.state.showingInfoWindow}
            activeMarker={this.state.activeMarker}
            selectedPlace={this.state.selectedPlace}
            selectedRestaurant={this.state.selectedRestaurant}
            onMarkerClick={this.onMarkerClick}
            onMapClick={this.onMapClicked}
          />

          <CurrentRestaurant selectedRestaurant={this.state.selectedRestaurant} />

          <SliceList currentRestaurants={this.state.currentRestaurants} />
        </div>
      </div>
    );
  }
}

export default App;