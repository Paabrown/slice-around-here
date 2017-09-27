import exampleData from '../data/exampleRestaurantData.js';

window.initMap = function() {
  var uluru = {lat: 40.750379, lng: -73.976837};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  });

  var businesses = exampleData.businesses;

  for (var i = 0; i < businesses.length; i++) {
    var coords = businesses[i].coordinates
    var latLng = new google.maps.LatLng(coords.latitude, coords.longitude)
    var marker = new google.maps.Marker({
      position: latLng,
      map: map
    });
  }

}