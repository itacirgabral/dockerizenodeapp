const http = require('http')

// Constants
const port = process.env.PORT
const host = process.env.HOST

// Mutants
let n = 0

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World' + n++);
})

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
})