<template>
  <router-view />
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
