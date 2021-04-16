<template>
  <nav class="navi">
    <select v-model="locale">
      <option value="en">en</option>
      <option value="zh-CN">zh-CN</option>
    </select>
    <router-link to="/">{{ t('home') }}</router-link>
    <router-link to="/about">{{ t('about') }}</router-link>
    <router-link to="/xxx">XXX</router-link>
  </nav>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'App',
  components: {},
  setup() {
    const { locale, t } = useI18n()

    return { locale, t }
  },
  // created() {
  //   this.$ebus.on('test', (event: any) => {
  //     console.log(`$bus.on test: `, event)
  //   })
  // },
})
</script>

<style>
#app {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.navi a {
  margin-right: 10px;
}
</style>
