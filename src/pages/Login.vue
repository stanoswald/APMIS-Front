<template>
  <div id="login-box">
    <div style="text-align: center">
      <img src="../assets/img/logo.png" style="margin-top: 50px">
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

      <el-form-item id="btn">
        <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      pwd: '',
      usr: ''
    }
  },
  mounted() {
    // this.$axios.post().then(resp => {
    //
    // });
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  /*box-sizing: border-box;*/
}
body{
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
#login-box{
  padding: 36.8px 44.8px 0px 44.8px;
  width: 408px;
  height: 624px;
  border: 0px solid red;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 0.8);
}
#btn{
  text-align: center;
  margin-top: 50px;
}
.el-button--primary{
  background-color: rgb(71, 115, 161);
  border-color:rgb(71, 115, 161);
}
.el-divider{
  margin-top: 50px;
  margin-bottom: 50px;
  background-color: #606266;
}
</style>