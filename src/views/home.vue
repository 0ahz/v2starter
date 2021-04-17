<template>
  <div class="p-4">
    <h1 class="text-xl">Home</h1>
    <div class="p-2 my-2 rounded bg-gray-100 font-mono text-cool-gray-700">
      <pre>{{ test }}</pre>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { random, uniqueId } from 'lodash-es'
import dayjs from 'dayjs'

export default defineComponent({
  name: 'App',
  setup() {
    let test = {
      random: random(0, 1000000),
      uniqueId: uniqueId('uniqueId_'),
      fmtDate: dayjs().format('YYYY-DD-MM'),
    }
    return {
      test,
    }
  },
})
</script>
