<template>
  <svg
    class="svg-icon"
    aria-hidden="true"
    :style="{ color }"
    @click="$emit('click', $event)"
  >
    <use :xlink:href="`#svgicon-${name}`" :fill="color" />
  </svg>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SvgIcon',
  props: {
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: 'currentColor',
    },
  },
  emits: ['click'],
})
</script>

<style scoped>
.svg-icon {
  position: relative;
  width: 1em;
  height: 1em;
  fill: currentColor;
  vertical-align: -0.15em;
}
</style>
