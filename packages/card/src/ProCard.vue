<template>
  <n-card
    :title="title"
    :size="size"
    :bordered="bordered"
    :hoverable="hoverable"
    :content-style="contentStyle"
    :header-style="headerStyle"
    v-bind="$attrs"
  >
    <template #header v-if="$slots.header">
      <slot name="header" />
    </template>
    
    <template #header-extra v-if="$slots.headerExtra">
      <slot name="header-extra" />
    </template>
    
    <slot />
    
    <template #footer v-if="$slots.footer">
      <slot name="footer" />
    </template>
    
    <template #action v-if="$slots.action">
      <slot name="action" />
    </template>
  </n-card>
</template>

<script setup lang="ts">
import { NCard } from 'naive-ui'

interface Props {
  title?: string
  size?: 'small' | 'medium' | 'large'
  bordered?: boolean
  hoverable?: boolean
  contentStyle?: Record<string, any>
  headerStyle?: Record<string, any>
}

defineOptions({
  name: 'ProCard',
  inheritAttrs: false
})

withDefaults(defineProps<Props>(), {
  size: 'medium',
  bordered: true,
  hoverable: false
})
</script>

<style scoped>
.n-card {
  transition: all 0.3s ease;
}
</style>