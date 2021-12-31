const request = require('request')
const forecast = (latitude, longitude, callback) => {
    // const url = 'https://api.darksky.net/forecast/38dc4ca299daf7cd4ff3897bca457381/' + latitude + ',' + longitude
    const url = 'http://api.weatherstack.com/current?access_key=38dc4ca299daf7cd4ff3897bca457381&' + latitude + ',' + longitude + '&units=f'
    request({ url: url, json: true }, (err, resp) => {
        console.log('----', resp.body);
        if (err) {
            callback('Unable to connect weather service', undefined);
        } else if (resp.body.error) {
            callback('Please check latitude / longitude values', undefined);
        } else {
            callback(undefined, {
                summary: response.body.daily.data[0].summary,
                temperature: response.body.currently.temperature,
                precipProbability: response.body.currently.precipProbability
            });
        }
    })
}

module.exports = forecast