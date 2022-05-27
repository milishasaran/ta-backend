const axios = require('axios');

let fetchNews = async function () {
  let response = await axios.get(
    "https://newsapi.org/v2/top-headlines",
    {
      params: {
        country: 'us',
        // TODO: Add your own api key
        apiKey: "newsKey"
    },
    }
  );
  return response;
};

module.exports = {
  fetchNews: fetchNews,
};