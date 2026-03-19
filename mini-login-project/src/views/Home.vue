<template>
  <div class="home-container">
    <el-card class="home-card">
      <h2>首页</h2>
      <p>已登录</p>
      <p class="token">token: {{ userStore.token || "-" }}</p>
      <el-button type="danger" @click="onLogout">退出登录</el-button>
    </el-card>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
import { useUserStore } from "@/stores/user";

defineOptions({ name: "HomeView" });

const router = useRouter();
const userStore = useUserStore();

const onLogout = () => {
  userStore.logout();
  ElMessage.success("已退出登录");
  router.push("/login");
};
</script>

<style scoped>
.home-container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
}
.home-card {
  width: 520px;
}
.token {
  color: #666;
  word-break: break-all;
}
</style>
