<template>
  <div class="page-about">
    <h1 @click="$bus.emit('test', { test: 'xxx' })">About</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  components: {},
})
</script>
