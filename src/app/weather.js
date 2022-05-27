
const axios = require('axios');
let getWeather = async function getWeather() {
    let responseData = {}
        const response = await axios.get('https://api.openweathermap.org/data/2.5/onecall', {
            params: {
                lat: "28.4089",
                lon: "77.317",
                //TODO: ADD your own weather key and we
                appid: 'weatherKey',
            }
        });
        responseData['data'] = response
        return responseData        
}

module.exports = {
    getWeather: getWeather
}