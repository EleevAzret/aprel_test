<script lang="ts" setup>
import MoviesListItem from './MoviesListItem.vue'
import type { Movie } from '@/models/movies/interfaces'

defineProps<{
  movies: Movie[]
}>()
</script>

<template lang="pug">
.movies-list-container
  movies-list-item(
    v-for="(movie, idx) in movies"
    :key="idx"
    :movie="movie"
  )
</template>
