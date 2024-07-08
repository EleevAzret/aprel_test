import type { Person } from '../persons/interfaces'

export interface MovieItem {
  id?: number
  name?: string
  year?: number
  description?: string
  rating?: {
    kp?: number
    imdb?: number
  }
  movieLength?: number
  logo?: {
    url?: string
  }
  poster?: {
    url?: string
  }
  persons?: Person[]
  budget?: {
    value?: number
    currency?: string
  }
  genres?: { name?: string }[]
}

export class Movie {
  id?: MovieItem['id']
  name?: MovieItem['name']
  year?: MovieItem['year']
  description?: MovieItem['description']
  rating?: MovieItem['rating']
  movieLength?: MovieItem['movieLength']
  logo?: string
  poster?: string
  persons?: MovieItem['persons']
  budget?: MovieItem['budget']
  genres?: string[]

  constructor(data: MovieItem) {
    this.id = data.id
    this.name = data.name
    this.year = data.year
    this.description = data.description
    this.rating = data.rating
      ? {
          kp: data.rating.kp,
          imdb: data.rating.imdb,
        }
      : undefined
    this.movieLength = data.movieLength
    this.logo = data.logo?.url
    this.poster = data.poster?.url
    this.persons = data.persons
    this.budget = data.budget
    this.genres = data.genres
      ? data.genres.map((gen) => gen.name).filter((gen) => gen !== undefined)
      : undefined
  }
}
