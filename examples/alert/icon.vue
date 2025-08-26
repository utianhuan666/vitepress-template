<template>
  <div class="demo-alert">
    <div class="el-alert el-alert--success el-alert--has-icon">
      <div class="el-alert__icon">
        <svg viewBox="0 0 1024 1024" width="16" height="16">
          <path
            fill="currentColor"
            d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"
          />
        </svg>
      </div>
      <div class="el-alert__content">
        <span class="el-alert__title">恭喜你，这是一条成功消息</span>
      </div>
    </div>
    <div class="el-alert el-alert--info el-alert--has-icon">
      <div class="el-alert__icon">
        <svg viewBox="0 0 1024 1024" width="16" height="16">
          <path
            fill="currentColor"
            d="M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64zm67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344zM590.912 699.2c0-6.848 2.368-24.64 2.368-31.936l-6.208-188.48c0-47.296-44.352-47.296-44.352-47.296H451.776s-44.352 0-44.352 47.296l-6.208 188.48c0 7.296 2.368 25.088 2.368 31.936 0 6.592-2.368 23.936-2.368 31.232C401.216 756.8 407.04 768 429.408 768h165.248c22.336 0 28.16-11.2 28.16-37.568 0-7.296-2.368-24.64-2.368-31.232z"
          />
        </svg>
      </div>
      <div class="el-alert__content">
        <span class="el-alert__title">这是一条消息提示</span>
      </div>
    </div>
    <div class="el-alert el-alert--warning el-alert--has-icon">
      <div class="el-alert__icon">
        <svg viewBox="0 0 1024 1024" width="16" height="16">
          <path
            fill="currentColor"
            d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256zm0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z"
          />
        </svg>
      </div>
      <div class="el-alert__content">
        <span class="el-alert__title">警告，这是一条警告消息</span>
      </div>
    </div>
    <div class="el-alert el-alert--error el-alert--has-icon">
      <div class="el-alert__icon">
        <svg viewBox="0 0 1024 1024" width="16" height="16">
          <path
            fill="currentColor"
            d="M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336L512 457.664z"
          />
        </svg>
      </div>
      <div class="el-alert__content">
        <span class="el-alert__title">错了，这是一条错误消息</span>
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

.el-alert--has-icon {
  padding-left: 16px;
}

.el-alert__icon {
  font-size: 16px;
  width: 16px;
  margin-right: 8px;
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

.el-alert--success .el-alert__title,
.el-alert--success .el-alert__icon {
  color: #67c23a;
}

.el-alert--info {
  background-color: #f4f4f5;
  border: 1px solid #d3d4d6;
}

.el-alert--info .el-alert__title,
.el-alert--info .el-alert__icon {
  color: #909399;
}

.el-alert--warning {
  background-color: #fdf6ec;
  border: 1px solid #f5dab1;
}

.el-alert--warning .el-alert__title,
.el-alert--warning .el-alert__icon {
  color: #e6a23c;
}

.el-alert--error {
  background-color: #fef0f0;
  border: 1px solid #fbc4c4;
}

.el-alert--error .el-alert__title,
.el-alert--error .el-alert__icon {
  color: #f56c6c;
}
</style>
