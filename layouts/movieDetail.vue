<script lang="ts" setup>
const router = useRouter()
</script>

<template lang="pug">
.application
  header
    v-container
      v-btn(
        icon
        @click="router.push('/')"
      )
        v-icon chevron_left
  main
    nuxt-page
</template>
