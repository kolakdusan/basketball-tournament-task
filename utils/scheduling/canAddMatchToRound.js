function canAddMatchToRound(match, teamsPlayedInRound) {
  const [team1, team2] = match
  return (
    !teamsPlayedInRound.has(team1.ISOCode) &&
    !teamsPlayedInRound.has(team2.ISOCode)
  )
}

module.exports = canAddMatchToRound
