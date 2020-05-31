$(document).ready(function () {
	//Mobile menu
	const nav = $(".navbar__nav");
	const toggler = $(".toggler");

	toggler.click(function () {
		toggler.toggleClass("toggler_active");
		nav.toggleClass("navbar__nav_active");
	})

	// Filter
	const items = $(".news-item");
	
	function filter(x) {
		items.hide();

		let key = x.data("filter");
		if (key == "all") {
			items.show();
		}
		else {
			$("."+key).show();
		}
		
	}

	const switcher = $(".news__btn");

	switcher.click(function () {
		if ($(this).hasClass("news__btn_active")) {
			//pass
		}
		else {
			switcher.removeClass("news__btn_active");
			$(this).addClass("news__btn_active");
			filter($(this));
		}
	})

	//Map
	//// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
	// Basic options for a simple Google Map
	// For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
	var locations = [
		[new google.maps.LatLng(51.104947, 10.522583)],
		[new google.maps.LatLng(43.091046, 12.707480)],
		[new google.maps.LatLng(39.314040, -3.544999)],
		[new google.maps.LatLng(61.974898, 9.638495)],
		[new google.maps.LatLng(62.920534, 16.774980)],
	]

	var mapOptions = {
		// How zoomed in you want the map to start at (always required)
		zoom: 4,

		// The latitude and longitude to center the map (always required)
		center: new google.maps.LatLng(51.104947, 10.522583), // Germany
		// How you would like to style the map. 
		// This is where you would paste any style found on Snazzy Maps.
		styles: [{ "featureType": "water", "elementType": "all", "stylers": [{ "hue": "#27b1e4" }, { "saturation": 60 }, { "lightness": -31 }, { "visibility": "on" }] }, { "featureType": "landscape", "elementType": "all", "stylers": [{ "hue": "#c0e6f4" }, { "saturation": 59 }, { "lightness": -4 }, { "visibility": "on" }] }, { "featureType": "road", "elementType": "all", "stylers": [{ "hue": "#7ed0ee" }, { "saturation": -23 }, { "lightness": 20 }, { "visibility": "on" }] }, { "featureType": "administrative", "elementType": "all", "stylers": [{ "hue": "#6fafc7" }, { "saturation": 44 }, { "lightness": 20 }, { "visibility": "on" }] }, { "featureType": "poi", "elementType": "all", "stylers": [{ "hue": "#aedbec" }, { "saturation": 33 }, { "lightness": 11 }, { "visibility": "on" }] }, { "featureType": "transit", "elementType": "all", "stylers": [{ "hue": "#aedbec" }, { "saturation": 62 }, { "lightness": 22 }, { "visibility": "off" }] }, { "featureType": "road.local", "elementType": "all", "stylers": [{ "hue": "#dceff6" }, { "saturation": -41 }, { "lightness": -9 }, { "visibility": "off" }] }, { "featureType": "landscape.man_made", "elementType": "all", "stylers": [{ "hue": "#dceff6" }, { "saturation": 44 }, { "lightness": 22 }, { "visibility": "on" }] }]
	};

	// Get the HTML DOM element that will contain your map 
	// We are using a div with id="map" seen below in the <body>
	var mapElement = document.getElementById('map');

	// Create the Google Map using our element and options defined above
	var map = new google.maps.Map(mapElement, mapOptions);

	var icon = {
		url: '../img/map.svg',
		scaledSize: new google.maps.Size(24, 29),
		anchor: new google.maps.Point(9, 10)
	}

	// Let's also add a marker while we're at it
	for (var i = 0; i < locations.length; i++) {
		var marker = new google.maps.Marker({
			icon: icon,
			position: locations[i][0],
			map: map,
		});
	}
};
});	

