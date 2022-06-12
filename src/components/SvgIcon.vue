<template>
  <svg class="svg-icon" aria-hidden="true">
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
})
</script>

<style scoped>
.svg-icon {
  width: 1.2em;
  height: 1.2em;
  position: relative;
  fill: currentColor;
  vertical-align: -2px;
}
</style>
