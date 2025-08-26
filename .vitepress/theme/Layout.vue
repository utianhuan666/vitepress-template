<template>
  <n-config-provider :theme="theme">
    <n-message-provider>
      <n-notification-provider>
        <n-dialog-provider>
          <Layout />
        </n-dialog-provider>
      </n-notification-provider>
    </n-message-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useData } from "vitepress";
import {
  NConfigProvider,
  NMessageProvider,
  NNotificationProvider,
  NDialogProvider,
  darkTheme,
} from "naive-ui";
import DefaultTheme from "vitepress/theme";

const { Layout } = DefaultTheme;

const { isDark } = useData();

const theme = computed(() => {
  return isDark.value ? darkTheme : null;
});
</script>

<style>
/* Logo 渐变色效果 */
.VPHero .VPImage {
  position: relative;
}

.VPHero .VPImage img {
  position: relative;
  z-index: 1;
}

.VPHero .VPImage::before {
  content: '';
  position: absolute;
  top: -20px;
  left: -20px;
  right: -20px;
  bottom: -20px;
  background: linear-gradient(135deg, 
    #275287 0%, 
    #3a6ba5 25%, 
    #4d7fc4 50%, 
    #6094e3 75%, 
    #73a9ff 100%
  );
  border-radius: 50%;
  opacity: 0.1;
  z-index: 0;
  animation: logoGlow 3s ease-in-out infinite alternate;
}

.VPHero .VPImage::after {
  content: '';
  position: absolute;
  top: -10px;
  left: -10px;
  right: -10px;
  bottom: -10px;
  background: linear-gradient(45deg, 
    rgba(39, 82, 135, 0.3) 0%, 
    rgba(115, 169, 255, 0.3) 100%
  );
  border-radius: 50%;
  z-index: 0;
  animation: logoGlow 2s ease-in-out infinite alternate-reverse;
}

@keyframes logoGlow {
  0% {
    transform: scale(1);
    opacity: 0.1;
  }
  100% {
    transform: scale(1.05);
    opacity: 0.2;
  }
}

/* 暗色模式下的调整 */
.dark .VPHero .VPImage::before {
  background: linear-gradient(135deg, 
    #275287 0%, 
    #4d7fc4 50%, 
    #73a9ff 100%
  );
  opacity: 0.15;
}

.dark .VPHero .VPImage::after {
  background: linear-gradient(45deg, 
    rgba(39, 82, 135, 0.4) 0%, 
    rgba(115, 169, 255, 0.4) 100%
  );
}
</style>
