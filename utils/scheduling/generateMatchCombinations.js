// Returns every possible match in a group of teams
function generateMatchCombinations(teams) {
  const matchCombinations = []
  for (let i = 0; i < teams.length; i++) {
    for (let j = i + 1; j < teams.length; j++) {
      matchCombinations.push([teams[i], teams[j]])
    }
  }
  return matchCombinations
}

module.exports = generateMatchCombinations
