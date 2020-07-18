// Use the fetch API to get the data on the AWS server

// declare a variable of the url
const geoJsonUrl = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3930729/demo.geojson";

// Create the leaflet map object
const map = L.map("mapid").setView([45.51, -121.679], 8);

//   create the base map
// check ou the options https://leaflet-extras.github.io/leaflet-providers/preview/
const stamenTonerTiles = L.tileLayer(
  "https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}",
  {
    attribution:
      'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    subdomains: "abcd",
    minZoom: 0,
    maxZoom: 20,
    ext: "png"
  }
);

stamenTonerTiles.addTo(map);

// declare an uninitialized global geoJson variable
// and then see what hapens when you try to log it
let globalGeoJson; //this will be undefined

// First you need to fetch it
fetch(geoJsonUrl)
  .then(function(res) {
    return res.json();
  })
  .then(function(data) {
    // initialize the global variable with the returned data
    globalGeoJson = data;
    // fetch promise return the data then create a map object
    // with geojson added to it
    L.geoJSON(data).addTo(map);
  });

// // this runs BEFORE the fetch block
// console.log("Why is this undefined?", globalGeoJSon);

// Here is the modern way to accomplish this
// fetch API is promised based - .then(prevReturn) => do something / notice the arrow functions
// arrow functions use arrow function syntax
/////////////////////////////////////////

// fetch(geoJsonUrl)
//   .then(response => response.json())
//   .then(data => {
//     // fetch promise return the data then create a map object
//     // with geojson added to it
//     L.geoJSON(data).addTo(map);
//   });

// even more modern way
// using async await syntax which is based on promises
// this is the evolution of promises
////////////////////////////////////////

// async function addGeoJsonData(url) {
//   const response = await fetch(url);
//   const data = await response.json();
//   L.geoJSON(data).addTo(map);
// }

// addGeoJsonData(geoJsonUrl);
