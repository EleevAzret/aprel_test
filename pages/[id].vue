<script lang="ts" setup>
import DetailMovieCard from '@/components/movies/DetailMovieCard.vue'

definePageMeta({
  layout: 'movie-detail',
})

const moviesStore = useMoviesStore()

const route = useRoute()

onMounted(async () => {
  if (!moviesStore.topMovies?.items) {
    await useAsyncData('movies', () => moviesStore.getTopMovies().then(() => true))
  }
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
