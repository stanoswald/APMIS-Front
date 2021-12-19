<template>
  <el-form :model="form" status-icon :rules="rules" ref="form" label-width="90px">

    <el-form-item label="当前密码" prop="currPass">
      <el-input type="password"
                v-model="form.currPass"
                autocomplete="off"
                placeholder="请输入当前密码"
                show-password>
      </el-input>
    </el-form-item>

    <el-form-item label="新密码" prop="pass">
      <el-input type="password"
                v-model="form.pass"
                autocomplete="off"
                placeholder="请输入新密码"
                show-password>

      </el-input>
    </el-form-item>
    <el-form-item label="确认新密码" prop="checkPass">
      <el-input type="password"
                v-model="form.checkPass"
                autocomplete="off"
                placeholder="请确认新密码">

      </el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="updateUser()" :disabled="check()">提交</el-button>
      <el-button @click="reset()">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'PwdSetting',
  data() {
    const validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.form.checkPass !== '') {
          this.$refs.form.validateField('checkPass');
        }
        callback();
      }
    };
    const validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'));
      } else if (value !== this.form.pass) {
        callback(new Error('两次输入密码不一致!'));
      } else {
        callback();
      }
    };
    return {
      form: {
        currPass: '',
        pass: '',
        checkPass: ''
      },
      username: '',
      rules: {
        pass: [
          {validator: validatePass, trigger: 'blur'}
        ],
        checkPass: [
          {validator: validatePass2, trigger: 'blur'}
        ],
      }
    }
  },
  methods: {
    check() {
      return !(this.form.pass === this.form.checkPass
          && this.form.pass !== ''
          && this.form.checkPass !== '')
    },
    updateUser() {
      let that = this
      that.$axios.post("update_user", {
        'username': this.username,
        'currPass': this.form.currPass,
        'pass': this.form.pass,
      }).then(resp => {
        if (resp.data === "success") {
          this.$message({
            message: '修改成功',
            type: 'success'
          });
          setTimeout(function () {
            that.$router.go(0);
          }, 1000);
        } else this.$message({
          message: '修改失败',
          type: 'error'
        });
      })


    },
    reset() {
      this.$refs.form.resetFields();
    }
  },
  mounted() {
    this.username = sessionStorage.getItem("username");
  },

}
</script>

<style scoped>
span {
  font-size: 18px;
  width: 100%;
  text-align: center;
}

.el-divider {
  margin: 40px 0 40px 0;
}

.el-input {
  width: 30%;
}

.btn {
  margin-left: 20px;
}
</style>