let url = "http://127.0.0.1:5000/api/v1.0/geoJSON";

// confirm data import
d3.json(url).then(function(response) {
    // console.log(response.features[0].properties.state_province)
    let brewery = response.features[0].properties.brewery_type
    let state= response.features[0].properties.state_province
    console.log(brewery)
    console.log(state)

    var Florida = 0
    var Texas = 0
    var California = 0
    var Oklahoma = 0
    var Colorado = 0
    var Washington  = 0
    var Minnesota  = 0
    var Massachusetts = 0
    var New_York = 0
    var Arizona = 0
    var Alaska = 0
    var Georgia = 0
    var Hawaii = 0
    console.log(response.features[5].state_province)
    let feature = response.features[3].state_province;
    console.log(feature)
    let features = response.features
    for (let i = 0; i < features.length; i++) {

        // Set the data location property to a variable.
        let feature = response.features[i].properties.state_province;
        if(feature == "Florida") {Florida ++};
        if(feature == "Texas") {Texas ++};
        if(feature == "California") {California ++};
        if(feature == "Oklahoma") {Oklahoma ++};
        if(feature == "Colorado") {Colorado ++};
        if(feature == "Washington") {Washington ++};
        if(feature == "Minnesota") {Minnesota ++};
        if(feature == "Massachusetts") {Massachusetts ++};
        if(feature == "New_York") {New_York ++};
        if(feature == "Arizona") {Arizona ++};
        if(feature == "Alaska") {Alaska ++};
        if(feature == "Georgia") {Georgia ++};
        if(feature == "Hawaii") {Hawaii ++};
        




        
    
     
    }
console.log(Florida)
console.log(Texas)
console.log(California)
console.log(Oklahoma)
console.log(Colorado)
console.log(Washington)
console.log(Minnesota)
console.log(Massachusetts)
console.log(New_York)
console.log(Arizona)
console.log(Alaska)
console.log(Georgia)
console.log(Hawaii)
const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Florida', 'Texas', 'California', 'Oklahoma', 'Colorado', 'Washington', 'Minnesota', 'Massachusetts', 'Alaska', 'Georgia', 'Arizona', 'Hawaii'],
      datasets: [{
        label: 'Number of Locations in States',
        data: [Florida, Texas, California, Oklahoma, Colorado, Washington, Minnesota, Massachusetts, Arizona, Alaska, Georgia, Hawaii],
        backgroundColor: 'rgba(255, 0, 0, 255)',
        borderColor: 'rgba(0, 0, 0, 5)',
        borderWidth: 1
    }]
},
  options: {
    scales: {
x: {
ticks: {
color: ['black']     } },
y: {         
ticks: {              
color: ['black']         }     },       
beginAtZero: true      
} 
} 
});    
});