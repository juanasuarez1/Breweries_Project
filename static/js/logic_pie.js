

let url = "http://127.0.0.1:5000/api/v1.0/geoJSON";

// confirm data import
d3.json(url).then(function(response) {
    // console.log(response.features[0].properties.state_province)
    let state = response.features[0].properties.state_province
    console.log(state)

    var large = 0
    var nano = 0
    var regional = 0
    var brewpub = 0
    var micro = 0
    var planning = 0
    var bar = 0
    var contract = 0
    var proprietor = 0
    var closed = 0
    console.log(response.features[5].properties.brewery_type)
    let feature = response.features[3].properties.brewery_type;
    console.log(feature)
    let features = response.features
    for (let i = 0; i < features.length; i++) {

        // Set the data location property to a variable.
        let feature = response.features[i].properties.brewery_type;
        if(feature == "micro") {micro ++};
        if(feature == "nano") {nano ++};
        if(feature == "regional") {regional ++};
        if(feature == "brewpub") {brewpub ++};
        if(feature == "large") {large ++};
        if(feature == "planning") {planning  ++};
        if(feature == "bar") {bar ++};
        if(feature == "contract") {contract ++};
        if(feature == "proprietor") {proprietor ++};
        if(feature == "closed") {closed ++};
        

     
    }
console.log(nano)
console.log(micro)
console.log(regional)
console.log(brewpub)
console.log(large)
console.log(planning)
console.log(bar)
console.log(contract)
console.log(proprietor)
console.log(closed)


const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'pie',
  
  font: {
      size: 16},
  data: {
    labels: ['nano', 'micro', 'regional', 'brewpub', 'large', 'planning', 'bar', 'contract', 'proprietor', 'closed'],
    datasets: [{
      label: 'Count of Brewery Types',
      data: [nano, micro, regional, brewpub, large, planning, bar, contract, proprietor, closed],
      borderWidth: 1
    }]
  },
  options: {responsive: true,
      maintainAspectRatio: false,
    scale: {
      pointLabels :{
          fontStyle: "bold"},

      y: {
        beginAtZero: true
      }
    }
  }
});



});
