import { createRouter, createWebHistory } from "vue-router";
import Login from "@/views/Login.vue";
import Home from "@/views/Home.vue";

const routes = [
  { path: "/", redirect: "/login" }, // 默认路由，重定向到登录页
  { path: "/login", component: Login },
  { path: "/home", component: Home },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// 全局前置守卫（拦截未登录用户）
router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("token"); // 简单从本地取 token
  if (to.path !== "/login" && !token) {
    next("/login"); // 没 token 赶回登录页
  } else {
    next(); // 放行
  }
});

export default router;
