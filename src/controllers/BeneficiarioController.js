let beneficiarios = require('../data/beneficiarios.json')
const fs = require('fs')

module.exports = {
  async index(request, response) {
    return response.json(beneficiarios)
  },

  async create(request, response) {
    
  }
}