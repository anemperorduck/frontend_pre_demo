import { createApp } from "vue";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css"; // 引入 Element Plus 样式
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia()); // 注册状态管理
app.use(router); // 注册路由
app.use(ElementPlus); // 注册UI库
app.mount("#app"); // 挂载到 index.html 的 #app 元素上
