var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var labelIndex = 0;
var markers = [];


function initialize2() {

  // This event listener calls addMarker() when the map is clicked.
  google.maps.event.addListener(map, 'click', function(event) {
	if (document.getElementById("add-marker").innerHTML.match('TAP TO EXIT LOCATION ADDING MODE')) {
    addMarker(event.latLng, map);}
});
}

// Adds a marker to the map.
function addMarker(location) {
	var image = 'pink_MarkerO.png';
  var marker = new google.maps.Marker({
    position: location,
    map: map,
	'icon': image,
	/*label: prompt('Enter name for this location'),*/
  });
  /*marker.myID = prompt('Enter name for this location');*/
  markers.push(marker);
}

// Sets the map on all markers in the array.
function setAllMap(map) {
  for (var i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
  setAllMap(null);
}

// Shows any markers currently in the array.
function showMarkers() {
  setAllMap(map);
}

// Deletes all markers in the array by removing references to them.
function deleteMarkers() {
  clearMarkers();
  markers = [];
}

function deleteMarker() {
  clearMarkers();
  markers.pop();
	showMarkers();
}

google.maps.event.addDomListener(window, 'load', initialize2);

function addlocation() {
	var add = document.getElementById("add-marker");
	if (add.innerHTML.match('ADD SPECIAL LOCATIONS FOR ALERT')) {
		add.innerHTML = 'TAP TO EXIT LOCATION ADDING MODE';
	}
	else {
		add.innerHTML = 'ADD SPECIAL LOCATIONS FOR ALERT'
	}
}
