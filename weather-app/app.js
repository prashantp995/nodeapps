// call stack & call back , that is why Stopping printed before 0 sec timer 
//After main function executes , then event queue such as setTimeout functions executes 

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2];

if (address) {
    geocode(address, (error, data) => {
        //console.log('Error', error)
        //console.log('Data', data)

        if (error) {
            return console.log(error);
        }

        const { location } = data;

        forecast(data, (error, forecastData) => {
            console.log(location)
            console.log('Forecast Data ' + forecastData)
        })


    })
} else {
    console.log("No address provided")
}






