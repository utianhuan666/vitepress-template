<script setup lang="ts">
import { computed, getCurrentInstance, ref, toRef } from "vue";
import { isClient, useClipboard, useToggle } from "@vueuse/core";
import {
  NButton,
  NIcon,
  NTooltip,
  NCollapse,
  NCollapseItem,
  useMessage,
} from "naive-ui";
import { CodeOutline, CopyOutline, ChevronUpOutline } from "@vicons/ionicons5";
import SourceCode from "./demo/VpSourceCode.vue";

const props = defineProps<{
  source: string;
  path: string;
  rawSource: string;
  description: string;
}>();

const message = useMessage();

const { copy, isSupported } = useClipboard({
  source: decodeURIComponent(props.rawSource),
  read: false,
});

const [sourceVisible, toggleSourceVisible] = useToggle();

const sourceCodeRef = ref<HTMLButtonElement>();

const decodedDescription = computed(() =>
  decodeURIComponent(props.description)
);

const copyCode = async () => {
  if (!isSupported) {
    message.error("剪贴板不支持");
    return;
  }
  try {
    await copy();
    message.success("代码已复制到剪贴板");
  } catch (e: any) {
    message.error("复制失败: " + e.message);
  }
};

const onSourceVisibleKeydown = (e: KeyboardEvent) => {
  if (["Enter", "NumpadEnter", "Space"].includes(e.code)) {
    e.preventDefault();
    toggleSourceVisible(false);
    sourceCodeRef.value?.focus();
  }
};
</script>

<template>
  <div
    class="demo-description"
    v-if="decodedDescription"
    v-html="decodedDescription"
  />

  <div class="example">
    <div class="example-showcase">
      <slot name="source" />
    </div>

    <div class="example-divider"></div>

    <div class="op-btns">
      <n-tooltip trigger="hover">
        <template #trigger>
          <n-button quaternary circle size="small" @click="copyCode">
            <template #icon>
              <n-icon>
                <CopyOutline />
              </n-icon>
            </template>
          </n-button>
        </template>
        复制代码
      </n-tooltip>

      <n-tooltip trigger="hover">
        <template #trigger>
          <n-button
            ref="sourceCodeRef"
            quaternary
            circle
            size="small"
            @click="toggleSourceVisible()"
          >
            <template #icon>
              <n-icon>
                <CodeOutline />
              </n-icon>
            </template>
          </n-button>
        </template>
        {{ sourceVisible ? "隐藏源码" : "查看源码" }}
      </n-tooltip>
    </div>

    <SourceCode :visible="sourceVisible" :source="source" />

    <div
      v-show="sourceVisible"
      class="example-float-control"
      tabindex="0"
      role="button"
      @click="toggleSourceVisible(false)"
      @keydown="onSourceVisibleKeydown"
    >
      <n-icon size="16">
        <ChevronUpOutline />
      </n-icon>
      <span>隐藏源码</span>
    </div>
  </div>
</template>

<style scoped>
.demo-description {
  font-size: 14px;
  color: var(--vp-c-text-2);
  margin: 20px 0 16px;
  line-height: 1.6;
}

.example {
  border: 1px solid var(--vp-c-border);
  border-radius: 8px;
  margin: 20px 0;
  overflow: hidden;
}

.example-showcase {
  padding: 24px;
  background-color: var(--vp-c-bg);
}

.example-divider {
  height: 1px;
  background-color: var(--vp-c-border);
}

.op-btns {
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  background-color: var(--vp-c-bg-soft);
}

.example-float-control {
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid var(--vp-c-border);
  height: 44px;
  background-color: var(--vp-c-bg);
  color: var(--vp-c-text-2);
  cursor: pointer;
  transition: color 0.2s;
}

.example-float-control:hover {
  color: var(--vp-c-brand-1);
}

.example-float-control span {
  font-size: 14px;
  margin-left: 8px;
}
</style>
