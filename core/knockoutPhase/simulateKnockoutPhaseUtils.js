const Queue = require('../../utils/helpers/queue')
const simulateMatch = require('../../utils/match/simulateMatch')

function simulateQuarterfinals(knockoutPhase) {
  const quarterfinalResults = []
  const semifinalMatches = []

  Object.entries(knockoutPhase).forEach(([bracketName, bracket]) => {
    bracket.forEach((matches) => {
      const winnerQueue = new Queue()
      matches.forEach((match) => {
        const [team1, team2] = match
        const { winner, loser, winnerScore, loserScore } = simulateMatch(
          team1,
          team2
        )
        winnerQueue.enqueue(winner)
        quarterfinalResults.push({ winner, loser, winnerScore, loserScore })
      })

      const newMatch = []
      while (!winnerQueue.empty()) {
        newMatch.push(winnerQueue.dequeue())
      }

      semifinalMatches.push(newMatch)
    })
  })

  return { semifinalMatches, quarterfinalResults }
}

function simulateSemifinals(semifinalMatches) {
  const semifinalResults = []
  const thirdPlaceMatch = []
  const finalMatch = []

  semifinalMatches.forEach((match) => {
    const [team1, team2] = match
    const { winner, loser, winnerScore, loserScore } = simulateMatch(
      team1,
      team2
    )
    semifinalResults.push({ winner, loser, winnerScore, loserScore })
    thirdPlaceMatch.push(loser)
    finalMatch.push(winner)
  })

  return { thirdPlaceMatch, finalMatch, semifinalResults }
}

function simulateThirdPlaceMatch(thirdPlaceMatch) {
  const thirdPlaceResults = []

  const [team1, team2] = thirdPlaceMatch
  const { winner, loser, winnerScore, loserScore } = simulateMatch(team1, team2)

  thirdPlaceResults.push({ winner, loser, winnerScore, loserScore })

  return { thirdPlaceResults, bronzeMedal: winner }
}

function simulateFinalMatch(finalMatch) {
  const finalMatchResults = []
  const [team1, team2] = finalMatch
  const { winner, loser, winnerScore, loserScore } = simulateMatch(team1, team2)

  finalMatchResults.push({ winner, loser, winnerScore, loserScore })

  return { finalMatchResults, goldMedal: winner, silverMedal: loser }
}

module.exports = {
  simulateQuarterfinals,
  simulateSemifinals,
  simulateThirdPlaceMatch,
  simulateFinalMatch,
}
