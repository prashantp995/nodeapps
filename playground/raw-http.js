
const https = require('https')
const keys = require('../weather-app/utils/keys.js');
const url = 'https://api.weatherapi.com/v1/current.json?q=' + encodeURIComponent(40 + "," + -75) + keys.weatherApiKey;

const request = https.request(url, (response) => {

    let data = '';

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    });

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log('An error', error)
})
request.end()