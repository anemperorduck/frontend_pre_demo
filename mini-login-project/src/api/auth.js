// 实际项目中会引入 axios，这里为了演示“假接口”和项目结构，我们直接返回 Promise

export function loginApi(data) {
  return new Promise((resolve, reject) => {
    // 模拟网络延迟 1 秒
    setTimeout(() => {
      if (data.username === "admin" && data.password === "123456") {
        resolve({
          code: 200,
          data: {
            token: "fake-jwt-token-" + Date.now(), // 生成一个假 token
            userInfo: { name: "Python全栈工程师" },
          },
          message: "登录成功",
        });
      } else {
        reject(new Error("用户名或密码错误"));
      }
    }, 1000);
  });
}

/* 
如果是真实后端:
import axios from 'axios'
export function loginApi(data) {
  return axios.post('http://localhost:8000/api/login', data)
}
*/
