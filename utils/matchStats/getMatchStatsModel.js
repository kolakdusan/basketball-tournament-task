function getMatchStatsModel(team) {
  return {
    ...team,
    matches: new Map(),
  }
}

module.exports = getMatchStatsModel
