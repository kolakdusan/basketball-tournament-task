const generateRounds = require('../../utils/scheduling/generateRounds')

function generateGroupPhaseMatches(groupsData) {
  const groupPhaseMatches = new Map()

  // Rounds predstavljaju kola
  Object.entries(groupsData).forEach(([group, teams]) => {
    const rounds = generateRounds(teams)
    groupPhaseMatches.set(group, rounds)
  })

  return groupPhaseMatches
}

module.exports = generateGroupPhaseMatches
