const net = require('net')

function getAvailablePort (desiredPort) {
  return new Promise((resolve, reject) => {
    const server = net.createServer()

    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        getAvailablePort(0).then(port => resolve(port))
      } else {
        reject(err)
      }
    })

    server.listen(desiredPort, () => {
      const port = server.address().port
      server.close(() => resolve(port))
    })
  })
}

module.exports = { getAvailablePort }
