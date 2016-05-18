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

// var arrayOfPoints = [[25.8011413, -80.20221270000002],
//     [25.79959719999999, -80.19922609999998]];
// var convertPoints = [];

// var locations = [{lat: 25.8011413, lng: -80.20221270000002},{lat:25.79959719999999 , lng: -80.19922609999998}];

var final = [];

if (gon.array_of_cor != undefined ) {
  for (var i = 0; i < gon.array_of_cor.length; i++) {
    var result = {lat: gon.array_of_cor[i][0], lng: gon.array_of_cor[i][1]};
    final.push(result);
  }
}


var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
    center: final[0],
    zoom: 17,
  });


  var markers = [];

  for (i = 0; i < final.length; i++) {
    var marker = new google.maps.Marker({
     position: final[i],
     map: map,
    });
    markers.push(marker);
  }

  // var marker = new google.maps.Marker({
  //   position: theLab,
  //   map: map,
  // });

  // var markerFreshii = new google.maps.Marker({
  //   position: freshii,
  //   map: map,
  // });
}

  // var infoWindow = new google.maps.InfoWindow({map: map});
  // if (navigator.geolocation) {
  //   navigator.geolocation.getCurrentPosition(function(position) {
  //       var pos = {
  //       lat: position.coords.latitude,
  //       lng: position.coords.longitude,
  //       lat: 
  //       };

  //     // infoWindow.setPosition(pos);
  //     // infoWindow.setContent('YOU ARE HERE');
  //     map.setCenter(pos);
  //     map.setZoom(15);
  //     map.setMapTypeId(google.maps.MapTypeId.TERRAIN);
  //     }, function() {
  //     handleLocationError(true, infoWindow, map.getCenter());
  //   });
  // } else {
  //   // Browser doesn't support Geolocation
  //   handleLocationError(false, infoWindow, map.getCenter());
  // }


function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
}

$(document).on("ready page:load", initGeolocation);
