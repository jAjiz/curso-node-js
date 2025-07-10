// argumentos de entrada
console.log(process.argv)

// controlar el proceso y su salida
// process.exit(0)

// podemos controlar eventos del proceso
process.on('exit', (code) => {
  console.log(`El proceso terminó con el código: ${code}`)
})

// current working directory
console.log(process.cwd())

// platform
console.log(process.env.PEPITO)
