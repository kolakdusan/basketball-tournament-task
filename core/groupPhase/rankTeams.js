const createPlacementGroups = require('./createPlacementGroups')
const compareTeams = require('./compareTeams')
const rankPlacementGroups = require('./rankPlacementGroups')

function rankTeams(groupsData) {
  const placementGroups = createPlacementGroups(groupsData)

  placementGroups.forEach((placementGroup) => {
    placementGroup.sort(compareTeams)
  })

  const rankedTeams = rankPlacementGroups(placementGroups)

  return rankedTeams
}

module.exports = rankTeams
