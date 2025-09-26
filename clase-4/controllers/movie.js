import { ModelMovie } from '../models/movie.js'

import { validateMovie, validatePartialMovie } from '../schemas/movies.js'

export class MovieController {
  static async getAll (req, res) {
    const { genre } = req.query
    const movies = await ModelMovie.getAll({ genre })
    res.json(movies)
  }

  static async getById (req, res) {
    const { id } = req.params
    const movie = await ModelMovie.getById({ id })
    if (movie) return res.json(movie)
    res.status(404).json({ message: 'Movie not found' })
  }

  static async create (req, res) {
    const result = validateMovie(req.body)
    if (!result.success) {
      return res.status(400).json(JSON.parse(result.error))
    }
    const movie = await ModelMovie.create({ movie: result.data })
    res.status(201).json(movie)
  }

  static async update (req, res) {
    const result = validatePartialMovie(req.body)
    if (!result.success) {
      return res.status(400).json(JSON.parse(result.error))
    }

    const { id } = req.params
    const movie = await ModelMovie.update({ id, movie: result.data })
    if (movie === false) {
      return res.status(404).json({ message: 'Movie not found' })
    }

    res.json(movie)
  }

  static async delete (req, res) {
    const { id } = req.params
    const movie = await ModelMovie.delete({ id })
    if (movie === false) {
      return res.status(404).json({ message: 'Movie not found' })
    }
    res.status(204).send()
  }
}
