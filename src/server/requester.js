const request = require('request')

const getSliceLocations = function(lat, lng, cb) {
  var options = { method: 'GET',
  url: 'https://api.yelp.com/v3/businesses/search',
  qs: { 
    latitude: lat,
    longitude: lng,
    categories: 'pizza',
    term: 'slice',
    radius: '400',
    price: '1',
    limit: '5',
    sort: '1'
  },
  headers: { 
    authorization: 'Bearer ' + process.env.YELP
  } 
 };

 request(options, cb)
}

module.exports = getSliceLocations;