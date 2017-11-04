var x = $('#demo')
var btn = $('#update')

btn.addEventListener('click', getLocation)

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}
function showPosition(position) {
  x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude; 
}


// testing live update
function initMap () {}
window.onload = function () {
  initMap = function() {
    var latlng = new google.maps.LatLng(-34.397, 150.644);

    var myOptions = {
      zoom: 8,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map( $('#display') , myOptions);
  }
}







// library stuff

function $ (s) {
  return document.querySelector(s)
}
