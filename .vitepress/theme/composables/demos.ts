import { computed } from "vue";

// 动态导入所有示例组件
const modules = import.meta.glob("../../examples/**/*.vue", { eager: true });

export const useDemos = () => {
  const demos = computed(() => {
    const demoMap: Record<string, any> = {};

    for (const path in modules) {
      const module = modules[path] as any;
      // 提取路径：../../examples/button/basic.vue -> button/basic
      const demoPath = path.replace("../../examples/", "").replace(".vue", "");

      demoMap[demoPath] = module.default;
    }

    return demoMap;
  });

  return {
    demos: demos.value,
  };
};
