const axios = require("axios");

const getWeather = async function getWeather() {
  const response = await axios.get(
    "https://api.openweathermap.org/data/2.5/onecall?lat=38.8&lon=12.09&units=metric&exclude=current,minutely,hourly,alerts&appid=73e560e20299407eff827c297749f0ef"
  );

  return response;
};

module.exports = {
  getWeather: getWeather,
};
