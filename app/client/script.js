var btn = $('#displayCoords')
var lbl = $('#coordLbl')

var x = $('#demo')
var btn = $('#update')

btn.addEventListener('click', getLocation)

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(initMap)
  } else {
    lbl.innerHTML = "Geolocation is not supported by this browser."
  }
}
function displayLocation (position) {
  updateLabel(position)
  initMap(position)
}
function updateLabel (position) {
  lbl.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude; 
}


function initMap (position) {
  position = position || {
    coords: {
      latitude: -25.363,
      longitude: 131.044
    }
  }
  var uluru = {
    lat: position.coords.latitude,
    lng: position.coords.longitude
  }
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: uluru
  })
  var marker = new google.maps.Marker({
    position: uluru,
    map: map
  })
}




// general library code

function $ (s) {
  return document.querySelector(s)
}
