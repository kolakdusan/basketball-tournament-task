const { getMatchStats } = require('../matchStats/matchStats')

function calculatePointDifference(team1, team2) {
  const { matches } = getMatchStats(team1.ISOCode)
  const result = matches.get(team2.ISOCode)

  if (result.winner.ISOCode === team1.ISOCode) {
    return result.winnerScore - result.loserScore
  } else {
    return result.loserScore - result.winnerScore
  }
}

function sortTiedTeamsByPointDifference(tiedTeams) {
  const n = tiedTeams.length

  tiedTeams.forEach((team) => {
    team.pointDifference = 0
  })

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (i !== j) {
        const team1 = tiedTeams[i]
        const team2 = tiedTeams[j]

        const pointDifference = calculatePointDifference(team1, team2)
        team1.pointDifference += pointDifference
        team2.pointDifference -= pointDifference
      }
    }
  }

  tiedTeams.sort(
    (team1, team2) => team2.pointDifference - team1.pointDifference
  )
}

module.exports = sortTiedTeamsByPointDifference
