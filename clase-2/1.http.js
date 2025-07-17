const http = require('node:http')
const fs = require('node:fs')

const desiredPort = process.argv[2] ?? 0

const processRequest = (req, res) => {
  res.setHeader('Content-Type', 'text/html; charset=utf-8')

  if (req.url === '/') {
    res.end('Bienvenido a mi página de inicio')
  } else if (req.url === '/imagen') {
    fs.readFile('./clase-2/imagen.png', (err, data) => {
      if (err) {
        res.statusCode = 500
        console.log('Error al leer el archivo de imagen:', err)
        res.end('Internal Server Error')
      } else {
        res.setHeader('Content-Type', 'image/png')
        res.end(data)
      }
    })
  } else if (req.url === '/contacto') {
    res.end('Contacto')
  } else {
    res.statusCode = 404
    res.end('Página no encontrada')
  }
}

const server = http.createServer(processRequest)

server.listen(desiredPort, () => {
  console.log(`Server is running on port http://localhost:${server.address().port}`)
})
