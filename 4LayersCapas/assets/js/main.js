// Crea el mapa con LEALFET.
var map = new L.Map('map').setView([-34.58488, -58.37109], 7);



// Crea y agrera la capa del OSM (Open Street Map).
var osm = new L.TileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png').addTo(map);



//Crea las capas restantes del servidor
var topographyAndPlaces = L.tileLayer.wms('http://ows.mundialis.de/services/service?', {
	layers: 'TOPO-WMS,OSM-Overlay-WMS'
}).addTo(map);

var basemaps = {

	//Capa 1
	Topography: L.tileLayer.wms('http://ows.mundialis.de/services/service?', {
		layers: 'TOPO-WMS'
	}),

	//Capa 2
	Places: L.tileLayer.wms('http://ows.mundialis.de/services/service?', {
		layers: 'OSM-Overlay-WMS'
	}),

	//Union de las dos capas anteriores
	'Topography, then places': L.tileLayer.wms('http://ows.mundialis.de/services/service?', {
		layers: 'TOPO-WMS,OSM-Overlay-WMS'
	})

};

L.control.layers(basemaps).addTo(map);

basemaps.Topography.addTo(map);