<template>
  <a-space>
    <a-button type="primary">Primary</a-button>
    <a-button type="primary">Primary</a-button>
    <a-button>Secondary</a-button>
    <a-button type="dashed">Dashed</a-button>
    <a-button type="outline">Outline</a-button>
    <a-button type="text">Text</a-button>
  </a-space>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { random, uniqueId } from 'lodash-es'
import dayjs from 'dayjs'
import { useCountStore } from '@/stores/index'

export default defineComponent({
  name: 'PageHome',
  setup() {
    const countStore = useCountStore()

    const test = {
      random: random(0, 1000000),
      uniqueId: uniqueId('uniqueId_'),
      fmtDate: dayjs().format('YYYY-MM-DD'),
    }
    return {
      test,
      countStore,
    }
  },
})
</script>
