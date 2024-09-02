const { logisticCoefficient } = require('../config')
const { getTeamStats } = require('./teamStats')

function calculateWinProbability(team1, team2) {
  const team1Ranking = team1.FIBARanking
  const team2Ranking = team2.FIBARanking

  const { form: team1Form } = getTeamStats(team1.ISOCode)
  const { form: team2Form } = getTeamStats(team2.ISOCode)

  let diff = team2Ranking - team1Ranking

  diff += team1Form
  diff -= team2Form

  return 1 / (1 + Math.pow(10, -logisticCoefficient * diff))
}

module.exports = calculateWinProbability
