const express = require('express')
const routes = require('./routes')

const app = express()

app.use(express.json())
app.use(routes)

// json files
const plans = require('./data/plans.json')
const prices = require('./data/prices.json')

// Rotas
app.get('/plans', (request, response) => response.json(plans))
app.get('/prices', (request, response) => response.json(prices))

app.listen('3333', () => {
  console.log('back-end iniciou')
})