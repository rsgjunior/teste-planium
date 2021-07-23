const beneficiariosJson = require('../data/beneficiarios.json')
const plansJson = require('../data/plans.json')
const pricesJson = require('../data/prices.json')
const propostasJson = require('../data/propostas.json')
const fs = require('fs')

const propostasFilePath = './src/data/propostas.json'

const identificarPrecoPlano = (objBeneficiarios) => {
  // Carrega os dados do plano do beneficiario
  const plan = plansJson.find(
    (plan) => plan.registro === objBeneficiarios.registro
  )

  let maxMinimoVidas = -1,
      indexPrice = -1
  // Loop passando por cada objeto do array para identificar o index do que se encaixa com o plano do beneficiario
  pricesJson.forEach((price, index) => {
    if (
      price.codigo === plan.codigo &&
      objBeneficiarios.qtd >= price.minimo_vidas &&
      price.minimo_vidas > maxMinimoVidas
    ) {
      indexPrice = index
      maxMinimoVidas = price.minimo_vidas
    }
  })

  return pricesJson[indexPrice]
}

const calcularProposta = (price, objBeneficiarios) => {
  objBeneficiarios.precoTotal = 0

  objBeneficiarios.beneficiarios.forEach((beneficiario) => {
    if (beneficiario.idade >= 0 && beneficiario.idade <= 17) {
      // Faixa 1
      beneficiario.preco = price.faixa1
      objBeneficiarios.precoTotal += price.faixa1
    } else if (beneficiario.idade >= 18 && beneficiario.idade <= 40) {
      // Faixa 2
      beneficiario.preco = price.faixa2
      objBeneficiarios.precoTotal += price.faixa2
    } else if (beneficiario.idade > 40) {
      // Faixa 3
      beneficiario.preco = price.faixa3
      objBeneficiarios.precoTotal += price.faixa3
    }
  })

  return objBeneficiarios
}

module.exports = {
  index(request, response) {
    return response.json(propostasJson)
  },

  show(request, response) {
    const { id } = request.params

    const objProposta = propostasJson.find((proposta) => proposta.id === id)

    if(!objProposta) return response.status(404).send()

    return response.json(objProposta)
  },

  gerarProposta(request, response) {
    const { id } = request.body

    const objBeneficiarios = beneficiariosJson.find(
      (beneficiario) => beneficiario.id === id
    )

    if(!objBeneficiarios) return response.status(404).send()

    const price = identificarPrecoPlano(objBeneficiarios)

    const objProposta = calcularProposta(price, objBeneficiarios)

    propostasJson.push(objProposta)

    fs.writeFileSync(propostasFilePath, JSON.stringify(propostasJson))

    return response.json(objProposta)
  }
}
