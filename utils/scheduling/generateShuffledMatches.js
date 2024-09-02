const generateMatchCombinations = require('./generateMatchCombinations')
const shuffleArray = require('../helpers/shuffleArray')

function generateShuffledMatches(teams) {
  const matchCombinations = generateMatchCombinations(teams)
  const shuffledMatches = shuffleArray(matchCombinations)
  return shuffledMatches
}

module.exports = generateShuffledMatches
