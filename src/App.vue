<template>
  <nav class="navi">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/xxx">XXX</router-link>
  </nav>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {},
  created() {
    this.$ebus.on('test', (event: any) => {
      console.log(`$bus.on test: `, event)
    })
  },
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
