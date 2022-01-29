<template>
  <div class="h-full flex flex-col">
    <div class="flex-1 overflow-hidden">
      <router-view />
    </div>
    <div class="flex-shrink-0">
      <van-tabbar
        v-model="active"
        :fixed="false"
        :safe-area-inset-bottom="true"
      >
        <template v-for="tab in tabs" :key="tab.name">
          <van-tabbar-item
            :name="tab.name"
            :icon="tab.icon"
            :to="tab.to"
            :replace="true"
          >
            {{ tab.text }}
          </van-tabbar-item>
        </template>
      </van-tabbar>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { loading, toast } from '@/utils'

export default defineComponent({
  name: 'App',
  setup() {
    const active = ref('home')
    onMounted(() => {
      loading.show('哈哈哈')

      setTimeout(() => {
        loading.show('😆😆😆')
      }, 3000)

      setTimeout(() => {
        loading.hide()
        toast.show('哈哈哈😆😆😆😆')
      }, 6000)
    })
    return {
      active,
      tabs: [
        { name: 'home', icon: 'wap-home-o', to: '/', text: '首页' },
        { name: 'mine', icon: 'contact', to: '/mine', text: '我的' },
      ],
    }
  },
})
</script>
