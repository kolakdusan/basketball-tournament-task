const canAddMatchToRound = require('./canAddMatchToRound')
const addMatchToRound = require('./addMatchToRound')

function createRound(matchQueue, teams) {
  const round = []
  const teamsPlayedInRound = new Set()
  let matchesToAdd = teams.length / 2

  while (matchesToAdd > 0 && !matchQueue.empty()) {
    const match = matchQueue.dequeue()
    if (canAddMatchToRound(match, teamsPlayedInRound)) {
      addMatchToRound(match, teamsPlayedInRound, round)
      matchesToAdd--
    } else {
      matchQueue.enqueue(match)
    }
  }

  return round
}

module.exports = createRound
