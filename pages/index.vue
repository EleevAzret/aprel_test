<script lang="ts" setup>
import MovieCards from '@/components/movies/MovieCards.vue'
import MoviesList from '@/components/movies/MoviesList.vue'

const moviesStore = useMoviesStore()

await useAsyncData('movies', () => moviesStore.getTopMovies().then(() => true))

defineProps<{
  listView?: boolean
}>()
</script>

<template lang="pug">
v-container
  template(v-if="moviesStore.moviesListWithPagination")
    movies-list(
      v-if="listView"
      :movies="moviesStore.moviesListWithPagination"
    )
    movie-cards(
      v-else
      :movies="moviesStore.moviesListWithPagination"
    )

  .d-flex.justify-center.py-4(
    v-if="moviesStore.canPaginate"
  )
    v-btn.px-6.py-2(
      @click="moviesStore.incrementPage"
    ) Загрузить еще
</template>
