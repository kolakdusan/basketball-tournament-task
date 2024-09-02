const { forfeitCoefficient, formAdjustmentCoefficient } = require('../config')

// According to official rules, winner in a match concluded with a forfeit receives 20 points.
function createForfeitResult(winner, loser) {
  return {
    winner,
    loser,
    isForfeited: true,
    winnerScore: 20,
    loserScore: 0,
    winnerFormChange: formAdjustmentCoefficient,
    loserFormChange: -formAdjustmentCoefficient,
  }
}

function isForfeited() {
  return Math.random() < forfeitCoefficient
}

function simulateForfeit(team1, team2) {
  const isTeam1Forfeited = isForfeited()
  if (isTeam1Forfeited) {
    return createForfeitResult(team2, team1)
  }

  const isTeam2Forfeited = isForfeited()
  if (isTeam2Forfeited) {
    return createForfeitResult(team1, team2)
  }

  return null
}

module.exports = simulateForfeit
