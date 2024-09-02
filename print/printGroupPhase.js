const {
  printGroupPhaseMatches,
  printGroups,
  printRankedTeams,
} = require('./printGroupPhaseUtils')

function printGroupPhase(detailedRoundResults, groupsData, rankedTeams) {
  printGroupPhaseMatches(detailedRoundResults)
  printGroups(groupsData)
  printRankedTeams(rankedTeams)
}

module.exports = printGroupPhase
