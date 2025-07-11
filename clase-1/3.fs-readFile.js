const fs = require('node:fs')

console.log('Leyendo el primer archivo...')
fs.readFile('./archivo.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo:', err)
    return
  }
  console.log(data)
})

console.log('Hacer cosas mentras lee el archivo...')

console.log('Leyendo el segundo archivo...')
fs.readFile('./archivo2.txt', 'utf-8', (err, data) => {
  if (err) {
    console.error('Error al leer el archivo:', err)
    return
  }
  console.log(data)
})
