const getMatchStatsModel = require('./getMatchStatsModel')

const matchStats = new Map()

function getMatchStats(ISOCode) {
  return matchStats.get(ISOCode)
}

function setMatchStats(ISOCode, stats) {
  if (!matchStats.has(ISOCode)) {
    throw new Error('Team does not exist.')
  }

  matchStats.set(ISOCode, { ...matchStats.get(ISOCode), ...stats })
}

function initMatchStats(groupsData) {
  Object.values(groupsData).forEach((group) => {
    group.forEach((team) => {
      matchStats.set(team.ISOCode, getMatchStatsModel(team))
    })
  })
}

function applyMatchResultsToMatchStats(rawMatchResults) {
  rawMatchResults.forEach((matchResult) => {
    const { winner, loser } = matchResult

    const currentWinnerMatchStats = getMatchStats(winner.ISOCode)
    const currentLoserMatchStats = getMatchStats(loser.ISOCode)

    const { matches: winnerMatches } = currentWinnerMatchStats
    const { matches: loserMatches } = currentLoserMatchStats

    winnerMatches.set(loser.ISOCode, matchResult)
    loserMatches.set(winner.ISOCode, matchResult)
  })
}

module.exports = {
  matchStats,
  initMatchStats,
  getMatchStats,
  setMatchStats,
  applyMatchResultsToMatchStats,
}
