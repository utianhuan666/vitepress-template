<template>
  <div class="demo-space">
    <n-alert title="Info" type="info">
      这是一条信息提示
    </n-alert>
    <n-alert title="Success" type="success">
      这是一条成功提示
    </n-alert>
    <n-alert title="Warning" type="warning">
      这是一条警告提示
    </n-alert>
    <n-alert title="Error" type="error">
      这是一条错误提示
    </n-alert>
  </div>
</template>

<script setup>
import { NAlert } from 'naive-ui'
</script>

<style scoped>
.demo-space > * + * {
  margin-top: 12px;
}
</style>