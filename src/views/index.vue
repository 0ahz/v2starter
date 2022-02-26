<template>
  <a-layout>
    <a-layout-header>
      <a-menu mode="horizontal" :default-selected-keys="['1']">
        <a-menu-item
          key="0"
          :style="{ padding: 0, marginRight: '38px' }"
          disabled
        >
          <div
            :style="{
              width: '80px',
              height: '30px',
              borderRadius: '2px',
              background: 'var(--color-fill-3)',
              cursor: 'text',
            }"
          />
        </a-menu-item>
        <a-menu-item key="1">Home</a-menu-item>
        <a-menu-item key="2">Solution</a-menu-item>
        <a-menu-item key="3">Cloud Service</a-menu-item>
        <a-menu-item key="4">Cooperation</a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout>
      <!-- <a-layout-sider>
        <a-menu
          :style="{ width: '200px', height: '100%' }"
          :default-open-keys="['0']"
          :default-selected-keys="['0_1']"
          show-collapse-button
        >
          <a-menu-item key="0_0_0" data-obj="1">
            <template #icon><icon-apps></icon-apps></template>
            <template #title>Menu 1</template>
          </a-menu-item>
          <a-sub-menu key="0">
            <template #icon><icon-apps></icon-apps></template>
            <template #title>Navigation 1</template>
            <a-menu-item key="0_0">Menu 1</a-menu-item>
            <a-menu-item key="0_1">Menu 2</a-menu-item>
            <a-menu-item key="0_2" disabled>Menu 3</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="1">
            <template #icon><icon-bug></icon-bug></template>
            <template #title>Navigation 2</template>
            <a-menu-item key="1_0">Menu 1</a-menu-item>
            <a-menu-item key="1_1">Menu 2</a-menu-item>
            <a-menu-item key="1_2">Menu 3</a-menu-item>
          </a-sub-menu>
          <a-sub-menu key="2">
            <template #icon><icon-bulb></icon-bulb></template>
            <template #title>Navigation 3</template>
            <a-menu-item-group title="Menu Group 1">
              <a-menu-item key="2_0">Menu 1</a-menu-item>
              <a-menu-item key="2_1">Menu 2</a-menu-item>
            </a-menu-item-group>
            <a-menu-item-group title="Menu Group 2">
              <a-menu-item key="2_2">Menu 3</a-menu-item>
              <a-menu-item key="2_3">Menu 4</a-menu-item>
            </a-menu-item-group>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider> -->
      <a-layout-content>
        <div class="p-4"><router-view /></div>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Index',
  setup() {},
})
</script>
