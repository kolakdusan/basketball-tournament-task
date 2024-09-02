function parseResult(result) {
  const [scoreA, scoreB] = result.split('-').map(Number)
  return { scoreA, scoreB }
}

module.exports = parseResult
