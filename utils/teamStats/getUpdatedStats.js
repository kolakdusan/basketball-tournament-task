const { victoryPoints, defeatPoints, forfeitPoints } = require('../config')

function getUpdatedStats({
  stats,
  isWinner,
  isForfeited,
  scoredPoints,
  concededPoints,
  formChange,
}) {
  const updatedStats = { ...stats }

  updatedStats.scoredPoints += scoredPoints
  updatedStats.concededPoints += concededPoints
  updatedStats.scoreDifference += scoredPoints - concededPoints
  updatedStats.form += formChange

  if (isWinner) {
    updatedStats.wins++
    updatedStats.points += victoryPoints
  } else {
    updatedStats.losses++
    updatedStats.points += isForfeited ? forfeitPoints : defeatPoints
  }

  return updatedStats
}

module.exports = getUpdatedStats
