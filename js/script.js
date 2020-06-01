function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
});
window.onload = function () {
	//Mobile menu
	var nav = document.querySelector(".navbar__nav");
	var toggler = document.querySelector(".toggler");

	toggler.onclick = function () {
		toggler.classList.toggle("toggler_active");
		nav.classList.toggle("navbar__nav_active");
	}

	// Filter
	var items = $(".news-item");

	function filter(x) {
		items.hide();

		var key = x.data("filter");
		if (key == "all") {
			items.show();
		}
		else {
			$("." + key).show();
		}

	}

	var switcher = $(".news__btn");

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

};
var map;
function initMap() {
	var locations = [
		[new google.maps.LatLng(51.104947, 10.522583)],
		[new google.maps.LatLng(43.091046, 12.70748)],
		[new google.maps.LatLng(39.31404, -3.544999)],
		[new google.maps.LatLng(61.974898, 9.638495)],
		[new google.maps.LatLng(62.920534, 16.77498)]
	]

	var mapOptions = {
		center: locations[0][0],
		zoom: 3,
		//scrollwheel: true,
		styles: [{ "featureType": "landscape.natural", "elementType": "geometry.fill", "stylers": [{ "visibility": "on" }, { "color": "#e0efef" }] }, { "featureType": "poi", "elementType": "geometry.fill", "stylers": [{ "visibility": "on" }, { "hue": "#1900ff" }, { "color": "#c0e8e8" }] }, { "featureType": "road", "elementType": "geometry", "stylers": [{ "lightness": 100 }, { "visibility": "simplified" }] }, { "featureType": "road", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit.line", "elementType": "geometry", "stylers": [{ "visibility": "on" }, { "lightness": 700 }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "color": "#7dcdcd" }] }],
	}

	map = new google.maps.Map(document.getElementById('map'), mapOptions);

	var icon = {
		url: '../img/map.svg',
		scaledSize: new google.maps.Size(24, 29),
		anchor: new google.maps.Point(9, 10)
	}

	for (var i = 0; i < locations.length; i++) {
		var marker = new google.maps.Marker({
			icon:icon,
			position: locations[i][0],
			map: map
		});
	}
}