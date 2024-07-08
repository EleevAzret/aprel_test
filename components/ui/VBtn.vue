<script setup lang="ts">
const props = withDefaults(defineProps<{
  icon?: boolean
  size?: number | string
}>(), {
  variant: 'rounded',
  size: 24,
})

const emit = defineEmits<{
  click: []
}>()

const extendedClasses = computed(() => ({
  btn__icon: props.icon,
}))
</script>

<template lang="pug">
.btn(
  :class="extendedClasses"
  @click="emit('click')"
)
  slot
</template>
