const express = require('express')
const BeneficiarioController = require('./controllers/BeneficiarioController')
const PropostaController = require('./controllers/PropostaController')

const routes = express.Router()

// Rotas Beneficiarios
routes.get('/beneficiarios', BeneficiarioController.index)
routes.post('/beneficiarios', BeneficiarioController.create)
routes.delete('/beneficiarios/:id', BeneficiarioController.destroy)

// Rotas Propostas
routes.get('/propostas/:id', PropostaController.gerarProposta)

module.exports = routes