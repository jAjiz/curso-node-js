const http = require('node:http')
const { getAvailablePort } = require('./10.free-port.js')

const desiredPort = process.argv[2] ?? 0

const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Hello World')
})

getAvailablePort(desiredPort).then(port => {
  server.listen(port, () => {
    console.log(`Server is running on port http://localhost:${server.address().port}`)
  })
}).catch(err => {
  console.error('Error starting server:', err)
})
