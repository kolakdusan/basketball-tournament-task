const { getTeamStats } = require('../utils/teamStats/teamStats')

function printMatchPhase(matches, matchPhase) {
  console.log(`${matchPhase}:`)

  matches.forEach((match) => {
    printMatchResult(match)
  })

  console.log()
}

function printMatchResult({ winner, loser, winnerScore, loserScore }) {
  if (
    !winner ||
    !loser ||
    winnerScore === undefined ||
    loserScore === undefined
  ) {
    console.error('Error in match simulation:', {
      winner,
      loser,
      winnerScore,
      loserScore,
    })
    return
  }

  if (loserScore === 0) {
    console.log(
      `\t\t${winner.Team} - ${loser.Team} (${winnerScore}:${loserScore}) - Forfeit`
    )
  } else {
    console.log(
      `\t\t${winner.Team} - ${loser.Team} (${winnerScore}:${loserScore})`
    )
  }
}

function printGroupPhaseMatches(results) {
  results.forEach(({ round, groups }) => {
    console.log(`Grupna faza - ${round}. kolo:`)
    groups.forEach(({ group, matches }) => {
      printMatchPhase(matches, `\tGrupa ${group}`)

      // console.log(`\tGrupa ${group}:`)
      // matches.forEach(({ winner, loser, winnerScore, loserScore }) => {
      //   console.log(
      //     `\t\t${winner.Team} - ${loser.Team} (${winnerScore}:${loserScore})`
      //   )
      // })
    })
    console.log('\n')
  })
}

function printGroups(groupsData) {
  console.log('Konačan plasman u grupama:')
  for (let [group, teams] of Object.entries(groupsData)) {
    console.log(
      `\tGrupa ${group} (Ime - pobede/porazi/bodovi/postignuti koševi/primljeni koševi/koš razlika):`
    )
    teams.forEach((team, index) => {
      const teamStat = getTeamStats(team.ISOCode)
      console.log(
        `\t\t${index + 1}. ${teamStat.Team}\t\t ${teamStat.wins} / ${
          teamStat.losses
        } / ${teamStat.points} / ${teamStat.scoredPoints} / ${
          teamStat.concededPoints
        } / ${teamStat.scoreDifference}`
      )
    })

    console.log('\n')
  }
}

function printRankedTeams(groupPhaseRankings) {
  console.log('Ekipe koje prolaze u eliminacionu fazu: ')
  groupPhaseRankings.forEach((team, index) => {
    console.log(`\t${index + 1}. ${team.Team}`)
  })
  console.log('\n')
}

module.exports = { printGroupPhaseMatches, printGroups, printRankedTeams }
