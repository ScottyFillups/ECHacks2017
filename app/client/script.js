var lbl = $('#lbl')

function toGooglePosition(pos) {
  return {
    lat: pos.coords.latitude,
    lng: pos.coords.longitude
  }
}
function $ (s) {
  return document.querySelector(s)
}
function updateLabel (position) {
  lbl.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude
}

function mapHandler () {
  var defPos = { coords: {lat: 0, lng: 0 } }
  var map
  var marker
  var watchID
  
  function update (position) {
    gPos = toGooglePosition(position)
    console.log(gPos)
    console.log(position)
    updateLabel(position)
    map.panTo(gPos)
    marker.setPosition(gPos)
  }

  (function init() {
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 25,
      mapTypeId: 'satellite',
      center: defPos
    })
    marker = new google.maps.Marker({
      position: defPos,
      map: map
    })

    if (navigator.geolocation) {
      watchID = navigator.geolocation.watchPosition(update)
    } else {
      lbl.innerHTML = "Geolocation is not supported by this browser."
    }
  })()
}
