const axios = require("axios");

let fetchNews = async function (to = "6/1/2022", from = "6/1/2022") {
  let response = await axios.get("https://newsapi.org/v2/everything", {
    params: {
      pageSize: 15,
      to,
      from,
      q: "apple",
      // TODO: Add your own api key
      apiKey: "2644484289214c6183338ad2977c7a35",
    },
  });
  return response;
};

module.exports = {
  fetchNews: fetchNews,
};
