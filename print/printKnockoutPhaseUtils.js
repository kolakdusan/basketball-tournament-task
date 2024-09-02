function printMedals(goldMedal, silverMedal, bronzeMedal) {
  console.log()
  console.log('Medalje:')
  console.log(`\t1. ${goldMedal.Team}`)
  console.log(`\t2. ${silverMedal.Team}`)
  console.log(`\t3. ${bronzeMedal.Team}`)
  console.log()
}

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
      `\t${winner.Team} - ${loser.Team} (${winnerScore}:${loserScore}) - Forfeit`
    )
  } else {
    console.log(
      `\t${winner.Team} - ${loser.Team} (${winnerScore}:${loserScore})`
    )
  }
}

module.exports = { printMatchPhase, printMedals }
