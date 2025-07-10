const { readFile } = require('node:fs/promises');

// IIFE (Immediately Invoked Function Expression)
(
  async () => {
    console.log('Leyendo el primer archivo...')
    const firstText = await readFile('./archivo.txt', 'utf-8')
    console.log('primer texto: ', firstText)

    console.log('Hacer cosas mentras lee el archivo...')

    console.log('Leyendo el segundo archivo...')
    const secondText = await readFile('./archivo2.txt', 'utf-8')
    console.log('segundo texto: ', secondText)
  }
)()
