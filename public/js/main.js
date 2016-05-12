$(function initializeMap (){

  var fullstackAcademy = new google.maps.LatLng(40.705086, -74.009151);

  var styleArr = [{
    featureType: 'landscape',
    stylers: [{ saturation: -100 }, { lightness: 60 }]
  }, {
    featureType: 'road.local',
    stylers: [{ saturation: -100 }, { lightness: 40 }, { visibility: 'on' }]
  }, {
    featureType: 'transit',
    stylers: [{ saturation: -100 }, { visibility: 'simplified' }]
  }, {
    featureType: 'administrative.province',
    stylers: [{ visibility: 'off' }]
  }, {
    featureType: 'water',
    stylers: [{ visibility: 'on' }, { lightness: 30 }]
  }, {
    featureType: 'road.highway',
    elementType: 'geometry.fill',
    stylers: [{ color: '#ef8c25' }, { lightness: 40 }]
  }, {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [{ visibility: 'off' }]
  }, {
    featureType: 'poi.park',
    elementType: 'geometry.fill',
    stylers: [{ color: '#b6c54c' }, { lightness: 40 }, { saturation: -40 }]
  }];

  var mapCanvas = document.getElementById('map-canvas');

  var currentMap = new google.maps.Map(mapCanvas, {
    center: fullstackAcademy,
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    styles: styleArr
  });

  var iconURLs = {
    hotel: '/images/lodging_0star.png',
    restaurant: '/images/restaurant.png',
    activity: '/images/star-3.png'
  };

  function drawMarker (type, coords) {
    var latLng = new google.maps.LatLng(coords[0], coords[1]);
    var iconURL = iconURLs[type];
    var marker = new google.maps.Marker({
      icon: iconURL,
      position: latLng
    });
    marker.setMap(currentMap);
  }

  // drawMarker('hotel', [40.705137, -74.007624]);
  // drawMarker('restaurant', [40.705137, -74.013940]);
  // drawMarker('activity', [40.716291, -73.995315]);

  for (var key in hotels) {
  var newop = new Option(hotels[key].name, key)
  $('#hotel-choices').append(newop);
  }
  for (var key in restaurants) {
    $('#restaurant-choices').append(new Option(restaurants[key].name, key));
  }
  for (var key in activities) {
    $('#activity-choices').append(new Option(activities[key].name, key));
  }

  function getCoords(selection, model, index) {
    var coords = model[index].place.location;
    return coords;
  }

  $('.btn-hotel').click(function() {
    var selectedHotel = $('#hotel-choices option:selected');
    var index = selectedHotel[0].value;

    $('.itinerary-item.hotel-item').append('<span class="title" id=' + index + '>'+selectedHotel.text()+"</span>");
    $('.itinerary-item.hotel-item').append('<button class="btn btn-xs btn-danger remove btn-circle" >x</button>');
    drawMarker('hotel',getCoords(selectedHotel,hotels, index));
    console.log($('.hotel-item').next());
  });

  $('.btn-restaurant').click(function() {
    var selectedRestaurant = $('#restaurant-choices option:selected');
    var index = selectedRestaurant[0].value;

    $('.itinerary-item.restaurant-item').append('<span class="title" id=' + index + '>'+selectedRestaurant.text()+"</span>");
    $('.itinerary-item.restaurant-item').append('<button class="btn btn-xs btn-danger remove btn-circle">x</button>');
    drawMarker('restaurant',getCoords(selectedRestaurant,restaurants, index));

  });

  $('.btn-activity').click(function() {
    var selectedActivity = $('#activity-choices option:selected');
    var index = selectedActivity[0].value;

    $('.itinerary-item.activity-item').append('<span class="title" id='+ index + '>'+selectedActivity.text()+"</span>");
    $('.itinerary-item.activity-item').append('<button class="btn btn-xs btn-danger remove btn-circle">x</button>');
    drawMarker('activity',getCoords(selectedActivity,activities, index));

  });

  $('.itinerary-item.hotel-item').on('click', '.remove', function () {
    $(this).prev().remove();
    $(this).remove();
  });

  $('.itinerary-item.restaurant-item').on('click', '.remove', function () {
    $(this).prev().remove();
    $(this).remove();
  });

  $('.itinerary-item.activity-item').on('click', '.remove', function () {
    $(this).prev().remove();
    $(this).remove();
  });

});
