<template>
  <nav class="flex">
    <div class="p-2 m-2 flex">
      <span
        class="iconify w-8 h-8"
        data-icon="uim:vuejs"
        data-inline="false"
        style="color: #40b983"
      ></span>
      <span class="text-cool-gray-300">&</span>
      <img class="w-8 h-8" src="@/assets/logo-vite.svg" />
    </div>
    <div class="p-2 m-2">
      <router-link to="/">{{ t('home') }}</router-link>
    </div>
    <div class="p-2 m-2">
      <router-link to="/about">{{ t('about') }}</router-link>
    </div>
    <div class="p-2 m-2">
      <router-link to="/xxx">XXX</router-link>
    </div>
    <div class="flex-1"></div>
    <div class="p-2 m-2">
      <select v-model="locale">
        <option value="en">English</option>
        <option value="zh-CN">中文</option>
      </select>
    </div>
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

