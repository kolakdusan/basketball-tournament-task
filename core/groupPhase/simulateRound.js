const simulateMatch = require('../../utils/match/simulateMatch')

function simulateRound(round) {
  return round.map((match) => {
    const [team1, team2] = match
    const simulation = simulateMatch(team1, team2)
    return simulation
  })
}

module.exports = simulateRound
