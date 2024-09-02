const Queue = require('../helpers/queue')
const generateShuffledMatches = require('./generateShuffledMatches')
const createRound = require('./createRound')

function generateRounds(teams) {
  const shuffledMatches = generateShuffledMatches(teams)
  const matchQueue = new Queue(shuffledMatches)
  const rounds = []

  while (!matchQueue.empty()) {
    rounds.push(createRound(matchQueue, teams))
  }

  return rounds
}

module.exports = generateRounds
