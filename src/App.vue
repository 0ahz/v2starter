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
      <router-link to="/xxx">404</router-link>
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
  <div class="p-2 my-2 bg-gray-100 font-mono text-cool-gray-700">
    <pre>{{ state }}</pre>
  </div>
  <div class="p-2 my-2 bg-gray-100 font-mono text-cool-gray-700">
    <pre>{{ x }}, {{ y }}</pre>
  </div>
  <div class="p-2 my-2">
    <button class="btn">Button</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, reactive, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useHead } from '@vueuse/head'
import { useMouse } from '@vueuse/core'

export default defineComponent({
  name: 'App',
  components: {},
  setup() {
    const state = reactive({
      ebus: '',
    })
    const { locale, t } = useI18n()
    const $ebus = getCurrentInstance()?.appContext.config.globalProperties.$ebus
    $ebus.on('app.ebus', (val: string) => {
      state.ebus = val
    })
    const { x, y } = useMouse()
    useHead({
      title: computed(
        () => `${x.value},${y.value} - ${import.meta.env.VITE_APP_TITLE}`
      ),
      meta: [
        { name: 'description', content: import.meta.env.VITE_APP_DESCRIPTION },
      ],
    })
    return { state, locale, t, x, y }
  },
})
</script>

