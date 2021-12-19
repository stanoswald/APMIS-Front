<template>
  <el-form :model="form" ref="form" label-width="80px">
    <el-form-item label="用户名" prop="username">
      <el-input v-model="form.username" disabled></el-input>
    </el-form-item>

    <el-form-item label="姓名" prop="name">
      <el-input v-model="form.name" disabled></el-input>
    </el-form-item>

    <el-form-item label="用户角色" prop="role">
      <el-input v-model="form.role" disabled></el-input>
    </el-form-item>

    <el-form-item label="电话" prop="tel">
      <el-input v-model="form.tel"></el-input>
      <el-button class="btn" type="primary" @click="updateUser('tel',form.tel)" :disabled="check('tel')">修改
      </el-button>
    </el-form-item>

    <el-form-item label="邮箱" prop="email">
      <el-input v-model="form.email"></el-input>
      <el-button class="btn" type="primary" @click="updateUser('email',form.email)" :disabled="check('email')">修改
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'MyInfo',
  data() {
    return {
      form: {
        username: '',
        name: '',
        role: '',
        tel: '',
        email: ''
      }
    }
  },
  methods: {
    check(key) {
      return this.form[key] === sessionStorage.getItem(key)
    },
    updateUser(key, val) {
      let that = this
      this.$alert('确认修改？', '提示', {
        confirmButtonText: '确定'
      }).then(() => {
            that.$axios.get("update_user?"
                + key + '='
                + val + '&usr='
                + this.form.username).then(resp => {
              if (resp.data === "success") {
                this.$message({
                  message: '修改成功',
                  type: 'success'
                });
                sessionStorage.setItem(key, val)
                setTimeout(function () {
                  that.$router.go(0);
                }, 1000);
              } else this.$message({
                message: '修改失败',
                type: 'error'
              });
            })
          }, () => {
          }
      )
    },
  },
  mounted() {
    this.form.username = sessionStorage.getItem("username");
    this.form.name = sessionStorage.getItem("name");
    this.form.role = sessionStorage.getItem("role");
    this.form.tel = sessionStorage.getItem("tel");
    this.form.email = sessionStorage.getItem("email");
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