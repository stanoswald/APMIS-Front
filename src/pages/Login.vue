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
        <el-input v-model="username" placeholder="请输入学号/工号">
          <i slot="prefix" class="el-input__icon el-icon-user-solid"></i>
        </el-input>
      </el-form-item>

      <el-form-item label="密码">
        <el-input v-model="password" placeholder="请输入密码" show-password>
          <i slot="prefix" class="el-input__icon el-icon-lock"></i>
        </el-input>
      </el-form-item>

      <el-form-item style="margin-top: 10px">
        <el-checkbox label="记住密码" name="type"></el-checkbox>
      </el-form-item>

      <el-form-item id="btn-item">
        <el-button id="btn" type="primary" @click="login">登录</el-button>
      </el-form-item>

    </el-form>

  </div>
  </body>
</template>

<script>
import router from "@/router";

export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login() {
      this.$axios.post("login", this.$data).then(resp => {
        console.log(resp.data)

        if (resp.data !== "fail") {
          this.$store.commit("SET_USER", resp.data)

          switch (resp.data.role) {

            case "STUDENT":
              this.$axios.get("stu_info?username="+this.username).then(resp=>{
                this.$store.commit("SET_STUDENT", resp.data)
              })
              router.push("/student")
              break;

            case "MANAGER":
              router.push("/manager")
              break;

            case "PLUMBER":
              router.push("/plumber")
              break;
          }
        } else
          alert("密码错误")
      })
    }
  }
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
  background-color: rgba(255, 255, 255, 0.9);

  box-shadow: 0px 0px 30px #333;
}

#btn-item {
  text-align: center;
  margin-top: 20px;
}

#btn {
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