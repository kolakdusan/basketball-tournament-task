const createUniqueMatchups = require('../../utils/scheduling/createUniqueMatchups')
const shuffleArray = require('../../utils/helpers/shuffleArray')

function generateKnockoutDraw(initialMatchups) {
  const shuffledInitialMatchups = {
    DG: shuffleArray([...initialMatchups['DG']]),
    EF: shuffleArray([...initialMatchups['EF']]),
  }

  const knockoutPhase = {
    'Left bracket': [],
    'Right bracket': [],
  }

  createUniqueMatchups(
    shuffledInitialMatchups.DG.slice(0, 1),
    shuffledInitialMatchups.EF.slice(0, 1),
    knockoutPhase,
    'Left bracket'
  )

  createUniqueMatchups(
    shuffledInitialMatchups.DG.slice(1),
    shuffledInitialMatchups.EF.slice(1),
    knockoutPhase,
    'Right bracket'
  )

  return knockoutPhase
}

module.exports = generateKnockoutDraw
