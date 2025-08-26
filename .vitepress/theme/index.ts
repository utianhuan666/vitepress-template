import DefaultTheme from "vitepress/theme";
import { App } from "vue";
import VpDemo from "./components/VpDemo.vue";
import ApiTable from "./components/ApiTable.vue";
import Layout from "./Layout.vue";
import naive from "naive-ui";

// 导入样式
import "./styles/vars.css";
import "./styles/demo.css";

// 直接导入示例组件
import AlertBasic from "../../examples/alert/basic.vue";
import ButtonBasic from "../../examples/button/basic.vue";
import ButtonSize from "../../examples/button/size.vue";

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }: { app: App }) {
    // 注册 Naive UI
    app.use(naive);

    // 注册全局组件
    app.component("VpDemo", VpDemo);
    app.component("ApiTable", ApiTable);

    // 注册示例组件
    app.component("alert-basic", AlertBasic);
    app.component("button-basic", ButtonBasic);
    app.component("button-size", ButtonSize);
  },
};
