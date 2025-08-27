<template>
  <div class="demo-space">
    <n-button size="large" type="primary">大型按钮</n-button>
    <n-button size="medium" type="primary">中等按钮</n-button>
    <n-button size="small" type="primary">小型按钮</n-button>
  </div>
</template>

<script setup>
// 使用全局注册的 <n-button>，无需导入
</script>

<style scoped>
.demo-space > * + * {
  margin-left: 12px;
}
</style>