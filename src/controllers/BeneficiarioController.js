const fs = require('fs')
const { v4: uuid } = require('uuid')
const PlanService = require('../services/PlanService')
let beneficiariosJson = require('../data/beneficiarios.json')

const beneficiariosFilesPath = './src/data/beneficiarios.json'

module.exports = {
  index (request, response) {
    return response.json(beneficiariosJson)
  },

  create (request, response) {
    const { beneficiarios, registro } = request.body

    // Valida se o registro do plano é válido
    if (!(PlanService.validarRegistroPlano(registro))) return response.status(400).json({ error: "Registro invalido" })

    const novoBeneficiario = { id: uuid(), qtd: beneficiarios.length(), beneficiarios, registro }

    beneficiariosJson.push(novoBeneficiario)

    fs.writeFileSync(beneficiariosFilesPath, JSON.stringify(beneficiariosJson))

    return response.json(novoBeneficiario)
  },

  destroy (request, response) {
    const { id } = request.params

    const beneficiarioIndex = beneficiariosJson.findIndex((beneficiario) => beneficiario.id === id)

    if (beneficiarioIndex < 0) return response.status(404).json({ error: 'Beneficiario não encontrado' })

    beneficiariosJson.splice(beneficiarioIndex, 1)

    try {
      fs.writeFileSync(beneficiariosFilesPath, JSON.stringify(beneficiariosJson))
    }catch (error) {
      console.warn(error)
    }

    return response.status(200).send()
  }
}