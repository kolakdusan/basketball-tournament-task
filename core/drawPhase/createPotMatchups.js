const { getMatchStats } = require('../../utils/matchStats/matchStats')

function createPotMatchups(potA, potB, matchups, matchupCode) {
  for (let index = 0; index < potA.length; index++) {
    const teamPotA = potA[index]
    const teamPotB = potB[index]

    const { matches } = getMatchStats(teamPotA.ISOCode)

    if (matches.has(teamPotB.ISOCode)) {
      ;[potB[0], potB[1]] = [potB[1], potB[0]]
    }
  }

  for (let index = 0; index < potA.length; index++) {
    matchups[matchupCode].push([potA[index], potB[index]])
  }
}

module.exports = createPotMatchups
