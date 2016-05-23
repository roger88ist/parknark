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
//= require jquery-readyselector
//= require_tree .


function ready() {

  initGeolocation();
  // initMap();

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

  function handleLocationError(browserHasGeolocation, infoWindow, pos) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
      'Error: The Geolocation service failed.' :
      'Error: Your browser doesn\'t support geolocation.');
  }
}

var map;
function initMap() {
  var page = $("#page_id").attr('value');
  console.log("This is the page " + page);

  map = new google.maps.Map(document.getElementById('map'), {
    // center: final[0],
    zoom: 15,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  });

  var final = [];
  for (var i = 0; i < gon.array_of_cor.length; i++) {
    var result = {lat: gon.array_of_cor[i][0], lng: gon.array_of_cor[i][1]};
    final.push(result);
  }

  if (page !== "markers") {
    for (var idx in final) {
      var cityCircle = new google.maps.Circle({
        strokeColor: '#000000',
        strokeOpacity: 1,
        strokeWeight: 1,
        fillColor: '#3498db',
        fillOpacity: 0.35,
        map: map,
        center: final[idx],
        radius: 402,
      });
    }
  } else {
    var markers = [];

    for (i = 0; i < final.length; i++) {
      var marker = new google.maps.Marker({
        position: final[i],
        map: map,
      });
      // markers.push(marker);
    }
  }

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var initialLocation = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      map.setCenter(initialLocation);
    });
  }
}

$(document).on("ready page:load", ready);
