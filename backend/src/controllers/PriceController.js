const prices = require('../data/prices.json')

module.exports = {
  index(request, response) {
    return response.json(prices)
  }
}