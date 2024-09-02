const simulateGamePoints = require('./simulateGamePoints')
const simulateForfeit = require('./simulateForfeit')
const calculateWinProbability = require('../teamStats/calculateWinProbability')
const { calculateFormChanges } = require('./calculateFormChanges')

const updateTeamStats = require('../teamStats/updateStats')

function simulateMatch(team1, team2) {
  const forfeitResult = simulateForfeit(team1, team2)
  if (forfeitResult) {
    updateTeamStats(forfeitResult)
    return forfeitResult
  }

  const team1WinProbability = calculateWinProbability(team1, team2)

  const winner = Math.random() < team1WinProbability ? team1 : team2
  const loser = winner === team1 ? team2 : team1

  const { scoreA: winnerScore, scoreB: loserScore } = simulateGamePoints(
    winner,
    loser
  )

  const { winnerFormChange, loserFormChange } = calculateFormChanges(
    winner,
    loser
  )

  const matchResult = {
    winner,
    loser,
    isForfeited: false,
    winnerScore,
    loserScore,
    winnerFormChange,
    loserFormChange,
  }

  updateTeamStats(matchResult)

  return matchResult
}

module.exports = simulateMatch
