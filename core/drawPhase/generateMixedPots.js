const createPotMatchups = require('./createPotMatchups')
const shuffleArray = require('../../utils/helpers/shuffleArray')

function generateMixedPots(pots) {
  const shuffledPots = {
    D: shuffleArray([...pots.D]),
    G: shuffleArray([...pots.G]),
    E: shuffleArray([...pots.E]),
    F: shuffleArray([...pots.F]),
  }

  const mixedPots = {
    DG: [],
    EF: [],
  }

  createPotMatchups(shuffledPots.D, shuffledPots.G, mixedPots, 'DG')
  createPotMatchups(shuffledPots.E, shuffledPots.F, mixedPots, 'EF')

  return mixedPots
}

module.exports = generateMixedPots
