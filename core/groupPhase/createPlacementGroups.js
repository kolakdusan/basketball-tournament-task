function createPlacementGroups(groupsData) {
  const initialGroupPlacements = Array.from({ length: 3 }, () => [])
  const groupCutoffIndex = 3

  Object.entries(groupsData).forEach(([group, teams]) => {
    teams.forEach((team, index) => {
      if (index < groupCutoffIndex) {
        initialGroupPlacements[index].push(team)
      }
    })
  })

  return initialGroupPlacements
}

module.exports = createPlacementGroups
