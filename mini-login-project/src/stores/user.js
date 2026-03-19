import { defineStore } from "pinia";
import { loginApi } from "@/api/auth"; // 导入模拟接口

export const useUserStore = defineStore("user", {
  state: () => ({
    token: localStorage.getItem("token") || "", // 从本地取 token 或空字符串
  }),

  actions: {
    // 登录方法
    async handleLogin(credentials) {
      try {
        const response = await loginApi(credentials); // 调用模拟登录接口
        this.token = response?.data?.token || "";
        localStorage.setItem("token", this.token); // 本地存储 token

        return true;
      } catch (error) {
        console.error("登录失败:", error);

        return false;
      }
    },
    logout() {
      this.token = "";
      localStorage.removeItem("token");
    },
  },
});
