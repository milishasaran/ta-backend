const weatherData = require('./src/app/weather')
const news = require('./src/app/news')

const express = require('express')
const app = express()
app.use(express.json())
const port = process.env.PORT != null ? process.env.PORT : 3000

app.get('/', async function (req, res) {
  res.send('Welcome to the news and weather API')
})

app.get('/weather', async function (req, res) {
  let responseData = await weatherData.getWeather()
  res.status(responseData.status).send(responseData.data)
})

app.get('/news', async function (req, res) {
  let responseData = await news.fetchNews()
  res.status(responseData.status).send(responseData.data)
})


app.listen(port, () => {
  console.log('The server is running at port', port)
})

