require('dotenv').config()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const weatherData = require('./src/app/weather')
const news = require('./src/app/news')
const userRoutes = require('./src/routes/index')

const express = require('express')
const app = express()
app.use(express.json())
app.use(bodyParser.json())
const port = process.env.PORT != null ? process.env.PORT : 3000

mongoose.connect(process.env.MONGO_URI).then(()=>{
  console.log("DB Connected!")
}).catch((error)=>{
  console.log(error)
})

app.use(userRoutes)

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


