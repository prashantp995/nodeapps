const request = require('request')
const chalk = require('chalk');
const keys = require('./keys.js');

const forecast = ({ lat: latitude, long: longtitude }, callback) => {

    const url = 'https://api.weatherapi.com/v1/current.json?q=' + encodeURIComponent(latitude + "," + longtitude) + keys.weatherApiKey;
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback("Unable to connect to weather service", undefined)
        } else if (body.error) {
            callback(console.log(body.error.message), undefined);
        }
        else {
            const current = body.current
            callback(undefined, chalk.green(current.condition.text + ". It is " + current.temp_c + " degrees out there in " + body.location.name + " . it feels like " + current.feelslike_c));
        }

    })
}

module.exports = forecast