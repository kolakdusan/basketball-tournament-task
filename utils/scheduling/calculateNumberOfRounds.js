function calculateNumberOfRounds(groupPhaseMatches) {
  if (groupPhaseMatches.size === 0) {
    return 0
  }
  const firstGroupRounds = [...groupPhaseMatches.values()][0]
  return firstGroupRounds.length
}

module.exports = calculateNumberOfRounds
