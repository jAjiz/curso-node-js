import { platform, release, arch, cpus, freemem, totalmem, uptime } from 'node:os'

console.log('Información del sistema operativo:')
console.log('--------------------')

console.log('Nombre del sistema operativo:', platform())
console.log('Versión del sistema operativo:', release())
console.log('Arquitectura:', arch())
console.log('Número de núcleos:', cpus().length)
console.log('Memoria libre:', freemem() / 1024 / 1024, 'MB')
console.log('Memoria total:', totalmem() / 1024 / 1024, 'MB')
console.log('uptime:', uptime() / 60 / 60, 'horas')
