const plans = require('../data/plans.json')

module.exports = {
  validarRegistroPlano(registro) {
    let planosValidos = []
    
    // Cria um array com todos os registros de plano cadastrados no json
    plans.forEach((plan) => {
      planosValidos.push(plan.registro)
    })

    // Verifica se o registro passado bate com algum do array
    if ((planosValidos.find((plan) => plan === registro)) === undefined) {
      return false
    }

    return true
  }
}