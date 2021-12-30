const request = require('request')
const geocodes = require('./utils/geocode')

// console.log('Starting');

// setTimeout(() => {
//     console.log('2 second timer');
// }, 2000);

// setTimeout(() => {
//     console.log('0 second timer');
// }, 0);
// console.log('Stopping');

// 31. HTTP req

// const url = 'http://api.weatherstack.com/current?access_key=38dc4ca299daf7cd4ff3897bca457381&query=Mumbai&units=f'
// request({ url: url, json: true }, (err, resp) => {

//     // const data = JSON.parse(resp.body)  as we have used json=true
//     // console.log(resp.body.current);
//     if (err) {
//         console.log('Unable to connect weather service');
//     } else if (resp.body.error) {
//         console.log('Unable to find location');
//     } else {
//         console.log(`${resp.body.current.weather_descriptions[0]}. It is currently ${resp.body.current.temperature} degree out. There is ${resp.body.current.cloudcover}% chance of rain.`);

//     }
// })


// 33. HTTP req
// const url1 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYWtzaGF5eTk3NiIsImEiOiJjazU3cHN0aGQwZ2h2M25wN3liYjEyMm8zIn0.KosZZgpOvXxDayNtHAdIVw&limit=1'
// request({ url: url1, json: true }, (err, resp) => {

//     // const data = JSON.parse(resp.body)  as we have used json=true
//     // console.log(resp.body.features[0].center[0]);
//     if (err) {
//         console.log('Unable to connect location service');
//     } else if (resp.body.features.length === 0) {
//         console.log('Unable to find location');
//     } else {
//         console.log(`latitude : ${resp.body.features[0].center[1]}  Longitude :  ${resp.body.features[0].center[0]}`);
//     }
// });

geocodes('Mumbai', (error, data) => {
    console.log('Error - ', error);
    console.log('Data - ', data);
})