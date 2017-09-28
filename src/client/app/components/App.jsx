import React from 'react';
import SliceList from './SliceList.jsx'
import Container from './MapContainer.jsx'
import axios from 'axios'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      currentRestaurants: props.exampleData.businesses,
      currentLocation: {
        lat: 40.750284,
        lng: -73.976885
      }
    }
  }

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
          currentRestaurants: results.data.businesses
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
          <Container className={'maply'} restaurants={this.state.currentRestaurants} location={this.state.currentLocation} google={this.state.google}/>
          <SliceList currentRestaurants={this.state.currentRestaurants} />
        </div>
      </div>
    );
  }
}

export default App;