function addMatchToRound(match, teamsPlayedInRound, round) {
  const [team1, team2] = match
  round.push([team1, team2])
  teamsPlayedInRound.add(team1.ISOCode)
  teamsPlayedInRound.add(team2.ISOCode)
}

module.exports = addMatchToRound
