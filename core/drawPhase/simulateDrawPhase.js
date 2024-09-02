const printDrawPhase = require('../../print/printDrawPhase')

const createPots = require('./createPots')
const generateMixedPots = require('./generateMixedPots')
const generateKnockoutDraw = require('./generateKnockoutDraw')

function simulateDrawPhase(rankedTeams) {
  const pots = createPots(rankedTeams)
  const mixedPots = generateMixedPots(pots)
  const knockoutDraw = generateKnockoutDraw(mixedPots)

  printDrawPhase(pots, knockoutDraw)

  return knockoutDraw
}

module.exports = simulateDrawPhase
