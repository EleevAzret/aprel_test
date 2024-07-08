<script lang="ts" setup>
import type { Movie } from '@/models/movies/interfaces'

const { push } = useRouter()

defineProps<{
  movie: Movie
}>()
</script>

<template lang="pug">
.movies-list-item(
  @click="push(`/${movie.id}`)"
)
  img.movies-list-item-avatar(
    :src="movie.poster"
  )
  .movies-list-item-content
    .movies-list-item-title {{ movie.name }}
    .movies-list-item-subtitle
      v-icon.mr-1(
        fill
        size="16"
      ) star
      span {{ movie.rating?.imdb }}
      span.px-2 |
      span {{ movie.year }}
</template>
