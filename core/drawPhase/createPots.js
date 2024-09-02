function createPots(rankedTeams) {
  const pots = {
    D: [],
    E: [],
    F: [],
    G: [],
  }

  const teamsPerPot = 2
  let currentTeamIndex = 0

  for (let team of rankedTeams) {
    const potKeys = Object.keys(pots)
    const potIndex = Math.floor(currentTeamIndex / teamsPerPot)

    if (potIndex < potKeys.length) {
      pots[potKeys[potIndex]].push(team)
      currentTeamIndex++
    } else {
      console.warn(`Not enough pots to distribute all teams.`)
      break
    }
  }

  return pots
}

module.exports = createPots
