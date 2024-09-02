const simulateGroupPhase = require('./core/groupPhase/simulateGroupPhase')
const simulateDrawPhase = require('./core/drawPhase/simulateDrawPhase')
const simulateKnockoutPhase = require('./core/knockoutPhase/simulateKnockoutPhase')

simulateTournament()

function simulateTournament() {
  const rankedTeams = simulateGroupPhase()
  const knockoutDraw = simulateDrawPhase(rankedTeams)
  simulateKnockoutPhase(knockoutDraw)
}
