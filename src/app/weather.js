const axios = require("axios");
let getWeather = async function getWeather() {
  let responseData = {};
  const response = await axios.get(
    "https://api.openweathermap.org/data/2.5/onecall/",
    {
      params: {
        lat: "38.8",
        lon: "12.09",
        appid: "73e560e20299407eff827c297749f0ef",
      },
    }
  );
  responseData["data"] = response;
  return responseData;
};

module.exports = {
  getWeather: getWeather,
};
