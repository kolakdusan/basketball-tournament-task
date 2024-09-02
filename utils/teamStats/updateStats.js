const { getTeamStats, setTeamStats } = require('./teamStats')
const getUpdatedStats = require('./getUpdatedStats')

function updateTeamStats({
  winner,
  loser,
  isForfeited,
  winnerScore,
  loserScore,
  winnerFormChange,
  loserFormChange,
}) {
  const winnerStats = getTeamStats(winner.ISOCode)
  const loserStats = getTeamStats(loser.ISOCode)

  if (winnerStats === null || loserStats === null) {
    throw new Error('One or both teams are not initialized.')
  }

  const updatedWinnerStats = getUpdatedStats({
    stats: winnerStats,
    isWinner: true,
    isForfeited: false,
    scoredPoints: winnerScore,
    concededPoints: loserScore,
    formChange: winnerFormChange,
  })

  const updatedLoserStats = getUpdatedStats({
    stats: loserStats,
    isWinner: false,
    isForfeited,
    scoredPoints: loserScore,
    concededPoints: winnerScore,
    formChange: loserFormChange,
  })

  setTeamStats(winner.ISOCode, updatedWinnerStats)
  setTeamStats(loser.ISOCode, updatedLoserStats)
}

module.exports = updateTeamStats
