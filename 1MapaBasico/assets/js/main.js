var osmUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
            osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            osm = L.tileLayer(osmUrl, { maxZoom: 18, attribution: osmAttrib });

var map = L.map('map').setView([-34.66439,-58.36883], 18).addLayer(osm);
        L.marker([-34.66439,-58.36883])
            .addTo(map)
            .bindPopup('Cerveceria Artesanal.')
            .openPopup();           


var circle = L.circle([-34.6639, -58.36913], {
    color: 'blue',
    fillColor: '#f03',
    fillOpacity: 0.5,
    radius: 6
}).addTo(map);





    

