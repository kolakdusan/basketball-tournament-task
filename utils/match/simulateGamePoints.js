const {
  getNormalRandom,
  calculateScalingFactor,
  calculateScoreDifference,
  adjustScores,
} = require('./scoreHelpers')

function simulateGamePoints(
  winner,
  loser,
  baselineScore = 80,
  maxScoreDiff = 20,
  sigma = 5
) {
  const winnerRanking = winner.FIBARanking
  const loserRanking = loser.FIBARanking

  const rankingDifference = Math.abs(winnerRanking - loserRanking)

  const scalingFactor = calculateScalingFactor(rankingDifference)
  const scoreDifference = calculateScoreDifference(scalingFactor, maxScoreDiff)
  const adjustedBaseline = baselineScore + getNormalRandom() * (sigma / 2)

  const { winnerScore, loserScore } = adjustScores(
    adjustedBaseline,
    scoreDifference,
    sigma,
    winnerRanking,
    loserRanking
  )

  return { scoreA: winnerScore, scoreB: loserScore }
}

module.exports = simulateGamePoints
