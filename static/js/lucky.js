// Store the API query variables.

let url2 = "http://127.0.0.1:5000/api/v1.0/geoJSON";
// confirm data import

function feelingLucky() {
d3.json(url2).then(function(response) {

    let websites = response.features
    const webArray = []
    for (let i = 0; i < websites.length; i++) {

        let website = response.features[i].properties.website_url
        if (website) {
        webArray.push(website)
        
        
    }}
    const random = Math.floor(Math.random() * webArray.length)
    // console.log(random, webArray[random])
    window.open(webArray[random])
}
)}
;



