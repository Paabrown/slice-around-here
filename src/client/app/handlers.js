
module.exports.onMarkerClick = function(props, marker, e) {
  console.log('onMarkerClick running');

  this.setState({
    showingInfoWindow: true,
    selectedRestaurant: props.restaurant,
    currentCenter: {
      lat: props.restaurant.coordinates.latitude,
      lng: props.restaurant.coordinates.longitude
    }
  });
}

module.exports.onMapClick = function(props) {
  console.log('onMapClick running');

  if (this.state.showingInfoWindow) {
    this.setState({
      showingInfoWindow: false,
      selectedRestaurant: null
    })
  }
}

module.exports.onListClick = function(restaurant) {
  console.log('onlistclick running');

  this.setState({
    showingInfoWindow: true,
    selectedRestaurant: restaurant,
    currentCenter: {
      lat: restaurant.coordinates.latitude,
      lng: restaurant.coordinates.longitude
    }
  })
}
