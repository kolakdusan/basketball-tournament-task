function getInitialStatsModel(team) {
  return {
    ...team,
    wins: 0,
    losses: 0,
    points: 0,
    scoredPoints: 0,
    concededPoints: 0,
    scoreDifference: 0,
    form: 0,
  }
}

module.exports = { getInitialStatsModel }
