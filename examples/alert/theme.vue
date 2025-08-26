<template>
  <div class="demo-alert">
    <div class="el-alert el-alert--success">
      <div class="el-alert__content">
        <span class="el-alert__title">成功提示的文案</span>
      </div>
    </div>
    <div class="el-alert el-alert--success el-alert--dark">
      <div class="el-alert__content">
        <span class="el-alert__title">成功提示的文案</span>
      </div>
    </div>
    <div class="el-alert el-alert--warning">
      <div class="el-alert__content">
        <span class="el-alert__title">警告提示的文案</span>
      </div>
    </div>
    <div class="el-alert el-alert--warning el-alert--dark">
      <div class="el-alert__content">
        <span class="el-alert__title">警告提示的文案</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.demo-alert {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.el-alert {
  width: 100%;
  padding: 8px 16px;
  margin: 0;
  box-sizing: border-box;
  border-radius: 4px;
  position: relative;
  background-color: #ffffff;
  overflow: hidden;
  opacity: 1;
  display: flex;
  align-items: center;
  transition: opacity 0.2s;
}

.el-alert__content {
  display: table-cell;
  padding: 0 8px;
}

.el-alert__title {
  font-size: 13px;
  line-height: 18px;
}

.el-alert--success {
  background-color: #f0f9ff;
  border: 1px solid #b3d8ff;
}

.el-alert--success .el-alert__title {
  color: #67c23a;
}

.el-alert--success.el-alert--dark {
  background-color: #67c23a;
  border-color: #67c23a;
}

.el-alert--success.el-alert--dark .el-alert__title {
  color: #ffffff;
}

.el-alert--warning {
  background-color: #fdf6ec;
  border: 1px solid #f5dab1;
}

.el-alert--warning .el-alert__title {
  color: #e6a23c;
}

.el-alert--warning.el-alert--dark {
  background-color: #e6a23c;
  border-color: #e6a23c;
}

.el-alert--warning.el-alert--dark .el-alert__title {
  color: #ffffff;
}
</style>
