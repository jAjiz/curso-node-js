import { randomUUID } from 'node:crypto'
import { readJsonFile } from '../utils.js'

const moviesJSON = readJsonFile('./movies.json')

export class ModelMovie {
  static async getAll ({ genre }) {
    if (genre) {
      const filteredMovies = moviesJSON.filter(
        movie => movie.genre.some(g => g.toLowerCase() === genre.toLowerCase())
      )
      return filteredMovies
    } else {
      return moviesJSON
    }
  }

  static async getById ({ id }) {
    return moviesJSON.find(movie => movie.id === id)
  }

  static async create ({ movie }) {
    const newMovie = {
      id: randomUUID(),
      ...movie
    }

    moviesJSON.push(newMovie)
    return newMovie
  }

  static async update ({ id, movie }) {
    const movieIndex = moviesJSON.findIndex(m => m.id === id)
    if (movieIndex === -1) {
      return false
    }

    moviesJSON[movieIndex] = { ...moviesJSON[movieIndex], ...movie }
    return moviesJSON[movieIndex]
  }

  static async delete ({ id }) {
    const movieIndex = moviesJSON.findIndex(movie => movie.id === id)
    if (movieIndex === -1) {
      return false
    }
    moviesJSON.splice(movieIndex, 1)
    return true
  }
}
