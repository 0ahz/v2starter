<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useHead } from '@vueuse/head'
import { isDark, preferredDark } from '@/composables'

export default defineComponent({
  setup() {
    useHead({
      meta: [
        {
          name: 'theme-color',
          content: computed(() => (isDark.value ? '#00aba9' : '#ffffff')),
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: computed(() =>
            preferredDark.value ? '/favicon-dark.svg' : '/favicon.svg',
          ),
        },
      ],
    })
  },
})
</script>
