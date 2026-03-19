<!-- src/views/Login.vue -->
<template>
  <div class="login-container">
    <el-card class="login-card">
      <h2>系统登录</h2>
      <!-- Element Plus 表单 -->
      <el-form :model="form" :rules="rules" ref="formRef">
        <el-form-item prop="username">
          <el-input v-model="form.username" placeholder="用户名" prefix-icon="User" />
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="form.password" type="password" placeholder="密码" show-password />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onLogin" :loading="loading" style="width: 100%">
            登 录
          </el-button>
        </el-form-item>
      </el-form>
      <p style="color: #999; font-size: 12px">提示: 用户名 admin, 密码 123456</p>
    </el-card>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/user";
import { ElMessage } from "element-plus";

defineOptions({ name: "LoginView" });

const router = useRouter();
const userStore = useUserStore(); // 实例化 Store

const formRef = ref(null);
const loading = ref(false);
const form = ref({
  username: "admin",
  password: "123456",
});

const rules = {
  username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
  password: [{ required: true, message: "请输入密码", trigger: "blur" }],
};

const onLogin = async () => {
  // 表单校验
  await formRef.value.validate();

  loading.value = true;
  // 调用 Store 中的登录动作
  const success = await userStore.handleLogin(form.value);
  loading.value = false;

  if (success) {
    ElMessage.success("登录成功！");
    router.push("/home"); // 跳转到首页
  } else {
    ElMessage.error("登录失败，请重试");
  }
};
</script>

<style scoped>
.login-container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
}
.login-card {
  width: 400px;
}
</style>
