function rankPlacementGroups(placementGroups) {
  const rankedTeams = []

  let currentRank = 1
  const cutoffRank = 9

  placementGroups.forEach((placementGroup) => {
    placementGroup.forEach((team) => {
      if (currentRank < cutoffRank) {
        rankedTeams.push({ ...team, rank: currentRank })
        currentRank++
      }
    })
  })

  return rankedTeams
}

module.exports = rankPlacementGroups
