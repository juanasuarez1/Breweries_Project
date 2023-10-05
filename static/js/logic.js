// Creating the map object
let myMap = L.map("map", {
  center: [37, -95],
  zoom: 5
});

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Store the API query variables.

let url = "http://127.0.0.1:5000/api/v1.0/geoJSON";

// confirm data import
d3.json(url).then(function(response) {
  // console.log(response.features[0].geometry.coordinates[0])
  // Create a new marker cluster group.
  let markers = L.markerClusterGroup();
  // var geojsonMarkerOptions = {
  //   radius: 8,
  //   fillColor: "#ff7800",
  //   color: "#000",
  //   weight: 1,
  //   opacity: 1,
  //   fillOpacity: 0.8
// };
  // Loop through the data.
  let features = response.features
  for (let i = 0; i < features.length; i++) {

    // Set the data location property to a variable.
    let feature = response.features[i].geometry;

    // if not null add marker
    // if (feature !== null){
    // Check for the location property.
    if (feature) {
    if (feature.coordinates[1]){
    if (feature.coordinates[0]){  
      // Add a new marker to the cluster group, and bind a popup.
      markers.addLayer(L.marker([feature.coordinates[1], feature.coordinates[0]])
        .bindPopup("<strong>" + response.features[i].properties.name + "</strong><br /><br />" +
        response.features[i].properties.city + ", " + response.features[i].properties.state_province +
         "</strong><br /><br/> Type: " + response.features[i].properties.brewery_type));
    
    }


  }}}

  // Add our marker cluster layer to the map.
  myMap.addLayer(markers);

});