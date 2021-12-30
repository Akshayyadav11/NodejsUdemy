const request = require('request')
const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoiYWtzaGF5eTk3NiIsImEiOiJjazU3cHN0aGQwZ2h2M25wN3liYjEyMm8zIn0.KosZZgpOvXxDayNtHAdIVw&limit=1'
    request({ url: url, json: true }, (err, resp) => {
        if (err) {
            callback('Unable to connect location service', undefined);
        } else if (resp.body.features.length === 0) {
            callback('Unable to find location', undefined);
        } else {
            callback(undefined, {
                latitude: resp.body.features[0].center[0],
                longitude: resp.body.features[0].center[1],
                location: resp.body.features[0].place_name
            });
        }
    })
}
module.exports = geocode