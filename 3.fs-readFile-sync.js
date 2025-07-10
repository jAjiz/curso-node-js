const fs = require('node:fs')

console.log('Leyendo el primer archivo...')
const firstText = fs.readFileSync('./archivo.txt', 'utf-8')
console.log('primer texto: ', firstText)

console.log('Hacer cosas mentras lee el archivo...')

console.log('Leyendo el segundo archivo...')
const secondText = fs.readFileSync('./archivo2.txt', 'utf-8')
console.log('segundo texto: ', secondText)
