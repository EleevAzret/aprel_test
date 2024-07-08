<script lang="ts" setup>
import MainHeader from '@/components/common/MainHeader.vue'

const listView = ref<boolean>()
</script>

<template lang="pug">
.application
  main-header(
    v-model="listView"
  )
  main
    nuxt-page(
      :list-view="listView"
    )
</template>
