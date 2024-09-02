const { formAdjustmentCoefficient } = require('../config')

// Calculates form changes while taking into consideration team FIBA rankings.
// If an underdog wins, he get an additional form point.
// If a favorite loses, he loses an additional form point.
function calculateFormChanges(winner, loser) {
  let winnerFormChange = formAdjustmentCoefficient
  let loserFormChange = -formAdjustmentCoefficient

  if (winner.FIBARanking > loser.FIBARanking) {
    winnerFormChange += formAdjustmentCoefficient
  }

  if (loser.FIBARanking < winner.FIBARanking) {
    loserFormChange -= formAdjustmentCoefficient
  }

  return { winnerFormChange, loserFormChange }
}

function calculateFormChangeFromUnrankedOpponent(isVictory) {
  return isVictory ? formAdjustmentCoefficient : -formAdjustmentCoefficient
}

function calculateFormChangeFromRankedOpponent(
  teamStats,
  opponentStats,
  isVictory
) {
  const formChanges = isVictory
    ? calculateFormChanges(teamStats, opponentStats)
    : calculateFormChanges(opponentStats, teamStats)

  return isVictory ? formChanges.winnerFormChange : formChanges.loserFormChange
}

module.exports = {
  calculateFormChanges,
  calculateFormChangeFromRankedOpponent,
  calculateFormChangeFromUnrankedOpponent,
}
