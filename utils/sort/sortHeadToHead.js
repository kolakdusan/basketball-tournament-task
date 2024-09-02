const { getMatchStats } = require('../matchStats/matchStats')

function getHeadToHeadResult(team1, team2) {
  const { matches } = getMatchStats(team1.ISOCode)
  const { winner } = matches.get(team2.ISOCode)

  return team1 === winner ? -1 : 1
}

function sortTiedTeamsByHeadToHead(tiedTeams) {
  tiedTeams.sort((team1, team2) => getHeadToHeadResult(team1, team2))
}

module.exports = sortTiedTeamsByHeadToHead
