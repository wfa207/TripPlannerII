var express = require('express');
var router = express.Router();
var place = require('../models/place');
var activity = require('../models/activity');
var restaurant = require('../models/restaurant');
var hotel = require('../models/hotel');

router.get('/', function(req, res, next) {
  Promise.all([hotel.findAll({}), restaurant.findAll({}), activity.findAll({})])
    .then(function(results) {
        // var hotel = results[0];
        // var restaurant = results[1];
        // var activity = results[2];
    	res.render('index', {
    		hotels: results[0],
    		restaurants: results[1],
    		activities: results[2]
    	});
	})
});

module.exports = router;