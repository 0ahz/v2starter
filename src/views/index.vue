<template>
  <div class="h-full flex flex-col justify-center items-center">
    <header class="flex flex-col justify-center items-center space-y-4">
      <!-- <i-uim-vuejs class="text-8xl" style="color: #40b983" />
      <SvgIcon name="logo" style="color: #40b983; font-size: 30px" /> -->
      <img
        src="https://media.giphy.com/media/XreQmk7ETCak0/giphy.gif"
        alt="Cool kid doing thumbs up"
      />
      <h1 class="text-4xl">{{ title }}</h1>
      <nav class="text-base space-x-4">
        <router-link to="/">{{ $t('home') }}</router-link>
        <router-link to="/about">{{ $t('about') }}</router-link>
        <router-link to="/login">{{ $t('login') }}</router-link>
      </nav>
    </header>
    <router-view />
    <footer class="flex flex-row justify-center items-center space-x-2">
      <router-link to="/" class="flex items-center">
        <i-ph-house-duotone />
      </router-link>
      <span class="cursor-pointer flex items-center" @click="toggleDark()">
        <i-ph-moon-stars-duotone v-if="isDark" />
        <i-ph-sun-duotone v-else />
      </span>
      <span class="cursor-pointer flex items-center" @click="toggleLocale">
        <i-ph-translate-duotone />
      </span>
      <a
        class="cursor-pointer flex items-center"
        href="https://github.com/0ahz/v2starter"
      >
        <i-ph-github-logo-duotone />
      </a>
      <span
        class="cursor-pointer flex items-center space-x-2 count-btn"
        @click="counterStore.counter++"
      >
        <i-ph-heart-straight-duotone />
        <span
          v-if="counterStore.counter"
          class="text-base select-none font__din-medium"
        >
          {{ counterStore.counter }}
        </span>
      </span>
    </footer>
  </div>
</template>

<script lang="ts">
import { isDark, toggleDark } from '@/composables'
import { useCounterStore } from '@/stores'

export default defineComponent({
  name: 'AppIndex',
  setup() {
    const { availableLocales, locale } = useI18n()

    const toggleLocale = () => {
      const locales = availableLocales
      locale.value =
        locales[(locales.indexOf(locale.value) + 1) % locales.length]
    }

    const counterStore = useCounterStore()

    return {
      title: import.meta.env.VITE_TITLE,
      isDark,
      toggleDark,
      toggleLocale,
      counterStore,
    }
  },
})
</script>
