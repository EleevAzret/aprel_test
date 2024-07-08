<script lang="ts" setup>
import type { Movie } from '@/models/movies/interfaces'

const props = defineProps<{
  movie: Movie
}>()

interface InfoItem {
  name: string
  value?: string | number
  icon?: string
}

const infoItems = computed<InfoItem[]>(() => ([
  {
    name: 'Оценки:',
    value: props.movie.rating?.imdb || props.movie.rating?.kp,
    icon: 'star',
  },
  {
    name: 'Год:',
    value: props.movie?.year,
  },
  {
    name: 'Продолжительность:',
    value: props.movie?.movieLength ? `${props.movie?.movieLength} мин.` : undefined,
  },
  {
    name: 'Жанры:',
    value: props.movie?.genres ? props.movie.genres.join(', ') : undefined,
  },
]))
</script>

<template lang="pug">
.detail-movie-container
  div
    img.detail-movie-img(
      :src="movie.poster"
    )
  .detail-movie-info-block
    h1.detail-movie-title {{ movie.name }}
    h2.detail-movie-subtitle {{ movie.description }}
    template(
      v-for="(item, idx) in infoItems"
      :key="idx"
    )
      .detail-movie-info-item(
        v-if="item.value"
      )
        span.detail-movie-info-item.detail-movie-info-item__secondary {{ item.name }}
        div.d-flex.align-center.ga-2
          v-icon(v-if="item.icon") {{ item.icon }}
          span {{ item.value }}
</template>
