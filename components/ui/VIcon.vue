<script setup lang="ts">
import 'material-symbols'

const props = withDefaults(defineProps<{
  variant?: IconVariants
  fill?: boolean
  size?: number | string
}>(), {
  variant: 'rounded',
  size: 24,
})

// Doc: https://github.com/marella/material-symbols/tree/main/material-symbols#readme
type IconVariants = 'outlined' | 'rounded' | 'sharp'

const extendedClasses = computed(() => ({
  [`material-symbols-${props.variant}`]: true,
  fill: !!props.fill,
}))
</script>

<template lang="pug">
span(
  :class="extendedClasses"
  :style="`font-size: ${props.size}px`"
)
  slot
</template>
