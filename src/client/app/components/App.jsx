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
      selectedRestaurant: null,
      currentCenter: {
        lat: 40.750284,
        lng: -73.976885
      }
    }

    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClicked = this.onMapClicked.bind(this);
    this.onListClick = this.onListClick.bind(this);
  }

  // Event handlers

  onMarkerClick (props, marker, e) {
    console.log('props', props)
    console.log('marker', marker)
    console.log('e', e)
    this.setState({
      showingInfoWindow: true,
      selectedRestaurant: props.restaurant,
      currentCenter: {
        lat: props.restaurant.coordinates.latitude,
        lng: props.restaurant.coordinates.longitude
      }
    });
    console.log('state is now', this.state);
  }

  onMapClicked (props) {
    console.log('onMapClickedrunning')

    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        selectedRestaurant: null
      })
    }
  }

  onListClick (restaurant) {
    console.log('onlistclick running')
    this.setState({
      showingInfoWindow: true,
      selectedRestaurant: restaurant,
      currentCenter: {
        lat: restaurant.coordinates.latitude,
        lng: restaurant.coordinates.longitude
      }
    })
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
        },
        currentCenter: {
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
            selectedRestaurant={this.state.selectedRestaurant}
            currentCenter={this.state.currentCenter}
            onMarkerClick={this.onMarkerClick}
            onMapClicked={this.onMapClicked}
          />

          <CurrentRestaurant selectedRestaurant={this.state.selectedRestaurant} />

          <SliceList currentRestaurants={this.state.currentRestaurants} onListClick={this.onListClick} />
        </div>
      </div>
    );
  }
}

export default App;