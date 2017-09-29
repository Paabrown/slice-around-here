const router = require('express').Router();
const path = require('path');
const url = require('url');
var request = require("request");

//  /api/restaurants?lat=323&long=3322
router.get('/slices', function(req, res) {
  console.log('made it this far!')
  var queryData = url.parse(req.url, true).query;
  var lat = queryData.lat.toString()
  var lng = queryData.lng.toString()
  console.log('data', queryData);

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

  request(options, function (error, response, body) {
    if (error) {throw new Error(error)};

    res.setHeader('content-type', 'application/json');

    res.status(200).send(body);
  });
});

module.exports = router;