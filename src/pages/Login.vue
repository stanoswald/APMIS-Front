<template>
  <body>
  <div id="login-box">

    <div style="text-align: center">
      <img src="../assets/img/logo.png" style="margin-top: 20px;height: 120px">
      <div style="margin-top: 20px">宿舍信息管理系统</div>
    </div>

    <el-divider></el-divider>

    <el-form label-width="80px" label-position="top">

      <el-form-item label="用户名">
        <el-input v-model="usr" placeholder="请输入学号/工号"></el-input>
      </el-form-item>

      <el-form-item label="密码">
        <el-input v-model="pwd" placeholder="请输入密码" show-password></el-input>
      </el-form-item>

      <el-form-item style="margin-top: 10px">
        <el-checkbox label="记住密码" name="type"></el-checkbox>
      </el-form-item>

      <el-form-item id="btn">
        <el-button id="btnn" type="primary" @click="submitForm('ruleForm')">登录</el-button>
      </el-form-item>

    </el-form>

  </div>
  </body>
</template>

<script>

export default {
  name: 'Login',
  data() {
    return {
      usr: '',
      pwd: ''

    }
  },
  mounted() {
  },
}
</script>

<style scoped>
* {
  margin: 0;
  /*padding: 0;*/
  box-sizing: border-box;
}

body {
  width: 100vw;
  height: 100vh;

  background-image: url("../assets/img/bg-sign_up.jpg");
  background-attachment: fixed;
  background-position: center;
  background-size: cover;

  display: flex;
  justify-content: center;
  align-items: center;
}

#login-box {
  padding: 36.8px 44.8px 0px 44.8px;
  width: 408px;
  height: 624px;
  border: 0px solid red;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.8);
}

#btn {
  text-align: center;
  margin-top: 20px;
}

#btnn {
  padding-left: 30px;
  padding-right: 30px;
}

.el-button--primary {
  background-color: rgb(71, 115, 161);
  border-color: rgb(71, 115, 161);
}

.el-divider {
  margin: 30px 0 20px 0;
  background-color: #606266;
  height: 1.5px;
}
</style>