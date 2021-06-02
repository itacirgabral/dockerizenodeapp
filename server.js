const express = require('express')

// Constants
const PORT = 8080
const HOST = '0.0.0.0'

// Mutants
let n = 0

// App
const app = express()

// Handler
const handler = function (req, res) {
  debugger
  const novoN = n + 1
  n = novoN
  res.send(`${n} Hello World`)
}

// Rounting
app.get('/', handler)

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)