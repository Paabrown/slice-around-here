import axios from 'axios';

module.exports = function() {
  var geo = navigator.geolocation;

  geo.getCurrentPosition((pos) => {
    console.log('pos is', pos)
    const coords = pos.coords;
    this.setState({
      userLocation: {
        lat: coords.latitude,
        lng: coords.longitude
      },
      currentCenter: {
        lat: coords.latitude,
        lng: coords.longitude
      }
    });

    axios.get('/api/slices', {
      params: {
        lat: coords.latitude,
        lng: coords.longitude
      }
    })
    .then(results => {
      console.log('results', results)
      this.setState({
        currentRestaurants: results.data.businesses,
        selectedRestaurant: null
      });
    })
    .catch(err => console.log('GET to server error:', err))
  })
}