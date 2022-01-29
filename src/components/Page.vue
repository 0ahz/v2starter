<template>
  <div class="h-full flex flex-col">
    <div class="flex-shrink-0">
      <van-nav-bar
        :title="title"
        :left-arrow="leftArrow"
        :left-text="leftText"
        :right-text="rightText"
        :safe-area-inset-top="true"
        @click-left="onClickLeft"
        @click-right="onClickRight"
      >
        <template #left v-if="$slots.left">
          <slot name="left" />
        </template>
        <template #title v-if="$slots.title">
          <slot name="title" />
        </template>
        <template #right v-if="$slots.right">
          <slot name="right" />
        </template>
      </van-nav-bar>
    </div>
    <div class="flex-1 overflow-y-auto overflow-x-hidden">
      <slot />
    </div>
    <div class="flex-shrink-0">footer</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Page',
  props: {
    title: String,
    leftText: String,
    leftArrow: {
      type: Boolean,
      default: true,
    },
    rightText: String,
  },
  emits: ['click-left', 'click-right'],
  setup(props, { emit }) {
    const router = useRouter()

    const onClickLeft = () => {
      router.back()
    }

    const onClickRight = (e: any) => {
      emit('click-right', e)
    }

    return {
      onClickLeft,
      onClickRight,
    }
  },
})
</script>
