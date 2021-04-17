<template>
  <div class="p-4">
    <h1 class="text-xl" @click="$ebus.emit('test', { test: 'xxx' })">About</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  components: {},
})
</script>
