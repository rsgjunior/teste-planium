const beneficiariosJson = require('../data/beneficiarios.json')
const plansJson = require('../data/plans.json')
const pricesJson = require('../data/prices.json')

module.exports = {
  gerarProposta (request, response) {
    const { id } = request.params

    // Acha os dados do Beneficiario
    const beneficiario = beneficiariosJson.find((beneficiario) => beneficiario.id === id)
    // 
    const plan = plansJson.find((plan) => plan.registro === beneficiario.registro)

    let maxMinimoVidas = -1
    let indexPrice = -1
    pricesJson.forEach((price, index) => {
      if (price.codigo === plan.codigo && beneficiario.qtd >= price.minimo_vidas) {
        if (price.minimo_vidas > maxMinimoVidas) {
          indexPrice = index
          maxMinimoVidas = price.minimo_vidas
        }
      }
    })

    const price = pricesJson[indexPrice]

    return response.json(price)
  }
}