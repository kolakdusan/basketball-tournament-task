function printPots(pots) {
  console.log('Šeširi:')
  Object.entries(pots).forEach(([potCode, pot]) => {
    console.log(`\tŠešir: ${potCode}:`)
    pot.forEach((team) => {
      console.log(`\t\t${team.Team}`)
    })
  })
  console.log()
}

function printKnockoutPhase(knockoutPhase) {
  console.log('Eliminaciona faza:')

  for (const [bracketName, brackets] of Object.entries(knockoutPhase)) {
    for (const bracket of brackets) {
      for (const match of bracket) {
        const matchString = match.map((team) => team.Team).join(' - ')
        console.log(`\t${matchString}`)
      }
      console.log()
    }
  }
}

module.exports = { printPots, printKnockoutPhase }
