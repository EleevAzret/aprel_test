<script setup lang="ts">
import 'material-symbols'

defineProps<{
  label?: string
  placeholder?: string
}>()

const value = defineModel<unknown>()
</script>

<template lang="pug">
.v-input
  slot(name="prepend")
  div
    label.v-input-label(v-if="label") {{ label }}
    input.v-input-content(
      v-model="value"
      :placeholder="placeholder"
    )
</template>
