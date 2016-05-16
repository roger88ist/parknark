// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

function initGeolocation() {
  if( navigator.geolocation ) {
     // Call getCurrentPosition with success and failure callbacks
     navigator.geolocation.getCurrentPosition( success, fail );
  }
  else {
     alert("Sorry, your browser does not support geolocation services.");
  }
}

function success(position){
  $("input#lat").val(position.coords.latitude);
  $("input#long").val(position.coords.longitude);
}
function fail() {
// Could not obtain location
}

var map;
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 25.7742657, lng: -80.1936589},
    zoom: 6
  });
  var infoWindow = new google.maps.InfoWindow({map: map});
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        };

      infoWindow.setPosition(pos);
      infoWindow.setContent('YOU ARE HERE');
      map.setCenter(pos);
      map.setZoom(17);
      map.setMapTypeId(google.maps.MapTypeId.TERRAIN);
      }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
}
