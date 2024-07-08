import { Movie } from '@/models/movies/interfaces'
import type { ResponseData } from '@/types/api'

type ResponseMoviesData = ResponseData<Movie>

export const useMoviesStore = defineStore('movies', () => {
  const limit = 126
  const perPage = 21

  const topMovies = ref<ResponseMoviesData>()
  const searchResults = ref<Movie[]>()
  const page = ref<number>(1)
  const movieId = ref<number>()

  const canPaginate = computed<boolean>(() => {
    return !!searchResults.value
      && searchResults.value.length > perPage
      && searchResults.value.length / perPage > page.value
  })

  const moviesListWithPagination = computed<Movie[] | undefined>(() => {
    if (!canPaginate.value || !searchResults.value) return searchResults.value

    const pageIdentifier: number = page.value - 1
    return searchResults.value.slice(pageIdentifier, perPage * page.value)
  })

  const getMovieById = computed<Movie | undefined>(() => {
    if (!topMovies.value?.items) return undefined
    return topMovies.value?.items.find((item) => item.id === movieId.value)
  })

  async function getTopMovies() {
    try {
      const response = await useApiFetch().get('movie', {
        params: {
          field: 'rating.imdb',
          sortField: 'votes.imdb',
          search: 1,
          sortType: -1,
          limit,
        },
        transformResponse(data: string): ResponseMoviesData {
          const parsedData: ResponseMoviesData = JSON.parse(data)
          return {
            items: parsedData.docs?.map?.((item) => new Movie(item)),
            page: parsedData.page,
            pages: parsedData.pages,
            total: parsedData.total,
          }
        },
      }) as ResponseMoviesData

      topMovies.value = response
      searchResults.value = response.items
      resetPage()
    } catch (e) {
      console.info(e)
    }
  }

  function searchMovies(query: string | undefined) {
    if (!topMovies.value?.items) return
    if (!query) {
      searchResults.value = topMovies.value.items
      return
    }
    resetPage()
    const lowerQuery = query.toLowerCase()

    searchResults.value = topMovies.value.items.filter((movie) => {
      return (
        (movie.name && movie.name.toLowerCase().includes(lowerQuery))
        || (movie.genres && movie.genres.some((gen) => gen.toLowerCase() === lowerQuery))
        || (movie.description && movie.description.toLowerCase().includes(lowerQuery))
        || (movie.year && movie.year.toString().includes(lowerQuery))
        || (movie.rating?.imdb && movie.rating.imdb.toString().includes(lowerQuery))
        || (movie.rating?.kp && movie.rating.kp.toString().includes(lowerQuery))
        || (movie.persons && movie.persons.some((person) => person.name && person.name.toLowerCase().includes(lowerQuery)))
        || (movie.budget?.value && movie.budget.value.toString().includes(lowerQuery))
        || (movie.budget?.currency && movie.budget.currency.toLowerCase().includes(lowerQuery))
      )
    })
  }

  function setMovieId(id: string | number | undefined) {
    if (!id) return
    movieId.value = Number(id)
  }

  function incrementPage() {
    page.value += 1
  }

  function resetPage() {
    page.value = 1
  }

  return {
    topMovies,
    searchResults,
    moviesListWithPagination,
    canPaginate,
    getMovieById,
    movieId,
    getTopMovies,
    searchMovies,
    setMovieId,
    incrementPage,
    resetPage,
  }
})
