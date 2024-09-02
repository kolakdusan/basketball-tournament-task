const { printMatchPhase, printMedals } = require('./printKnockoutPhaseUtils')

function printKnockoutPhase(
  quarterfinalResults,
  semifinalResults,
  thirdPlaceResults,
  finalMatchResults,
  goldMedal,
  silverMedal,
  bronzeMedal
) {
  printMatchPhase(quarterfinalResults, 'Četvrtfinale')
  printMatchPhase(semifinalResults, 'Polufinale')
  printMatchPhase(thirdPlaceResults, 'Utakmica za treće mesto')
  printMatchPhase(finalMatchResults, 'Finale')
  printMedals(goldMedal, silverMedal, bronzeMedal)
}

module.exports = printKnockoutPhase
