<script lang="ts" setup>
import type { Movie } from '@/models/movies/interfaces'

const { push } = useRouter()

defineProps<{
  movie: Movie
}>()
</script>

<template lang="pug">
.movie-card(
  @click="push(`/${movie.id}`)"
)
  img.movie-card-img(
    :src="movie.poster"
  )
  .movie-card-title {{ movie.name }}
  .movie-card-subtitle
    v-icon.mr-1(
      fill
      size="16"
    ) star
    span {{ movie.rating?.imdb }}
    span.px-2 |
    span {{ movie.year }}
</template>
