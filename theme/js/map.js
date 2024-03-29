
// var waterPov;

$(document).ready(function() {

  // create a new tile layer
  mapBoxUrl = 'http://{s}.tiles.mapbox.com/v3/stuffaccounts.map-o3bv41up/{z}/{x}/{y}.png',
  myAttribution = 'Map data &copy; 2012 OpenStreetMap contributors, Imagery &copy; 2012 CloudMade',
  basic = new L.TileLayer(mapBoxUrl, {maxZoom: 20, attribution: myAttribution});

  var map = new L.Map('map', {
    center: new L.LatLng(37.820, -122.367),
    zoom: 10
  });

  // add basemap layer to the map
  map.addLayer(basic,true);


  function onLocationFound(e) {
    var radius = e.accuracy / 2;

    L.circleMarker(e.latlng).addTo(map)
      .bindPopup("Your Location").openPopup();

    L.circle(e.latlng, radius).addTo(map)
      .bindPopup("You are within " + radius + " meters from this point");
  }

  function onLocationError(e) {
    alert(e.message);
  }

  map.on('locationfound', onLocationFound);
  map.on('locationerror', onLocationError);

  map.locate({setView: true, maxZoom: 11});



  // var povIcon = {
  //   radius: 5,
  //   fillColor: "red",
  //   color: "#000",
  //   weight: 1,
  //   opacity: 1,
  //   fillOpacity: 0.7
  // };

  // L.geoJson(pov, {
  //     pointToLayer: function (feature, latlng) {
  //         return L.circleMarker(latlng, povIcon);
  //     }
  // }).addTo(map);







  // var povIcon = L.Icon.extend({
  //   options: {
  //     iconUrl: "images/theme/pov.png",
  //     shadowUrl: null
  //   }
  // });

  // waterPov = new lvector.GISCloud({
  //   mapID: 77214,
  //   layerID: 239889,
  //   scaleRange: [5, 20],
  //   symbology: {
  //     type: "single", 
  //     vectorOptions: {
  //       // icon: new povIcon()
  //     }
  //   },
  //   popupTemplate: '<div class="iw-content"><h5>{pod_id}</h5><table class="condensed-table"><tr><td>{watershed}</td></tr><tr><td>{county}</td></tr></table></div>',
  //   singlePopup: true
  // });

  // waterPov.setMap(map);
  
  





  // var markers = new L.MarkerClusterGroup({
  //   // showCoverageOnHover: false
  // });

  // var geoJsonLayer = L.geoJson(pov, {
  //   onEachFeature: function (feature, layer) {
  //     layer.bindPopup(
  //       '<h5>Point of Diversion ID: ' + feature.properties.POD_ID 
  //       + '<br>Source Name: ' + feature.properties.SOURCE_NAME 
  //       + '<br>Watershed: ' + feature.properties.WATERSHED 
  //       + '<br>County: ' + feature.properties.COUNTY 
  //       + '<br>Right Type: ' + feature.properties.WATER_RIGHT_TYPE
  //       + '<br>Right Status: ' + feature.properties.WATER_RIGHT_STATUS
  //       + '<br>Annual Direct Diversion: ' + feature.properties.WATER_RIGHT_STATUS + feature.properties.DIVERSION_UNITS
  //       + '<br>Diverson Storage Amount: ' + feature.properties.DIVERSION_STORAGE_AMOUNT
  //       + '</h5>'
  //     );
  //   }
  // });
  // markers.addLayer(geoJsonLayer);

  // map.addLayer(markers);
  // map.fitBounds(markers.getBounds());



});

