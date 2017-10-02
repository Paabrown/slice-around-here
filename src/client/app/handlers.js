
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
      showingInfoWindow: false
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

module.exports.recenter = function() {
  this.setState({
    currentCenter: {lat: null, lng: null}
  }, () => {
    this.setState({
      currentCenter: this.state.userLocation,
      showingInfoWindow: false,
      selectedRestaurant: null,
    });
  });

  console.log('this.state', this.state);
}