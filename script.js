var map, infoWindow;

function createMap () {
    var options = {
        center: { lat: 43.654, lng: -79.383},
        zoom: 5
    };

    map = new.google.maps.map(document.getElementById('map'), options);
    infoWindow = new google.maps.InfoWindow;
    
}


