<script lang="ts" setup>
import DetailMovieCard from '@/components/movies/DetailMovieCard.vue'

definePageMeta({
  layout: 'movie-detail',
})

const moviesStore = useMoviesStore()

const route = useRoute()

onMounted(() => {
  if (!moviesStore.topMovies?.items) moviesStore.getTopMovies()
})

watch(
  () => route.params.id,
  (id) => {
    if (typeof id !== 'string') return
    moviesStore.setMovieId(id)
  },
  { immediate: true },
)
</script>

<template lang="pug">
v-container
  detail-movie-card(
    v-if="moviesStore.getMovieById"
    :movie="moviesStore.getMovieById"
  )
</template>
