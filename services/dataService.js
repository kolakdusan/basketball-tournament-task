const fs = require('fs')

function getData(filePath) {
  try {
    const data = fs.readFileSync(filePath, 'utf-8')
    return JSON.parse(data)
  } catch (error) {
    console.error(`Failed to parse JSON file at ${filePath}:`, error)
    throw error
  }
}

module.exports = {
  getData,
}
