// var express = require('express');
// var router = express.Router();
// var place = require('../models/place');
// var activity = require('../models/activity');
// var restaurant = require('../models/restaurant');
// var hotel = require('../models/hotel');

// router.get('/', function(req, res, next) {
//   Promise.all([hotel.findAll({}), restaurant.findAll({}), activity.findAll({}), place.findAll({})])
//     .then(function(results) {
//         // var hotel = results[0];
//         // var restaurant = results[1];
//         // var activity = results[2];
//     	res.render('index', {
//     		hotels: results[0],
//     		restaurants: results[1],
//     		activities: results[2],
//     		places: results[3]
//     	});
// 	})
// });

// module.exports = router;

var express = require('express');
var router = express.Router();
var Hotel = require('../models/hotel');
var Restaurant = require('../models/restaurant');
var Activity = require('../models/activity');
var Place = require('../models/place');
var Promise = require('bluebird');

router.get('/', function (req, res, next) {

    var findingHotels = Hotel.findAll({
        include: [Place]
    });

    var findingActivities = Activity.findAll({
        include: [Place]
    });

    var findingRestaurants = Restaurant.findAll({
        include: [Place]
    });

    Promise.all([
            findingHotels,
            findingActivities,
            findingRestaurants
        ])
        .spread(function (hotels, activities, restaurants) {
            res.render('index', {
                hotels: hotels,
                activities: activities,
                restaurants: restaurants
            });
        })
        .catch(next);

});

module.exports = router;