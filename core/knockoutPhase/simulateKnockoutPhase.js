const printKnockoutPhase = require('../../print/printKnockoutPhase')

const {
  simulateQuarterfinals,
  simulateSemifinals,
  simulateThirdPlaceMatch,
  simulateFinalMatch,
} = require('./simulateKnockoutPhaseUtils')

function simulateKnockoutPhase(knockoutPhase) {
  const { semifinalMatches, quarterfinalResults } =
    simulateQuarterfinals(knockoutPhase)

  const { thirdPlaceMatch, finalMatch, semifinalResults } =
    simulateSemifinals(semifinalMatches)

  const { thirdPlaceResults, bronzeMedal } =
    simulateThirdPlaceMatch(thirdPlaceMatch)

  const { finalMatchResults, goldMedal, silverMedal } =
    simulateFinalMatch(finalMatch)

  printKnockoutPhase(
    quarterfinalResults,
    semifinalResults,
    thirdPlaceResults,
    finalMatchResults,
    goldMedal,
    silverMedal,
    bronzeMedal
  )
}

module.exports = simulateKnockoutPhase
