const { getTeamStats, setTeamStats } = require('./teamStats')

function updateTeamStatsForm(team, formChange) {
  const teamStats = getTeamStats(team)
  const updatedTeamForm = teamStats.form + formChange
  setTeamStats(team, { ...teamStats, form: updatedTeamForm })
}

module.exports = updateTeamStatsForm
