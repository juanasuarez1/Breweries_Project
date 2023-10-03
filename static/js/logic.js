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

  // Create a new marker cluster group.
  let markers = L.markerClusterGroup();

  // Loop through the data.
  for (let i = 0; i < response.length; i++) {

    // Set the data location property to a variable.
    let features = response[i].features;

    // Check for the location property.
    if (features) {

      // Add a new marker to the cluster group, and bind a popup.
      markers.addLayer(L.marker([features.coordinates[1], features.coordinates[0]])
        .bindPopup(response[i].descriptor));
    }

  }

  // Add our marker cluster layer to the map.
  myMap.addLayer(markers);
  
});