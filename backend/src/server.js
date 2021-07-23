const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const app = express()

const porta = 3333

app.use(express.json())
app.use(cors())
app.use(routes)

app.listen(porta, () => {
  console.log('back-end iniciou')
})