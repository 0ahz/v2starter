<template>
  <ConfigProvider :theme-vars="themeVars">
    <router-view />
  </ConfigProvider>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ConfigProvider } from 'vant'

export default defineComponent({
  name: 'App',
  components: {
    ConfigProvider,
  },
  setup() {
    const themeVars = {
      toastMaxWidth: '80%',
      navBarArrowSize: `${22/3.75}vw`,
    }
    return { themeVars }
  },
})
</script>
