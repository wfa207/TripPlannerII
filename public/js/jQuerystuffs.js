for (var key in hotels) {
  $('#hotel-choices').append(new Option(hotels[key].name, hotels[key].id));
}
for (var key in restaurants) {
  $('#restaurant-choices').append(new Option(restaurants[key].name, restaurants[key].id));
}
for (var key in activities) {
  $('#activity-choices').append(new Option(activities[key].name, activities[key].id));
}

$('.btn-hotel').click(function() {
  var selectedHotel = $('#hotel-choices option:selected').text();
  console.log(selectedHotel);
  $('.itinerary-item.hotel-item').append('<span class="title">'+selectedHotel+"</span>");
  $('.itinerary-item.hotel-item').append('<button class="btn btn-xs btn-danger remove btn-circle">x</span>');
});

$('.btn-restaurant').click(function() {
  var selectedRestaurant = $('#restaurant-choices option:selected').text();
  console.log(selectedRestaurant);
  $('.itinerary-item.restaurant-item').append('<span class="title">'+selectedRestaurant+"</span>");
  $('.itinerary-item.restaurant-item').append('<button class="btn btn-xs btn-danger remove btn-circle">x</span>');
});

$('.btn-activity').click(function() {
  var selectedActivity = $('#activity-choices option:selected').text();
  console.log(selectedActivity);
  $('.itinerary-item.activity-item').append('<span class="title">'+selectedActivity+"</span>");
  $('.itinerary-item.activity-item').append('<button class="btn btn-xs btn-danger remove btn-circle">x</span>');
});