const express = require('express')
const diitoJSON = require('./pokemon/ditto.json')

const PORT = process.env.PORT ?? 1234

const app = express()
app.disable('x-powered-by')

app.use(express.json())

// app.use((req, res, next) => {
//   if (req.method !== 'POST') return next()
//   if (req.headers['content-type'] !== 'application/json') return next()

//   req.body = ''
//   req.on('data', chunk => { req.body += chunk.toString() })
//   req.on('end', () => {
//     const data = JSON.parse(req.body)
//     data.timestamp = Date.now()
//     req.body = data
//     next()
//   })
// })

app.get('/pokemon/diito', (req, res) => {
  res.json(diitoJSON)
})

app.post('/pokemon', (req, res) => {
  res.status(201).json(req.body)
})

app.use((req, res) => {
  res.status(404).send('<h1>404</h1>')
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
