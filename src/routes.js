const express = require('express')
const BeneficiarioController = require('./controllers/BeneficiarioController')
const PropostaController = require('./controllers/PropostaController')
const PlanController = require('./controllers/PlanController')
const PriceController = require('./controllers/PriceController')

const routes = express.Router()

// Rotas Beneficiarios
routes.get('/beneficiarios', BeneficiarioController.index)
routes.post('/beneficiarios', BeneficiarioController.create)
routes.delete('/beneficiarios/:id', BeneficiarioController.destroy)

// Rotas Propostas
routes.get('/propostas', PropostaController.index)
routes.get('/propostas/:id', PropostaController.show)
routes.post('/propostas', PropostaController.gerarProposta)

// Rotas Plans
routes.get('/plans', PlanController.index)

// Rotas Prices
routes.get('/prices', PriceController.index)

module.exports = routes