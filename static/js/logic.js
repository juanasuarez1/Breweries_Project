let myMap = L.map("map", {
    center: [-32.8, 117.9],
    zoom: 7
  });

  // Adding the tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);
  
  let brew_json = "../../brewery.json";
  d3.json(brew_json).then(function(response) {
    console.log(response);
    id = response.id;
   
    let heatArray = [];
    for (let i = 0; i < features_length; i++) {
      let location = features[i].geometry;
      if (location) {
        //console.log(location);
        heatArray.push([location.coordinates[1], location.coordinates[0]]);
      }
    }
    let heat = L.heatLayer(heatArray, {
      radius: 20,
      blur: 35
    }).addTo(myMap);
  });