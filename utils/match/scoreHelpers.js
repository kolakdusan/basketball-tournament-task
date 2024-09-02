function getNormalRandom() {
  let u, v

  do {
    u = Math.random()
  } while (u === 0)

  do {
    v = Math.random()
  } while (v === 0)

  return Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v)
}

function calculateScalingFactor(rankingDifference) {
  return Math.max(0, Math.min(1, 1 - rankingDifference / 100))
}

function calculateScoreDifference(scalingFactor, maxScoreDiff) {
  return (maxScoreDiff / 2) * scalingFactor
}

function calculateRandomFactors(sigma) {
  return {
    randomFactorWinner: getNormalRandom() * sigma,
    randomFactorLoser: getNormalRandom() * sigma,
  }
}

function adjustScoreForRanking(scoreDifference, winnerRanking, loserRanking) {
  if (winnerRanking > loserRanking) {
    return scoreDifference * 0.5
  }
  return scoreDifference
}

function ensureNonNegativeScores(winnerScore, loserScore, randomFactorWinner) {
  if (winnerScore <= loserScore) {
    winnerScore = loserScore + Math.abs(randomFactorWinner) + 1
  }
  return {
    winnerScore: Math.max(0, Math.round(winnerScore)),
    loserScore: Math.max(0, Math.round(loserScore)),
  }
}

function adjustScores(
  baseScore,
  scoreDifference,
  sigma,
  winnerRanking,
  loserRanking
) {
  const { randomFactorWinner, randomFactorLoser } =
    calculateRandomFactors(sigma)

  scoreDifference = adjustScoreForRanking(
    scoreDifference,
    winnerRanking,
    loserRanking
  )

  let winnerScore = baseScore + scoreDifference + randomFactorWinner
  let loserScore = baseScore - scoreDifference + randomFactorLoser

  return ensureNonNegativeScores(winnerScore, loserScore, randomFactorWinner)
}

module.exports = {
  getNormalRandom,
  calculateScalingFactor,
  calculateScoreDifference,
  adjustScores,
}
