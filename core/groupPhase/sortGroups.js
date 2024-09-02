const createTieGroups = require('../../utils/sort/createTieGroups')
const sortTiedTeamsByPointDifference = require('../../utils/sort/sortByPointDifference')
const sortTiedTeamsByHeadToHead = require('../../utils/sort/sortHeadToHead')
const sortByGroupPoints = require('../../utils/sort/sortByGroupPoints')

function sortGroups(groupsData) {
  Object.entries(groupsData).forEach(([group, teams]) => {
    sortByGroupPoints(teams)

    const tieGroups = createTieGroups(teams)
    const nonTiedTeams = teams.filter(
      (team) => !tieGroups.flat().includes(team)
    )

    if (nonTiedTeams.length !== teams.length) {
      const sortedTieGroups = tieGroups.map((tieGroup) => {
        if (tieGroup.length === 2) {
          sortTiedTeamsByHeadToHead(tieGroup)
        } else if (tieGroup.length > 2) {
          sortTiedTeamsByPointDifference(tieGroup)
        }
        return tieGroup
      })

      const sortedTeams = [...nonTiedTeams, ...sortedTieGroups.flat()]
      sortByGroupPoints(sortedTeams)
      groupsData[group] = sortedTeams
    }
  })
}

module.exports = sortGroups
