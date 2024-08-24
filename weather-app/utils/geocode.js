const request = require('request');
const chalk = require('chalk');
const keys = require('./keys.js');

const geocode = (address, callback) => {
    const url = 'https://api.tomtom.com/search/2/geocode/' + encodeURIComponent(address) + '.json?' + keys.tomtomKey + '&limit=1';
    // console.log(url)
    request({ url: url, json: true }, (error, { body }) => {
        if (error) {
            callback(error, undefined)
        } else if (body.errorText) {
            callback(body.errorText)
        } else {
            callback(undefined, {
                lat: body.results[0].position.lat,
                long: body.results[0].position.lon,
                location: body.results[0].address.freeformAddress + " " + body.results[0].address.country
            })
        }
    })
}

module.exports = geocode