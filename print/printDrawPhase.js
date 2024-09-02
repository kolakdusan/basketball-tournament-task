const { printPots, printKnockoutPhase } = require('./printDrawPhaseUtils')

function printDrawPhase(pots, knockoutDraw) {
  printPots(pots)
  printKnockoutPhase(knockoutDraw)
}

module.exports = printDrawPhase
