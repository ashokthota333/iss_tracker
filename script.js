document.addEventListener('DOMContentLoaded', function () {
    var map = new ol.Map({
        target: 'map',
        layers: [
            new ol.layer.Tile({
                source: new ol.source.OSM()
            })
        ],
        view: new ol.View({
            center: ol.proj.fromLonLat([0, 0]),
            zoom: 3
        })
    });

    var issMarker = new ol.Feature({
        geometry: new ol.geom.Point(ol.proj.fromLonLat([0, 0]))
    });

    var markerStyle = new ol.style.Style({
        image: new ol.style.Icon({
            src: 'iss.png',
            scale: 0.5
        })
    });

    var vectorSource = new ol.source.Vector({
        features: [issMarker]
    });

    var vectorLayer = new ol.layer.Vector({
        source: vectorSource,
        style: markerStyle
    });

    map.addLayer(vectorLayer);

    function fetchISSPosition() {
        fetch('http://api.open-notify.org/iss-now.json')
            .then(response => response.json())
            .then(data => {
                var latitude = parseFloat(data.iss_position.latitude);
                var longitude = parseFloat(data.iss_position.longitude);

                // Update map position
                var position = ol.proj.fromLonLat([longitude, latitude]);
                map.getView().setCenter(position);

                // Update marker position
                issMarker.getGeometry().setCoordinates(position);

                // Update latitude and longitude display
                document.getElementById('latitude').textContent = latitude.toFixed(2);
                document.getElementById('longitude').textContent = longitude.toFixed(2);
            })
            .catch(error => {
                console.error('Error fetching ISS position:', error);
            });
    }

    fetchISSPosition();
    setInterval(fetchISSPosition, 1000);
});
