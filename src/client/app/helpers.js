import axios from 'axios';

module.exports = function() {
  const geo = navigator.geolocation;

  geo.getCurrentPosition((pos) => {
    const coords = pos.coords;
    this.setState({
      userLocation: {
        lat: coords.latitude,
        lng: coords.longitude
      },
      currentCenter: {
        lat: coords.latitude,
        lng: coords.longitude
      },
      showingInfoWindow: false
    });

    axios.get('/api/slices', {
      params: {
        lat: coords.latitude,
        lng: coords.longitude
      }
    })
    .then(results => {
      this.setState({
        currentRestaurants: results.data.businesses,
        selectedRestaurant: null
      }, () => console.log(this.state));
    })
    .catch(err => console.log('GET to server error:', err))
  })
}