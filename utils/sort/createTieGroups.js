const { getTeamStats } = require('../teamStats/teamStats')

function createTieGroups(teams) {
  const tiedTeams = []
  let currentGroup = [teams[0]]

  for (let i = 1; i < teams.length; i++) {
    const teamStats = getTeamStats(teams[i].ISOCode)
    const prevTeamStats = getTeamStats(teams[i - 1].ISOCode)

    if (teamStats.points === prevTeamStats.points) {
      currentGroup.push(teams[i])
    } else {
      if (currentGroup.length > 1) {
        tiedTeams.push(currentGroup)
      }
      currentGroup = [teams[i]]
    }
  }

  if (currentGroup.length > 1) {
    tiedTeams.push(currentGroup)
  }

  return tiedTeams
}

module.exports = createTieGroups
