// console.log('Starting');

// setTimeout(() => {
//     console.log('2 second timer');
// }, 2000);

// setTimeout(() => {
//     console.log('0 second timer');
// }, 0);
// console.log('Stopping');

// 31. HTTP req
const request = require('request')
const url = 'http://api.weatherstack.com/current?access_key=38dc4ca299daf7cd4ff3897bca457381&query=Mumbai'
request({ url: url, json: true }, (err, resp) => {

    // const data = JSON.parse(resp.body)  as we have used json=true
    console.log(resp.body.current);
})