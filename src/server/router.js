const router = require('express').Router();
const path = require('path');
const url = require('url');
const getSliceLocations = require('./requester')

//  /api/restaurants?lat=323&long=3322
router.get('/slices', function(req, res) {
  var queryData = url.parse(req.url, true).query;
  var lat = queryData.lat.toString()
  var lng = queryData.lng.toString()

  getSliceLocations(lat, lng, function (error, response, body) {
    if (error) {throw new Error(error)};

    res.setHeader('content-type', 'application/json');

    res.status(200).send(body);
  });
});

module.exports = router;