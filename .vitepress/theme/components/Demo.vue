<template>
  <div class="demo-block">
    <div class="demo-content">
      <component :is="demoComponent" v-if="demoComponent" />
      <div v-else class="demo-placeholder">
        <p>示例组件加载中...</p>
      </div>
    </div>

    <div class="demo-description" v-if="description">
      <div v-html="description"></div>
    </div>

    <div class="demo-actions">
      <button
        class="demo-action-btn"
        @click="toggleCode"
        :title="showCode ? '隐藏代码' : '显示代码'"
      >
        <svg class="demo-icon" viewBox="0 0 24 24">
          <path
            d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0L19.2 12l-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"
          />
        </svg>
      </button>

      <button class="demo-action-btn" @click="copyCode" title="复制代码">
        <svg class="demo-icon" viewBox="0 0 24 24">
          <path
            d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"
          />
        </svg>
      </button>
    </div>

    <div class="demo-code" v-show="showCode">
      <div class="demo-code-content" v-html="source"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, inject } from "vue";
import { copy } from "../utils/clipboard";

interface Props {
  source: string;
  path: string;
  rawSource: string;
  description?: string;
}

const props = withDefaults(defineProps<Props>(), {
  description: "",
});

const showCode = ref(false);
const demos = inject<Record<string, any>>("demos", {});

const demoComponent = computed(() => {
  if (!demos || !props.path) return null;

  const demoPath = props.path.replace(/^examples\//, "").replace(/\.vue$/, "");
  return demos[demoPath] || null;
});

const toggleCode = () => {
  showCode.value = !showCode.value;
};

const copyCode = async () => {
  try {
    await copy(decodeURIComponent(props.rawSource));
    // 这里可以添加复制成功的提示
    console.log("代码已复制到剪贴板");
  } catch (err) {
    console.error("复制失败:", err);
  }
};
</script>
