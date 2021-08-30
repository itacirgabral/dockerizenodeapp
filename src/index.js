const express = require('express')

// Constants
const port = process.env.PORT
const host = process.env.HOST

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

app.listen(port, host)
console.log(`Running on http://${host}:${port}`)