const z = require('zod')

const movieSchema = z.object({
  title: z.string({
    error: (issue) => issue.input === undefined
      ? 'Title is required'
      : 'Title is not a string'
  }),
  year: z.number().int().min(1900).max(2025),
  director: z.string(),
  duration: z.number().int().min(1),
  poster: z.url(),
  genre: z.array(
    z.enum(['Action', 'Adventure', 'Biography', 'Comedy', 'Crime', 'Drama', 'Horror', 'Sci-Fi', 'Romance'])
  ),
  rate: z.number().min(0).max(10).optional()
})

function validateMovie (object) {
  return movieSchema.safeParse(object)
}

function validatePartialMovie (object) {
  return movieSchema.partial().safeParse(object)
}

module.exports = {
  validateMovie,
  validatePartialMovie
}
