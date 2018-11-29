
//elevation finder using google maps api

const request = require('request');
const fs = require('fs');

const YourApiKey='' //add your google maps javascript api key between the quotes

let coordinate=[]//add your coordinate as an array in this format 'latitude,longtitude'
for (let i = 0; i < coordinate.length; i++) {
  request('https://maps.googleapis.com/maps/api/elevation/json?locations='+coordinate[i]+'&key='+YourApiKey, function (error, response, body) {


    const data = JSON.parse(body);

    const elevations=data.results[0].elevation;
    console.log(elevations);

  });
}
//run using 'node trial.js'
