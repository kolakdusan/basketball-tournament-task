const { getTeamStats } = require('../teamStats/teamStats')

function sortByGroupPoints(teams) {
  teams.sort((team1, team2) => {
    const team1Stats = getTeamStats(team1.ISOCode)
    const team2Stats = getTeamStats(team2.ISOCode)

    if (team1Stats.points !== team2Stats.points) {
      return team2Stats.points - team1Stats.points
    }

    return 0
  })
}

module.exports = sortByGroupPoints
