<template>
  <svg :class="classNames" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  className: {
    type: String,
    default: () => ''
  }
})
const iconName = computed(() => `#icon-${props.name}`)
const classNames = computed(() =>{
  return [
    'icon-svg',
    `icon-svg__${props.name}`,
    props.className && /\S/.test(props.className) ? `${props.className}` : ''
  ]
})
</script>
<script>
export default {
  name: 'index'
}
</script>
<style scoped>
.icon-svg {
  width: 1em;
  height: 1em;
  fill: currentColor;
  overflow: hidden;
}
.icon-svg.filled {
  width: 100%;
  height: 100%;
}
</style>
