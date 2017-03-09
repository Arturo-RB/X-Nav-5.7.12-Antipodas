var options = {
	enableHighAccuracy: true,
	timeout: 5000,
	maximumAge: 0
}

function show_map(position) {
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude; 
	// let’s show a map or do something interesting!
	var mapDiv = document.getElementById("map");
	var map = new google.maps.Map(mapDiv, { center: {lat: latitude, lng: longitude},
											zoom: 15 
										});
	var mapDiv = document.getElementById("map2");
	var map = new google.maps.Map(mapDiv, { center: {lat: latitude*-1, lng: longitude+180},
											zoom: 15 
										});
}


function error(err) {
 	console.warn('ERROR(' + err.code + '): ' + err.message);
}

function get_location() {        		
	if (Modernizr.geolocation) {
		navigator.geolocation.getCurrentPosition(show_map, error, options);
		
	} else {
		alert("Geolocation is not supported by this browser.");
	}
}	

	       
