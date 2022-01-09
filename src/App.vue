<template>
  <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
    <nav
      class="relative flex items-center justify-between sm:h-10 lg:justify-start"
      aria-label="Global"
    >
      <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
        <div class="flex items-center justify-between w-full md:w-auto">
          <a href="#">
            <span class="sr-only">Workflow</span>
            <span
              class="iconify w-10 h-10"
              data-icon="uim:vuejs"
              data-inline="false"
              style="color: #40b983"
            ></span>
          </a>
          <div class="-mr-2 flex items-center md:hidden">
            <button
              type="button"
              class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <!-- Heroicon name: outline/menu -->
              <svg
                class="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
        <router-link
          to="/"
          class="font-medium text-gray-500 hover:text-gray-900"
        >
          {{ t('home') }}
        </router-link>

        <router-link
          to="/about"
          class="font-medium text-gray-500 hover:text-gray-900"
        >
          {{ t('about') }}
        </router-link>

        <router-link
          to="/login"
          class="font-medium text-indigo-600 hover:text-indigo-500"
        >
          {{ t('login') }}
        </router-link>

        <select v-model="locale">
          <option value="en">English</option>
          <option value="zh-cn">中文</option>
        </select>
      </div>
    </nav>
  </div>
  <router-view />
  <div class="p-6 my-2 bg-gray-100 font-mono text-cool-gray-700">
    <pre>{{ x }}, {{ y }}</pre>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'
import { useMouse } from '@vueuse/core'

export default defineComponent({
  name: 'App',
  components: {},
  setup() {
    const { locale, t } = useI18n()
    const { x, y } = useMouse()
    return { locale, t, x, y }
  },
})
</script>
