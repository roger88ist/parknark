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
var map;
function initMap() {
       var map = new google.maps.Map(document.getElementById('map'), {zoom: 8});
       var geocoder = new google.maps.Geocoder;
       geocoder.geocode({'address': 'Miami'}, function(results, status) {
         if (status === google.maps.GeocoderStatus.OK) {
           map.setCenter(results[0].geometry.location);
           new google.maps.Marker({
             map: map,
             position: results[0].geometry.location
           });
         } else {
           window.alert('Geocode was not successful for the following reason: ' +
               status);
         }
       });
     }

function detectBrowser() {
  var useragent = navigator.userAgent;
  var mapdiv = document.getElementById("map");

  if (useragent.indexOf('iPhone') != -1 || useragent.indexOf('Android') != -1 ) {
    mapdiv.style.width = '100%';
    mapdiv.style.height = '100%';
  } else {
    mapdiv.style.width = '600px';
    mapdiv.style.height = '800px';
  }
}
