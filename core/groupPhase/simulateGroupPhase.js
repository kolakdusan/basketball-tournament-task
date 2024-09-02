const printGroupPhase = require('../../print/printGroupPhase')
const initializeDataAndStats = require('./initializeDataAndStats')
const {
  initMatchStats,
  applyMatchResultsToMatchStats,
} = require('../../utils/matchStats/matchStats')

const generateGroupPhaseMatches = require('./generateGroupPhaseMatches')
const simulateGroupPhaseMatches = require('./simulateGroupPhaseMatches')
const sortGroups = require('./sortGroups')
const rankTeams = require('./rankTeams')

function simulateGroupPhase() {
  const groupsData = initializeDataAndStats()

  const groupPhaseMatches = generateGroupPhaseMatches(groupsData)
  const { detailedRoundResults, rawMatchResults } =
    simulateGroupPhaseMatches(groupPhaseMatches)

  initMatchStats(groupsData)
  applyMatchResultsToMatchStats(rawMatchResults)

  sortGroups(groupsData)
  const rankedTeams = rankTeams(groupsData)

  printGroupPhase(detailedRoundResults, groupsData, rankedTeams)

  return rankedTeams
}

module.exports = simulateGroupPhase
