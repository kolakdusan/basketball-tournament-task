const calculateNumberOfRounds = require('../../utils/scheduling/calculateNumberOfRounds')
const simulateRound = require('./simulateRound')

function simulateGroupPhaseMatches(groupPhaseMatches) {
  const numberOfRounds = calculateNumberOfRounds(groupPhaseMatches)

  const detailedRoundResults = []
  const rawMatchResults = []

  for (let roundIndex = 0; roundIndex < numberOfRounds; roundIndex++) {
    const roundResults = {
      round: roundIndex + 1,
      groups: [],
    }

    for (let [group, rounds] of groupPhaseMatches) {
      const matches = simulateRound(rounds[roundIndex])
      roundResults.groups.push({ group, matches })
      rawMatchResults.push(...matches)
    }

    detailedRoundResults.push(roundResults)
  }

  return { detailedRoundResults, rawMatchResults }
}

module.exports = simulateGroupPhaseMatches
