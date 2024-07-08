<script lang="ts" setup>
import { debounce } from 'lodash'

const moviesStore = useMoviesStore()

const listView = defineModel<boolean>()
const searchValue = ref<string>()

const debouncedSearch = debounce(searchMovies, 600)

watch(searchValue, debouncedSearch)

function searchMovies() {
  moviesStore.searchMovies(searchValue.value)
}
</script>

<template lang="pug">
header.header
  v-container.header-content
    v-input(
      v-model="searchValue"
      type="text"
      placeholder="Поиск"
    )
      template(v-slot:prepend)
        v-icon search

    v-btn(
      icon
      @click="listView = !listView"
    )
      v-icon {{ listView ? 'grid_view' : 'list' }}
</template>
