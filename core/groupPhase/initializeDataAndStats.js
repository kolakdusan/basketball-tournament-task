const { getData } = require('../../services/dataService')
const { initTeamStats } = require('../../utils/teamStats/teamStats')
const applyExhibitionResultsToTeamStats = require('../../utils/teamStats/applyExhibitionResultsToTeamStats')

function initializeDataAndStats() {
  const groupsData = getData('./groups.json')
  initTeamStats(groupsData)

  const exhibitionsData = getData('./exibitions.json')
  applyExhibitionResultsToTeamStats(exhibitionsData)

  return groupsData
}

module.exports = initializeDataAndStats
