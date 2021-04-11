<template>
  <div class="page-home">
    <h1>Home</h1>
  </div>
  <div>{{ test }}</div>
  <span
    class="iconify"
    data-icon="uim:vuejs"
    data-inline="false"
    style="display: inline-block; width: 40px; height: 40px;color: #40b983"
  ></span>
  <img
    src="@/assets/logo-vite.svg"
    style="display: inline-block; width: 40px"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { random, uniqueId } from 'lodash-es'
import dayjs from 'dayjs'

export default defineComponent({
  name: 'App',
  setup() {
    let test = {
      random: random(0, 100),
      uniqueId: uniqueId('uniqueId_'),
      fmtDate: dayjs('2019-01-25').format('DD/MM/YYYY'),
    }
    console.log(test)
    return {
      test,
    }
  },
})
</script>
