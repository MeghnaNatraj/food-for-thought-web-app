$(document).ready(function() { /* google maps -----------------------------------------------------*/
  google.maps.event.addDomListener(window, 'load', initialize);

  function initialize() {

    /* position Amsterdam */
    var latlng = new google.maps.LatLng(52.3731, 4.8922);
    var latlng2 = new google.maps.LatLng(51.3731, 4.8922);

    var mapOptions = {
      center: latlng,
      scrollWheel: false,
      zoom: 13
    };

    var mapOptions2 = {
      center: latlng2,
      scrollWheel: false,
      zoom: 13
    };

    var marker = new google.maps.Marker({
      position: latlng,
      url: '/',
      animation: google.maps.Animation.DROP
    });

    var marker2 = new google.maps.Marker({
      position: latlng2,
      url: '/',
      animation: google.maps.Animation.DROP
    });

    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    var map2 = new google.maps.Map(document.getElementById("map-canvas2"), mapOptions2);

    marker.setMap(map);
    marker2.setMap(map2);


  };
  /* end google maps -----------------------------------------------------*/
});