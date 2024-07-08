<script lang="ts" setup>
import MovieCard from './MovieCard.vue'
import type { Movie } from '@/models/movies/interfaces'

defineProps<{
  movies: Movie[]
}>()
</script>

<template lang="pug">
.movie-card-container
  movie-card(
    v-for="(movie, idx) in movies"
    :key="idx"
    :movie="movie"
  )
</template>
