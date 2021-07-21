const plans = require('../data/plans.json')

module.exports = {
  index(request, response) {
    return response.json(plans)
  }
}