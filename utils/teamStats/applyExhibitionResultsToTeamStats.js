const determineIsVictory = require('../match/determineIsVictory')
const parseResult = require('../match/parseResult')
const { getTeamStats } = require('./teamStats')
const {
  calculateFormChangeFromRankedOpponent,
  calculateFormChangeFromUnrankedOpponent,
} = require('../match/calculateFormChanges')
const updateTeamStatsForm = require('./updateTeamStatsForm')

function applyExhibitionResultsToTeamStats(exhibitionsData) {
  Object.entries(exhibitionsData).forEach(([team, exhibitions]) => {
    exhibitions.forEach((exhibition) => {
      const { Result: result, Opponent: opponent } = exhibition
      const { scoreA: teamScore, scoreB: opponentScore } = parseResult(result)
      const isVictory = determineIsVictory(teamScore, opponentScore)

      const teamStats = getTeamStats(team)
      const opponentStats = getTeamStats(opponent)

      let teamFormChange

      if (!opponentStats) {
        teamFormChange = calculateFormChangeFromUnrankedOpponent(isVictory)
      } else {
        teamFormChange = calculateFormChangeFromRankedOpponent(
          teamStats,
          opponentStats,
          isVictory
        )
      }

      updateTeamStatsForm(team, teamFormChange)
    })
  })
}

module.exports = applyExhibitionResultsToTeamStats
