const express = require('express')
const BeneficiarioController = require('./controllers/BeneficiarioController')

const routes = express.Router()

// Rotas Beneficiarios
routes.get('/beneficiarios', BeneficiarioController.index)
routes.post('/beneficiarios', BeneficiarioController.create)
routes.delete('/beneficiarios/:id', BeneficiarioController.destroy)

module.exports = routes