function createUniqueMatchups(potA, potB, matchups, matchupCode) {
  for (let index = 0; index < potA.length; index++) {
    matchups[matchupCode].push([potA[index], potB[index]])
  }
}

module.exports = createUniqueMatchups
