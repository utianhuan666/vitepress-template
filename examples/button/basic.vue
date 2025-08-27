<template>
  <div class="demo-space">
    <n-button>默认按钮</n-button>
    <n-button type="primary">主要按钮</n-button>
    <n-button type="info">信息按钮</n-button>
    <n-button type="success">成功按钮</n-button>
    <n-button type="warning">警告按钮</n-button>
    <n-button type="error">危险按钮</n-button>
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