const { getTeamStats } = require('../../utils/teamStats/teamStats')

function compareTeams(teamA, teamB) {
  const teamAStats = getTeamStats(teamA.ISOCode)
  const teamBStats = getTeamStats(teamB.ISOCode)

  const pointsDifference = teamBStats.points - teamAStats.points
  if (pointsDifference !== 0) return pointsDifference

  const scoreDifference =
    teamBStats.scoreDifference - teamAStats.scoreDifference
  if (scoreDifference !== 0) return scoreDifference

  const scoredPointsDifference =
    teamBStats.scoredPoints - teamAStats.scoredPoints
  return scoredPointsDifference
}

module.exports = compareTeams
