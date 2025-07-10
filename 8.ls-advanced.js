const fs = require('node:fs/promises')
const path = require('node:path')
const pc = require('picocolors')

const folder = process.argv[2] ?? '.'

async function ls (folder) {
  let files
  try {
    files = await fs.readdir(folder)
  } catch {
    console.error(pc.red(`Error reading directory ${folder}`))
    process.exit(1)
  }

  const filePromises = files.map(async file => {
    const filePath = path.join(folder, file)

    let stats
    try {
      stats = await fs.stat(filePath)
    } catch {
      console.error(pc.red(`Error getting stats for file ${filePath}`))
      process.exit(1)
    }

    const fileType = stats.isDirectory() ? 'd' : 'f'
    const fileSize = stats.size.toString()
    const fileModified = stats.mtime.toLocaleString()

    return `${pc.white(fileType)} ${pc.blue(file.padEnd(30))} ${pc.green(fileSize.padStart(10))} ${pc.yellow(fileModified)}`
  })

  const fileInfos = await Promise.all(filePromises)
  fileInfos.forEach(info => console.log(info))
}

ls(folder)
