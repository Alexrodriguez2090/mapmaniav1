var map;
var findMe = {lat:-36.84,lng:174.7};

function initMap() {
	console.log("Does this work")
	var myLocation = {
	center: new google.maps.LatLng(41.60,-88.07),
	zoom: 10
	};

	map = new google.maps.Map(document.getElementById('mapdiv'),myLocation)

	map.addListener('zoom_changed', function() {
		var zoom = map.getZoom()
		console.log('Zoom: '+zoom);
	});

	map.addListener('bounds_changed', function() {
		var bounds = map.getBounds()
		console.log("Bounds: "+bounds);
		doYouSeeIt()
	});

}

function doYouSeeIt() {
	var bounds = map.getBounds()
	var zoom = map.getZoom()
		if (bounds.contains(findMe) && zoom < 8) {
		console.log("---------It is in view---------")
		console.log("--------------but--------------")
		console.log("-------you gotta zoom in-------")
	}
	if (bounds.contains(findMe) && zoom >= 8) {
		console.log("*******************************")
		console.log("---------You found it!---------")
		console.log("*******************************")
	}
}