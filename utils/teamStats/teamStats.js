const { getInitialStatsModel } = require('./teamUtils')

const teamStats = new Map()

function getTeamStats(ISOCode) {
  return teamStats.get(ISOCode)
}

function setTeamStats(ISOCode, stats) {
  if (!teamStats.has(ISOCode)) {
    throw new Error('Team does not exist.')
  }

  teamStats.set(ISOCode, { ...teamStats.get(ISOCode), ...stats })
}

function initTeamStats(groupsData) {
  Object.values(groupsData).forEach((group) => {
    group.forEach((team) => {
      teamStats.set(team.ISOCode, getInitialStatsModel(team))
    })
  })
}

module.exports = {
  teamStats,
  initTeamStats,
  getTeamStats,
  setTeamStats,
}
